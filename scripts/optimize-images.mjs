// Generates committed, right-sized image variants with sharp.
// Originals are never touched. Add jobs to the list as new batches land
// (awards, talk covers). Run with: npm run img:build
import { stat } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const img = (name) => resolve(root, "public/img", name);

const jobs = [
	// 36px header avatar at 3x displays.
	{
		src: img("john-adib-avatar.jpg"),
		out: img("john-adib-avatar-108.jpg"),
		width: 108,
		quality: 80,
	},
	// About hero portrait (renders 256-288px at 2x).
	{
		src: img("john-adib-avatar.jpg"),
		out: img("john-adib-avatar-576.jpg"),
		width: 576,
		quality: 80,
	},
	// Home hero portrait (renders 288px at 2x on desktop).
	{
		src: img("john-adib-hero.jpg"),
		out: img("john-adib-hero-576.jpg"),
		width: 576,
		quality: 80,
	},
];

async function run() {
	for (const job of jobs) {
		await sharp(job.src)
			.resize(job.width, job.width, { fit: "cover" })
			.jpeg({ quality: job.quality })
			.toFile(job.out);
		const { size } = await stat(job.out);
		const kb = (size / 1024).toFixed(1);
		console.log(`${job.out.replace(root, ".")}  ${kb} KB`);
	}
}

run().catch((error) => {
	console.error(error);
	process.exit(1);
});
