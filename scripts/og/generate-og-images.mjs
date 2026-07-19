// Renders every card in src/data/og to a 1200x630 JPEG in public/og.
// Local-only tooling per docs/advisor/playbooks/seo.md: headless Chrome
// screenshots an HTML card at 2x, then sharp downsamples for crisp text.
// Usage: npm run og:build [-- slug ...] to regenerate all or specific cards.
import { execFileSync } from "node:child_process";
import {
	existsSync,
	mkdirSync,
	mkdtempSync,
	readdirSync,
	rmSync,
	statSync,
	writeFileSync,
} from "node:fs";
import { homedir, tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import sharp from "sharp";
import { ogCards } from "../../src/data/og/index.ts";
import { buildCardHtml } from "./og-template.mjs";

const publicDir = join(
	fileURLToPath(new URL("../../", import.meta.url)),
	"public",
);
const outDir = join(publicDir, "og");

// Playwright's headless_shell is preferred: no updater, sub-second cold start.
// Full Chrome works too but its first launch spawns the Keystone updater.
function findChrome() {
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
const chrome = findChrome();

const only = process.argv.slice(2);
const cards = only.length
	? ogCards.filter((card) => only.includes(card.slug))
	: ogCards;
if (cards.length === 0) {
	console.error(`No OG cards match: ${only.join(", ")}`);
	process.exit(1);
}

const tmp = mkdtempSync(join(tmpdir(), "og-cards-"));
mkdirSync(outDir, { recursive: true });

for (const card of cards) {
	const html = join(tmp, `${card.slug}.html`);
	const png = join(tmp, `${card.slug}.png`);
	writeFileSync(html, buildCardHtml(card, publicDir));
	execFileSync(
		chrome,
		[
			"--headless",
			"--disable-gpu",
			"--no-first-run",
			"--no-default-browser-check",
			"--hide-scrollbars",
			"--force-device-scale-factor=2",
			"--window-size=1200,630",
			`--user-data-dir=${join(tmp, "profile")}`,
			"--virtual-time-budget=20000",
			`--screenshot=${png}`,
			pathToFileURL(html).href,
		],
		{ stdio: "pipe", timeout: 60_000 },
	);
	const jpg = join(outDir, `${card.slug}.jpg`);
	await sharp(png)
		.resize(1200, 630)
		.jpeg({ quality: 90, mozjpeg: true })
		.toFile(jpg);
	console.log(`og/${card.slug}.jpg ${Math.round(statSync(jpg).size / 1024)}KB`);
}

rmSync(tmp, { recursive: true, force: true });
console.log(`Generated ${cards.length} OG cards into public/og`);
