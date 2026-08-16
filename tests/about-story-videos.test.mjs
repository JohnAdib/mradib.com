import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { after, before, test } from "node:test";
import { setTimeout as delay } from "node:timers/promises";
import { chromium } from "playwright-core";

const baseUrl = process.env.TEST_BASE_URL ?? "http://127.0.0.1:3118";
const usesExternalServer = process.env.TEST_BASE_URL !== undefined;
const stories = [
	{
		aspect: "portrait",
		captions: "/about/cleaning-a-ball-mouse.vtt",
		source: "/about/cleaning-a-ball-mouse.mp4",
		title: "Cleaning a ball mouse",
		trigger: "See what the hell I'm talking about: cleaning a ball mouse",
	},
	{
		aspect: "landscape",
		captions: "/about/prince-of-persia-dos-gameplay.vtt",
		source: "/about/prince-of-persia-dos-gameplay.mp4",
		title: "Prince of Persia (DOS, 1990)",
		trigger: "Play Prince of Persia gameplay",
	},
	{
		aspect: "classic",
		captions: "/about/windows-98-startup-sound.vtt",
		source: "/about/windows-98-startup-sound.mp4",
		title: "Windows 98 startup sound",
		trigger: "Play the Windows 98 startup sound",
	},
];

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
			const response = await fetch(`${baseUrl}/about`);
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
	browser = await chromium.launch({ channel: "chrome", headless: true });
});

after(async () => {
	await browser?.close();
	if (server?.pid && server.exitCode === null) {
		process.kill(-server.pid, "SIGTERM");
	}
});

test("the first two chapters expose three video triggers without embedding media", async () => {
	const page = await browser.newPage();
	await page.goto(`${baseUrl}/about#childhood`);

	for (const story of stories) {
		assert.equal(
			await page.getByRole("button", { name: story.trigger }).count(),
			1,
		);
		assert.equal(
			await page.locator(`source[src="${story.source}"]`).count(),
			0,
		);
	}

	const childhood = await page.locator("#childhood").innerText();
	assert.match(childhood, /mouse arrived before we had a computer/i);
	assert.match(
		childhood,
		/more DOS games on floppy disks than I can remember/i,
	);
	assert.match(childhood, /Prince of Persia/i);
	assert.doesNotMatch(childhood, /nothing to point at yet/i);
	assert.doesNotMatch(childhood, /the first level alone was an education/i);
	assert.doesNotMatch(childhood, /it wasn't really play/i);
	const windows = await page.locator("#windows").innerText();
	assert.match(windows, /magical\s+Windows 98 startup sound/i);
	assert.match(windows, /I never forgot that moment/i);

	await page.close();
});

test("each story video fits, plays, and closes automatically when ended", async () => {
	const page = await browser.newPage({ viewport: { height: 320, width: 568 } });
	await page.emulateMedia({ reducedMotion: "reduce" });
	await page.goto(`${baseUrl}/about#childhood`);

	for (const story of stories) {
		const trigger = page.getByRole("button", { name: story.trigger });
		await trigger.click({ timeout: 5_000 });
		const dialog = page.getByRole("dialog", { name: story.title });
		await dialog.waitFor({ state: "visible" });

		const panel = dialog.locator("[data-story-video-panel]");
		assert.equal(await panel.getAttribute("data-aspect"), story.aspect);
		assert.equal(
			await panel.evaluate(
				(element) => getComputedStyle(element).transitionProperty,
			),
			"none",
		);
		const geometry = await panel.evaluate((element) => {
			const rect = element.getBoundingClientRect();
			return { bottom: rect.bottom, top: rect.top, viewport: innerHeight };
		});
		assert.ok(
			geometry.top >= 0 && geometry.bottom <= geometry.viewport,
			`Panel must fit the viewport: ${JSON.stringify(geometry)}`,
		);

		const video = dialog.locator("video");
		assert.equal(await video.evaluate((element) => element.controls), true);
		assert.equal(await video.evaluate((element) => element.autoplay), true);
		assert.equal(await video.evaluate((element) => element.playsInline), true);
		assert.equal(
			await video.evaluate((element) => element.preload),
			"metadata",
		);
		assert.equal(
			await dialog.locator(`source[src="${story.source}"]`).count(),
			1,
		);
		assert.equal(
			await dialog.locator(`track[src="${story.captions}"]`).count(),
			1,
		);
		await page.waitForFunction(
			(source) => {
				const sourceElement = document.querySelector(`source[src="${source}"]`);
				const element = sourceElement?.parentElement;
				return element instanceof HTMLVideoElement && !element.paused;
			},
			story.source,
			{ timeout: 5_000 },
		);

		await video.evaluate((element) => {
			window.__lastStoryVideo = element;
			element.dispatchEvent(new Event("ended", { bubbles: true }));
		});
		await dialog.waitFor({ state: "hidden", timeout: 2_000 });
		const closedState = await page.evaluate(() => ({
			currentTime: window.__lastStoryVideo.currentTime,
			paused: window.__lastStoryVideo.paused,
		}));
		assert.equal(closedState.paused, true);
		assert.ok(closedState.currentTime < 0.05);
		assert.equal(
			await page.evaluate(() =>
				document.activeElement?.getAttribute("aria-label"),
			),
			story.trigger,
		);
		assert.equal(
			await page.locator(`source[src="${story.source}"]`).count(),
			0,
		);
	}

	await page.close();
});

test("all three story video links shimmer, with a reduced-motion fallback", async () => {
	const page = await browser.newPage();
	await page.goto(`${baseUrl}/about#windows`);

	for (const story of stories) {
		const shimmer = page
			.getByRole("button", { name: story.trigger })
			.locator(".story-video-shimmer");
		assert.equal(await shimmer.count(), 1);
		assert.equal(
			await shimmer.evaluate(
				(element) => getComputedStyle(element).animationName,
			),
			"story-video-shimmer",
		);
	}

	await page.emulateMedia({ reducedMotion: "reduce" });
	for (const story of stories) {
		const shimmer = page
			.getByRole("button", { name: story.trigger })
			.locator(".story-video-shimmer");
		assert.equal(
			await shimmer.evaluate(
				(element) => getComputedStyle(element).animationName,
			),
			"none",
		);
	}

	await page.close();
});
