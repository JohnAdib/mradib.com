import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { after, before, test } from "node:test";
import { setTimeout as delay } from "node:timers/promises";
import { chromium } from "playwright-core";

const baseUrl = process.env.TEST_BASE_URL ?? "http://127.0.0.1:3118";
const usesExternalServer = process.env.TEST_BASE_URL !== undefined;
const slideCount = 12;

let browser;
let server;
let serverOutput = "";

function captureServerOutput(stream) {
	stream.on("data", (chunk) => {
		serverOutput = `${serverOutput}${chunk}`.slice(-10_000);
	});
}

async function waitForServer() {
	const deadline = Date.now() + 60_000;
	while (Date.now() < deadline) {
		if (server && server.exitCode !== null) {
			throw new Error(`Next.js exited before startup:\n${serverOutput}`);
		}
		try {
			const response = await fetch(`${baseUrl}/pitch-deck`);
			if (response.ok) return;
		} catch {
			// The server is still starting.
		}
		await delay(250);
	}
	throw new Error(`Timed out waiting for Next.js:\n${serverOutput}`);
}

before(async () => {
	if (!usesExternalServer) {
		server = spawn(
			"npm",
			["run", "dev", "--", "--hostname", "127.0.0.1", "--port", "3118"],
			{
				detached: true,
				env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
				stdio: ["ignore", "pipe", "pipe"],
			},
		);
		captureServerOutput(server.stdout);
		captureServerOutput(server.stderr);
	}
	await waitForServer();
	// CHROME_BIN points at a Chromium build (CI, Linux); otherwise use installed Chrome.
	browser = await chromium.launch(
		process.env.CHROME_BIN
			? { executablePath: process.env.CHROME_BIN, args: ["--no-sandbox"] }
			: { channel: "chrome", headless: true },
	);
});

after(async () => {
	await browser?.close();
	if (server?.pid && server.exitCode === null) {
		process.kill(-server.pid, "SIGTERM");
	}
});

test("the twelve slides render in data order and every overview anchor resolves", async () => {
	const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
	await page.goto(`${baseUrl}/pitch-deck`);
	const ids = await page.$$eval("#slides section[id]", (nodes) =>
		nodes.map((node) => node.id),
	);
	const anchors = await page.$$eval("#overview ol a[href^='#']", (nodes) =>
		nodes.map((node) => node.getAttribute("href").slice(1)),
	);
	assert.equal(ids.length, slideCount);
	assert.deepEqual(anchors, ids);
	assert.equal(ids[0], "cover");
	assert.equal(ids[slideCount - 1], "ask");
	const overflow = await page.evaluate(
		() => document.documentElement.scrollWidth - window.innerWidth,
	);
	assert.ok(overflow <= 0, `page overflows by ${overflow}px at 375`);
	await page.close();
});

test("the presenter starts on slide one and follows a deep link", async () => {
	const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
	await page.goto(`${baseUrl}/pitch-deck`);
	const bar = page.locator("div.sticky a[href='#overview']");
	assert.match(await bar.innerText(), /01 \/ 12/);
	await page.goto(`${baseUrl}/pitch-deck#team`);
	await page.waitForFunction(
		() =>
			/11 \/ 12/.test(
				document.querySelector("div.sticky a[href='#overview']")?.textContent ??
					"",
			),
		null,
		{ timeout: 5_000 },
	);
	assert.match(await bar.innerText(), /Team/);
	await page.close();
});

test("the AI files are served and the copy button copies the prompt", async () => {
	const llms = await fetch(`${baseUrl}/pitch-deck/llms.txt`);
	assert.equal(llms.status, 200);
	assert.match(llms.headers.get("content-type") ?? "", /text\/plain/);
	const body = await llms.text();
	assert.equal((body.match(/^## \d\d\. /gm) ?? []).length, 12);
	for (const dash of [0x2013, 0x2014].map((code) =>
		String.fromCharCode(code),
	)) {
		assert.ok(!body.includes(dash), "llms.txt must not contain dashes");
	}
	const skill = await fetch(`${baseUrl}/pitch-deck/skill.md`);
	assert.equal(skill.status, 200);
	assert.match(await skill.text(), /^name: pitch-deck-builder$/m);

	const context = await browser.newContext({
		viewport: { width: 375, height: 812 },
		permissions: ["clipboard-read", "clipboard-write"],
	});
	const page = await context.newPage();
	await page.goto(`${baseUrl}/pitch-deck#ai`);
	const prompt = await page.locator("#ai p.whitespace-pre-wrap").innerText();
	assert.match(prompt, /pitch-deck\/llms\.txt/);
	await page.getByRole("button", { name: "Copy the prompt" }).click();
	const copied = await page.evaluate(() => navigator.clipboard.readText());
	assert.equal(copied, prompt);
	await context.close();
});
