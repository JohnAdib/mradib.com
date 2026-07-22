// Headless screenshot for the OG generator, driven through Playwright so the
// 1200x630 frame is captured exactly. The raw `chrome --screenshot` flag settled
// the card a hair short of the viewport, which left the byline floating and a
// dead band along the bottom edge. Playwright honors the viewport and waits for
// the fonts to load before it captures, so every card fills the frame.
import { existsSync, readdirSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import { chromium } from "playwright-core";

// Prefer an explicit CHROME_BIN, then Playwright's headless shell from the local
// cache. Full Chrome works too but its first launch spawns the Keystone updater.
export function findChrome() {
	if (process.env.CHROME_BIN) return process.env.CHROME_BIN;
	const cache = join(homedir(), "Library/Caches/ms-playwright");
	if (existsSync(cache)) {
		for (const dir of readdirSync(cache)) {
			if (!dir.startsWith("chromium_headless_shell-")) continue;
			const shell = join(cache, dir, "chrome-mac", "headless_shell");
			if (existsSync(shell)) return shell;
		}
	}
	return "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
}

export async function screenshot(chrome, htmlUrl, png) {
	const browser = await chromium.launch({
		executablePath: chrome,
		args: ["--no-sandbox"],
	});
	try {
		const page = await browser.newPage({
			viewport: { width: 1200, height: 630 },
			deviceScaleFactor: 2,
		});
		await page.goto(htmlUrl, { waitUntil: "networkidle" });
		await page.evaluate(() => document.fonts.ready);
		await page.screenshot({ path: png });
	} finally {
		await browser.close();
	}
}
