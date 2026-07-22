// Renders every card in src/data/og to a 1200x630 JPEG in public/og.
// Local-only tooling per docs/advisor/playbooks/seo.md: headless Chrome
// screenshots an HTML card at 2x, then sharp downsamples for crisp text.
// Usage: npm run og:build [-- slug ...] to regenerate all or specific cards.
import {
	mkdirSync,
	mkdtempSync,
	rmSync,
	statSync,
	writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import sharp from "sharp";
import { ogCards } from "../../src/data/og/index.ts";
import { findChrome, screenshot } from "./chrome-screenshot.mjs";
import { buildCardHtml } from "./og-template.mjs";

const repoRoot = fileURLToPath(new URL("../../", import.meta.url));
const publicDir = join(repoRoot, "public");
const outDir = join(publicDir, "og");
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

// Near-square logos are full-bleed tiles; contain would letterbox them with
// hairline gaps that read as rendering bugs, so they cover the frame instead.
async function normalizedArtwork(card) {
	const art = card.artwork;
	if (!art || art.fit !== "contain") return card;
	const { width, height } = await sharp(join(publicDir, art.src)).metadata();
	if (Math.abs(width / height - 1) > 0.05) return card;
	return { ...card, artwork: { ...art, fit: "cover" } };
}

for (const card of cards) {
	const jpg = join(outDir, `${card.slug}.jpg`);
	// A card can ship a ready-made cover image instead of the template.
	if (card.image) {
		await sharp(join(repoRoot, card.image))
			.resize(1200, 630, { fit: "cover" })
			.jpeg({ quality: 90, mozjpeg: true })
			.toFile(jpg);
		console.log(
			`og/${card.slug}.jpg ${Math.round(statSync(jpg).size / 1024)}KB (cover)`,
		);
		continue;
	}
	const html = join(tmp, `${card.slug}.html`);
	const png = join(tmp, `${card.slug}.png`);
	writeFileSync(html, buildCardHtml(await normalizedArtwork(card), publicDir));
	await screenshot(chrome, pathToFileURL(html).href, png);
	await sharp(png)
		.resize(1200, 630)
		.jpeg({ quality: 90, mozjpeg: true })
		.toFile(jpg);
	console.log(`og/${card.slug}.jpg ${Math.round(statSync(jpg).size / 1024)}KB`);
}

rmSync(tmp, { recursive: true, force: true });
console.log(`Generated ${cards.length} OG cards into public/og`);
