// Headless Chrome screenshot for the OG generator. Completion is detected by
// the screenshot file appearing, not by process exit: headless_shell can wedge
// after writing the file (observed on macOS), so the browser is killed as soon
// as the image is stable on disk.
import { spawn } from "node:child_process";
import { existsSync, readdirSync, statSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

// Playwright's headless_shell is preferred: no updater, sub-second cold start.
// Full Chrome works too but its first launch spawns the Keystone updater.
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

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function screenshot(chrome, htmlUrl, png, profileDir) {
	const proc = spawn(
		chrome,
		[
			"--headless",
			"--disable-gpu",
			"--no-first-run",
			"--no-default-browser-check",
			"--hide-scrollbars",
			"--force-device-scale-factor=2",
			"--window-size=1200,630",
			`--user-data-dir=${profileDir}`,
			"--virtual-time-budget=20000",
			`--screenshot=${png}`,
			htmlUrl,
		],
		{ stdio: "ignore" },
	);
	const deadline = Date.now() + 60_000;
	try {
		while (!existsSync(png)) {
			if (Date.now() > deadline)
				throw new Error(`Chrome wrote no screenshot for ${htmlUrl}`);
			await sleep(150);
		}
		let size = 0;
		for (;;) {
			const now = statSync(png).size;
			if (now > 0 && now === size) return;
			size = now;
			await sleep(150);
		}
	} finally {
		proc.kill("SIGKILL");
	}
}
