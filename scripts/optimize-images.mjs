// Generates committed, right-sized image variants with sharp. Run: npm run img:build
// Variant jobs write a NEW file (avatars, badge chip thumbs); originals untouched.
// In-place jobs recompress a file over itself, downscaled to a max width. They are
// idempotent-ish: the >20% shrink guard skips already-small files, so a second run
// on an optimized tree is a no-op.
import { readdir, rename, stat, unlink } from "node:fs/promises";
import { dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const img = (name) => resolve(root, "public/img", name);
const awardsDir = resolve(root, "public/awards");
const coversDir = resolve(root, "public/talks/covers");
const rel = (p) => p.replace(root, ".");
const kb = (n) => (n / 1024).toFixed(1);

// Encode by extension: webp/jpg are lossy (quality), png stays lossless.
function encode(pipe, ext, quality) {
	if (ext === ".webp") return pipe.webp({ quality });
	if (ext === ".png") return pipe.png({ compressionLevel: 9 });
	return pipe.jpeg({ quality });
}

// [srcName, outName, width] square cover-cropped avatar/hero variants (2x-3x).
const variants = [
	["john-adib-avatar.jpg", "john-adib-avatar-108.jpg", 108],
	["john-adib-avatar.jpg", "john-adib-avatar-576.jpg", 576],
	["john-adib-hero.jpg", "john-adib-hero-576.jpg", 576],
];

// Recurring ADPList certs shown as ~250px chips point at these -480 thumbs;
// the full-size original stays reserved for the lightbox.
const chipCert =
	/-adplist-(top-1-percent-mentor|super-mentor|top-10-front-end-mentor)\.jpg$/;

async function makeThumb(file) {
	const out = file.replace(/\.jpg$/, "-480.jpg");
	await sharp(file)
		.resize({ width: 480, withoutEnlargement: true })
		.jpeg({ quality: 75 })
		.toFile(out);
	console.log(`thumb    ${rel(out)}  ${kb((await stat(out)).size)} KB`);
}

async function inPlace(file, maxWidth, quality) {
	const ext = extname(file).toLowerCase();
	const before = (await stat(file)).size;
	const tmp = `${file}.tmp`;
	const resized = sharp(file).resize({
		width: maxWidth,
		withoutEnlargement: true,
	});
	await encode(resized, ext, quality).toFile(tmp);
	const after = (await stat(tmp)).size;
	if (after < before * 0.8) {
		await rename(tmp, file);
		console.log(`shrink   ${rel(file)}  ${kb(before)} -> ${kb(after)} KB`);
	} else {
		await unlink(tmp);
		console.log(`keep     ${rel(file)}  ${kb(before)} KB (gain <20%)`);
	}
}

async function run() {
	for (const [srcName, outName, width] of variants) {
		const out = img(outName);
		await sharp(img(srcName))
			.resize(width, width, { fit: "cover" })
			.jpeg({ quality: 80 })
			.toFile(out);
		console.log(`variant  ${rel(out)}  ${kb((await stat(out)).size)} KB`);
	}

	const awardFiles = (await readdir(awardsDir))
		.filter((f) => /\.(jpg|png)$/i.test(f) && !f.includes("-480"))
		.sort();
	// Thumbs first, from the full-res originals, before the in-place downscale.
	for (const f of awardFiles) {
		if (chipCert.test(f)) await makeThumb(join(awardsDir, f));
	}
	// Originals feed the lightbox: cap 1200px, q80 keeps certificate text crisp.
	for (const f of awardFiles) await inPlace(join(awardsDir, f), 1200, 80);

	// Talk covers keep their filename (no data/component changes): cap 1344px.
	const coverFiles = (await readdir(coversDir))
		.filter((f) => /\.(webp|png|jpe?g)$/i.test(f))
		.sort();
	for (const f of coverFiles) await inPlace(join(coversDir, f), 1344, 75);
}

run().catch((error) => {
	console.error(error);
	process.exit(1);
});
