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

test("pixel story starts as a coin-catching game without chapter controls", async () => {
	const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
	await page.goto(`${baseUrl}/lab/pixel-story`);
	await page.getByRole("heading", { name: "One move at a time" }).waitFor();
	assert.match(
		await page.locator("[data-scene-caption]").innerText(),
		/London/i,
	);
	assert.equal(
		await page.getByRole("button", { name: "Next chapter" }).count(),
		0,
	);
	assert.equal(await page.locator(".pixel-story-hint").count(), 0);
	assert.equal(await page.locator(".pixel-story-kicker").count(), 0);
	assert.equal(await page.locator(".pixel-story-status").count(), 0);
	assert.match(await page.locator("[data-score]").innerText(), /0/);
	assert.match(await page.locator(".pixel-story-progress").innerText(), /15/);
	assert.match(await page.locator("[data-level]").innerText(), /LEVEL 1/i);
	assert.match(
		await page.locator("canvas[aria-label]").getAttribute("aria-label"),
		/dollar coins/i,
	);
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
		0,
	);
	await page.close();
});

test("a foreground coin can be caught for a point", async () => {
	const page = await browser.newPage({ viewport: { width: 900, height: 700 } });
	await page.addInitScript(() => {
		window.__coinNotes = [];
		class FakeAudioContext {
			state = "running";
			currentTime = 0;
			destination = {};
			resume() {
				return Promise.resolve();
			}
			createOscillator() {
				return {
					frequency: {
						setValueAtTime: (value) => window.__coinNotes.push(value),
					},
					connect() {},
					start() {},
					stop() {},
				};
			}
			createGain() {
				return {
					gain: { setValueAtTime() {}, exponentialRampToValueAtTime() {} },
					connect() {},
				};
			}
		}
		Object.defineProperty(window, "AudioContext", { value: FakeAudioContext });
	});
	await page.goto(`${baseUrl}/lab/pixel-story`);
	await page.locator("canvas[data-player-x]").waitFor();
	await page.keyboard.down("ArrowRight");
	await page.waitForFunction(
		() => Number(document.querySelector("canvas")?.dataset.playerX) >= 65,
	);
	await page.keyboard.up("ArrowRight");
	await page.locator("[data-coin-burst]").waitFor({ timeout: 8000 });
	await page.waitForFunction(
		() =>
			Number(
				document.querySelector("[data-score]")?.textContent?.match(/\d+/)?.[0],
			) >= 1,
		null,
		{ timeout: 8000 },
	);
	assert.match(await page.locator("[data-score]").innerText(), /01/);
	assert.match(await page.locator("[data-level]").innerText(), /LEVEL 1/);
	assert.ok((await page.evaluate(() => window.__coinNotes)).length >= 2);
	await page.close();
});

test("coins do not score while the player stands idle", async () => {
	const page = await browser.newPage({ viewport: { width: 900, height: 700 } });
	await page.goto(`${baseUrl}/lab/pixel-story`);
	await page.waitForTimeout(3300);
	assert.match(await page.locator("[data-score]").innerText(), /00/);
	await page.close();
});

test("the scene fills the viewport without the site chrome", async () => {
	for (const [width, height] of [
		[375, 812],
		[812, 375],
		[1440, 900],
	]) {
		const page = await browser.newPage({ viewport: { width, height } });
		await page.goto(`${baseUrl}/lab/pixel-story`);
		const bounds = await page.locator("[data-pixel-story]").boundingBox();
		assert.equal(Math.round(bounds.width), width);
		assert.equal(Math.round(bounds.height), height);
		assert.equal(await page.locator("footer").count(), 0);
		assert.equal(
			await page.evaluate(() => document.documentElement.scrollWidth),
			width,
		);
		await page.close();
	}
});

test("desktop has no footer control hint while touch devices retain controls", async () => {
	const desktop = await browser.newPage({
		viewport: { width: 1440, height: 900 },
	});
	await desktop.goto(`${baseUrl}/lab/pixel-story`);
	assert.equal(await desktop.locator(".pixel-story-bottom").isVisible(), false);
	await desktop.close();
	const phone = await browser.newPage({
		hasTouch: true,
		isMobile: true,
		viewport: { width: 375, height: 812 },
	});
	await phone.goto(`${baseUrl}/lab/pixel-story`);
	assert.equal(
		await phone.getByRole("button", { name: "Move right" }).isVisible(),
		true,
	);
	await phone.close();
});

test("arrow keys move, jump and crouch the character with parallax", async () => {
	const page = await browser.newPage({ viewport: { width: 900, height: 700 } });
	await page.goto(`${baseUrl}/lab/pixel-story`);
	const canvas = page.locator("canvas[data-player-x]");
	await canvas.waitFor();
	const firstX = Number(await canvas.getAttribute("data-player-x"));
	const firstCamera = Number(await canvas.getAttribute("data-camera-x"));
	await page.keyboard.down("ArrowRight");
	await page.waitForTimeout(350);
	await page.keyboard.up("ArrowRight");
	assert.ok(Number(await canvas.getAttribute("data-player-x")) > firstX);
	assert.ok(Number(await canvas.getAttribute("data-camera-x")) > firstCamera);
	await page.keyboard.down("ArrowUp");
	await page.locator('canvas[data-pose="jumping"]').waitFor();
	await page.keyboard.up("ArrowUp");
	await page.waitForTimeout(700);
	await page.keyboard.down("ArrowDown");
	await page.locator('canvas[data-pose="crouching"]').waitFor();
	await page.keyboard.up("ArrowDown");
	const movedX = Number(await canvas.getAttribute("data-player-x"));
	await page.keyboard.down("ArrowLeft");
	await page.waitForTimeout(250);
	await page.keyboard.up("ArrowLeft");
	assert.ok(Number(await canvas.getAttribute("data-player-x")) < movedX);
	await page.close();
});

test("touch controls move and jump", async () => {
	const page = await browser.newPage({
		hasTouch: true,
		isMobile: true,
		viewport: { width: 375, height: 812 },
	});
	await page.goto(`${baseUrl}/lab/pixel-story`);
	const canvas = page.locator("canvas[data-player-x]");
	const firstX = Number(await canvas.getAttribute("data-player-x"));
	const right = page.getByRole("button", { name: "Move right" });
	await right.dispatchEvent("pointerdown", { pointerId: 1 });
	await page.waitForTimeout(250);
	await right.dispatchEvent("pointerup", { pointerId: 1 });
	assert.ok(Number(await canvas.getAttribute("data-player-x")) > firstX);
	await page.getByRole("button", { name: "Jump" }).click();
	await page.locator('canvas[data-pose="jumping"]').waitFor();
	await page.locator('canvas[data-pose="standing"]').waitFor();
	const crouch = page.getByRole("button", { name: "Crouch" });
	await crouch.dispatchEvent("pointerdown", { pointerId: 2 });
	await page.locator('canvas[data-pose="crouching"]').waitFor();
	await crouch.dispatchEvent("pointerup", { pointerId: 2 });
	await page.close();
});
