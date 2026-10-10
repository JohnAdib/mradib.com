import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { after, before, test } from "node:test";
import { setTimeout as delay } from "node:timers/promises";
import { chromium } from "playwright-core";

const baseUrl = process.env.TEST_BASE_URL ?? "http://127.0.0.1:3120";
let browser;
let server;

before(async () => {
	if (!process.env.TEST_BASE_URL) {
		server = spawn(
			"npm",
			["run", "dev", "--", "--hostname", "127.0.0.1", "--port", "3120"],
			{
				detached: true,
				stdio: "ignore",
			},
		);
	}
	for (let attempt = 0; attempt < 120; attempt++) {
		if (server && server.exitCode !== null) {
			throw new Error("Next.js exited before startup");
		}
		try {
			if ((await fetch(`${baseUrl}/lab/pixel-story`)).status === 200) {
				browser = await chromium.launch({ channel: "chrome", headless: true });
				return;
			}
		} catch {
			// Wait for the local server.
		}
		await delay(250);
	}
	throw new Error("Timed out waiting for the pixel story page");
});

after(async () => {
	await browser?.close();
	if (server?.pid && server.exitCode === null)
		process.kill(-server.pid, "SIGTERM");
});

test("pixel story advances through its three scenes", async () => {
	const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
	await page.goto(`${baseUrl}/lab/pixel-story`);
	await page.getByRole("heading", { name: "One move at a time" }).waitFor();
	assert.match(
		await page.locator("[data-scene-caption]").innerText(),
		/London/i,
	);
	await page.getByRole("button", { name: "Next chapter" }).click();
	assert.match(
		await page.locator("[data-scene-caption]").innerText(),
		/possibility/i,
	);
	await page.getByRole("button", { name: "Next chapter" }).click();
	assert.match(
		await page.locator("[data-scene-caption]").innerText(),
		/next move/i,
	);
	assert.equal(await page.locator("canvas[aria-label]").count(), 1);
	await page.close();
});

test("reduced motion keeps the story usable", async () => {
	const page = await browser.newPage();
	await page.emulateMedia({ reducedMotion: "reduce" });
	await page.goto(`${baseUrl}/lab/pixel-story`);
	await page
		.getByRole("button", { name: "Pause animation" })
		.waitFor({ state: "hidden" });
	assert.equal(
		await page.getByRole("button", { name: "Pause animation" }).count(),
		0,
	);
	assert.equal(
		await page.getByRole("button", { name: "Next chapter" }).count(),
		1,
	);
	await page.close();
});
