// Browser tests for every guide in the fundraising kit and its hub. The
// expectations derive from the same data the pages render, so the DOM is
// checked against the source of truth rather than a copy of it.
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { after, before, test } from "node:test";
import { setTimeout as delay } from "node:timers/promises";
import { chromium } from "playwright-core";
import { acceleratorApplicationGuide } from "@/data/accelerator-application";
import { financialModelGuide } from "@/data/financial-model";
import { founderVideoGuide } from "@/data/founder-video";
import { fundraisingKit } from "@/data/guides/fundraising-kit";
import { guideUiLabels } from "@/data/guides/guide-labels";
import { hubRoute } from "@/data/guides/hub-route";
import { onePagerGuide } from "@/data/one-pager";
import { pitchDeckGuide } from "@/data/pitch-deck";
import { productDemoGuide } from "@/data/product-demo";
import { movedGuideRoutes } from "@/data/routes/moved-routes";
import { homepageUrl } from "@/lib/constants/url";

const guides = [
	pitchDeckGuide,
	onePagerGuide,
	productDemoGuide,
	founderVideoGuide,
	financialModelGuide,
	acceleratorApplicationGuide,
];
const baseUrl = process.env.TEST_BASE_URL ?? "http://127.0.0.1:3118";
const usesExternalServer = process.env.TEST_BASE_URL !== undefined;
const phone = { width: 375, height: 812 };
const dashes = [0x2013, 0x2014].map((code) => String.fromCharCode(code));

let browser;
let server;
let serverOutput = "";

function captureServerOutput(stream) {
	stream.on("data", (chunk) => {
		serverOutput = `${serverOutput}${chunk}`.slice(-10_000);
	});
}

async function waitForServer() {
	const deadline = Date.now() + 90_000;
	while (Date.now() < deadline) {
		if (server && server.exitCode !== null) {
			throw new Error(`Next.js exited before startup:\n${serverOutput}`);
		}
		try {
			const response = await fetch(`${baseUrl}${hubRoute}`);
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

for (const guide of guides) {
	const path = guide.article.pagePath;
	const { steps, anchors } = guide;
	const total = steps.length;
	const middle = steps[Math.floor(total / 2)];
	const pill = `div.sticky a[href='#${anchors.overview}']`;

	test(`${path}: the steps render in data order and every overview anchor resolves`, async () => {
		const page = await browser.newPage({ viewport: phone });
		await page.goto(`${baseUrl}${path}`, { timeout: 60_000 });
		const ids = await page.$$eval(`#${anchors.steps} section[id]`, (nodes) =>
			nodes.map((node) => node.id),
		);
		const hrefs = await page.$$eval(
			`#${anchors.overview} ol a[href^='#']`,
			(nodes) => nodes.map((node) => node.getAttribute("href").slice(1)),
		);
		assert.deepEqual(
			ids,
			steps.map((step) => step.id),
		);
		assert.deepEqual(hrefs, ids);
		const overflow = await page.evaluate(
			() => document.documentElement.scrollWidth - window.innerWidth,
		);
		assert.ok(overflow <= 0, `page overflows by ${overflow}px at 375`);
		await page.close();
	});

	test(`${path}: the presenter starts on step one and follows a deep link`, async () => {
		const page = await browser.newPage({ viewport: phone });
		await page.goto(`${baseUrl}${path}`, { timeout: 60_000 });
		const bar = page.locator(pill);
		assert.match(await bar.innerText(), new RegExp(`01 / ${total}`));
		await page.goto(`${baseUrl}${path}#${middle.id}`);
		const number = String(steps.indexOf(middle) + 1).padStart(2, "0");
		await page.waitForFunction(
			({ selector, expected }) =>
				(document.querySelector(selector)?.textContent ?? "").includes(
					expected,
				),
			{ selector: pill, expected: `${number} / ${total}` },
			{ timeout: 5_000 },
		);
		assert.ok((await bar.innerText()).includes(middle.title));
		await page.close();
	});

	test(`${path}: the AI files are served and the copy button copies the prompt`, async () => {
		const llms = await fetch(`${baseUrl}${path}/llms.txt`);
		assert.equal(llms.status, 200);
		assert.match(llms.headers.get("content-type") ?? "", /text\/plain/);
		const body = await llms.text();
		assert.equal((body.match(/^## \d\d\. /gm) ?? []).length, total);
		for (const dash of dashes) {
			assert.ok(!body.includes(dash), "llms.txt must not contain dashes");
		}
		const skill = await fetch(`${baseUrl}${path}/skill.md`);
		assert.equal(skill.status, 200);
		assert.match(
			await skill.text(),
			new RegExp(`^name: ${guide.aiText.skillName}$`, "m"),
		);

		const context = await browser.newContext({
			viewport: phone,
			permissions: ["clipboard-read", "clipboard-write"],
		});
		const page = await context.newPage();
		await page.goto(`${baseUrl}${path}#${anchors.ai}`, { timeout: 60_000 });
		const prompt = await page
			.locator(`#${anchors.ai} p.whitespace-pre-wrap`)
			.innerText();
		assert.ok(prompt.includes(`${path}/llms.txt`));
		await page.getByRole("button", { name: guideUiLabels.copyPrompt }).click();
		const copied = await page.evaluate(() => navigator.clipboard.readText());
		assert.equal(copied, prompt);
		await context.close();
	});
}

test("the accelerator application shows who asks each question", async () => {
	const page = await browser.newPage({ viewport: phone });
	await page.goto(`${baseUrl}${acceleratorApplicationGuide.article.pagePath}`, {
		timeout: 60_000,
	});
	const label = acceleratorApplicationGuide.stepLabels.tags;
	const chips = await page.getByText(label, { exact: true }).count();
	assert.equal(
		chips,
		acceleratorApplicationGuide.steps.filter((step) => step.tags?.length)
			.length,
	);
	await page.close();
});

test("the hub lists the kit in order and serves its index for AI", async () => {
	const page = await browser.newPage({ viewport: phone });
	await page.goto(`${baseUrl}${hubRoute}`, { timeout: 60_000 });
	const hrefs = await page.$$eval("#guides ol a[href]", (nodes) =>
		nodes.map((node) => node.getAttribute("href")),
	);
	assert.deepEqual(
		hrefs,
		fundraisingKit.map((entry) => entry.article.pagePath),
	);
	const overflow = await page.evaluate(
		() => document.documentElement.scrollWidth - window.innerWidth,
	);
	assert.ok(overflow <= 0, `hub overflows by ${overflow}px at 375`);
	await page.close();
	const index = await fetch(`${baseUrl}${hubRoute}/llms.txt`);
	assert.equal(index.status, 200);
	const body = await index.text();
	assert.equal((body.match(/^## \d\. /gm) ?? []).length, fundraisingKit.length);
});

test("every old guide path lands on the new one and its AI files point there", async () => {
	for (const route of movedGuideRoutes) {
		const page = await browser.newPage({ viewport: phone });
		await page.goto(`${baseUrl}${route.from}`, { timeout: 60_000 });
		await page.waitForURL(`${baseUrl}${route.to}`, { timeout: 15_000 });
		await page.close();
		for (const file of ["llms.txt", "skill.md"]) {
			const response = await fetch(`${baseUrl}${route.from}/${file}`);
			assert.equal(response.status, 200, `${route.from}/${file}`);
			const body = await response.text();
			assert.ok(body.includes(`${homepageUrl}${route.to}/${file}`), body);
		}
	}
});
