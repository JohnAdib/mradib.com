import { readFile, stat } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const assets = [
	{
		path: "public/img/john-adib-hero-576.jpg",
		width: 576,
		height: 576,
		maxBytes: 64 * 1024,
	},
	{
		path: "public/img/john-adib-hero-576.avif",
		width: 576,
		height: 576,
		maxBytes: 32 * 1024,
	},
	{
		path: "public/img/john-adib-london-landscape.jpg",
		width: 1600,
		height: 1067,
		maxBytes: 320 * 1024,
	},
	{
		path: "public/img/john-adib-london-portrait.jpg",
		width: 900,
		height: 1951,
		maxBytes: 240 * 1024,
	},
	{
		path: "public/img/john-adib-london-avatar.jpg",
		width: 640,
		height: 640,
		maxBytes: 64 * 1024,
	},
	{
		path: "public/img/john-adib-london-landscape-1152.jpg",
		width: 1152,
		height: 768,
		maxBytes: 240 * 1024,
	},
	{
		path: "public/img/john-adib-london-landscape-1152.avif",
		width: 1152,
		height: 768,
		maxBytes: 72 * 1024,
	},
	{
		path: "public/img/john-adib-london-landscape-768.jpg",
		width: 768,
		height: 512,
		maxBytes: 112 * 1024,
	},
	{
		path: "public/img/john-adib-london-landscape-768.avif",
		width: 768,
		height: 512,
		maxBytes: 48 * 1024,
	},
	{
		path: "public/img/john-adib-london-portrait-720.jpg",
		width: 720,
		height: 1561,
		maxBytes: 220 * 1024,
	},
	{
		path: "public/img/john-adib-london-portrait-720.avif",
		width: 720,
		height: 1561,
		maxBytes: 96 * 1024,
	},
	{
		path: "public/img/john-adib-london-avatar-108.jpg",
		width: 108,
		height: 108,
		maxBytes: 16 * 1024,
	},
	{
		path: "public/img/john-adib-london-avatar-108.avif",
		width: 108,
		height: 108,
		maxBytes: 8 * 1024,
	},
	{
		path: "public/img/john-adib-avatar-108.avif",
		width: 108,
		height: 108,
		maxBytes: 8 * 1024,
	},
];

const references = [
	{
		path: "src/components/home/home-hero.tsx",
		value: "/img/john-adib-london-portrait-720.jpg",
	},
	{
		path: "src/components/home/home-hero.tsx",
		value: "/img/john-adib-london-portrait-720.avif",
	},
	{
		path: "src/components/home/home-hero.tsx",
		value: "/img/john-adib-london-landscape-768.avif",
	},
	{
		path: "src/components/home/home-hero.tsx",
		value: "/img/john-adib-london-landscape-1152.avif",
	},
	{
		path: "src/components/home/home-hero.tsx",
		value: "/img/john-adib-london-landscape-768.jpg",
	},
	{
		path: "src/components/home/home-hero.tsx",
		value: "/img/john-adib-london-landscape-1152.jpg",
	},
	{
		path: "src/components/home/home-hero.tsx",
		value: 'media="(min-width: 1024px)"',
	},
	{
		path: "src/components/home/home-hero.tsx",
		value: "lg:hidden",
	},
	{
		path: "src/components/home/home-hero.tsx",
		value: 'type="image/avif"',
	},
	{
		path: "src/components/home/home-hero.tsx",
		value: 'fetchPriority="high"',
	},
	{
		path: "src/components/home/home-hero.tsx",
		value: 'className="mt-6 sm:mt-16"',
	},
	{
		path: "src/components/home/home-hero.tsx",
		value: "mt-2 block text-2xl text-accent-700 sm:mt-3",
	},
	{
		path: "src/components/home/home-hero.tsx",
		value: "reveal-rise reveal-delay-2 mt-4 sm:mt-5",
	},
	{
		path: "src/components/home/home-hero.tsx",
		value:
			"reveal-up reveal-delay-3 mt-6 flex flex-wrap items-center gap-4 sm:mt-8",
	},
	{
		path: "src/components/home/home-hero.tsx",
		value: "reveal-up reveal-delay-4 mt-5 sm:mt-8",
	},
	{
		path: "src/components/home/home-hero.tsx",
		value: "reveal-up reveal-delay-4 mt-6 sm:mt-10 lg:hidden",
	},
	{
		path: "src/components/home/home-rise.tsx",
		value: '<Container className="mt-12 sm:mt-28">',
	},
	{
		path: "src/components/home/home-hero.tsx",
		value: "<TiltCard",
	},
	{
		path: "src/components/home/home-hero.tsx",
		value: "maxTilt={5}",
	},
	{
		path: "src/components/home/home-hero.tsx",
		value: "restingRotate={2}",
	},
	{
		path: "src/components/home/home-hero.tsx",
		value: 'tracking="viewport"',
	},
	{
		path: "src/components/tilt-card/tilt-card.tsx",
		value: 'window.addEventListener("pointermove"',
	},
	{
		path: "src/components/tilt-card/tilt-card.tsx",
		value: "event.clientX / window.innerWidth",
	},
	{
		path: "src/components/tilt-card/tilt-card.tsx",
		value: "event.clientY / window.innerHeight",
	},
	{
		path: "src/components/tilt-card/tilt-card.tsx",
		value: "rotateZ(0deg)",
	},
	{
		path: "src/components/tilt-card/tilt-card.tsx",
		value: "transform 700ms",
	},
	{
		path: "src/components/tilt-card/tilt-card.tsx",
		value: "rotateX(0deg) rotateY(0deg)",
	},
	{
		path: "src/app/(en)/about/_sections/about-hero.tsx",
		value: "/img/john-adib-hero-576.jpg",
	},
	{
		path: "src/app/(en)/about/_sections/about-hero.tsx",
		value: "/img/john-adib-hero-576.avif",
	},
	{
		path: "src/app/(en)/about/_sections/about-hero.tsx",
		value: 'type="image/avif"',
	},
	{
		path: "src/app/(en)/about/_sections/about-hero.tsx",
		value: "maxTilt={5}",
	},
	{
		path: "src/app/(en)/about/_sections/about-hero.tsx",
		value: "restingRotate={2}",
	},
	{
		path: "src/app/(en)/about/_sections/about-hero.tsx",
		value: 'tracking="viewport"',
	},
	{
		path: "src/components/header/avatar.tsx",
		value: "/img/john-adib-avatar-108.jpg",
	},
	{
		path: "src/components/header/avatar.tsx",
		value: "/img/john-adib-avatar-108.avif",
	},
	{
		path: "src/components/header/avatar.tsx",
		value: 'type="image/avif"',
	},
	{
		path: "src/data/profile.ts",
		value: "/img/john-adib-london-avatar.jpg",
	},
];

const forbiddenCropClasses = [
	{
		path: "src/components/home/home-hero.tsx",
		values: ["object-cover", "aspect-3/2", "aspect-4/5"],
	},
	{
		path: "src/app/(en)/about/_sections/about-hero.tsx",
		values: ["object-cover", "aspect-3/2", "aspect-4/5", "rotate-2"],
	},
];

for (const asset of assets) {
	const absolutePath = resolve(root, asset.path);
	const [metadata, file] = await Promise.all([
		sharp(absolutePath).metadata(),
		stat(absolutePath),
	]);

	if (metadata.width !== asset.width || metadata.height !== asset.height) {
		throw new Error(
			`${asset.path}: expected ${asset.width}x${asset.height}, received ${metadata.width}x${metadata.height}`,
		);
	}

	if (file.size > asset.maxBytes) {
		throw new Error(
			`${asset.path}: ${(file.size / 1024).toFixed(1)} KB exceeds ${(asset.maxBytes / 1024).toFixed(0)} KB`,
		);
	}
}

for (const reference of references) {
	const source = await readFile(resolve(root, reference.path), "utf8");
	if (!source.includes(reference.value)) {
		throw new Error(`${reference.path}: missing ${reference.value}`);
	}
}

for (const check of forbiddenCropClasses) {
	const source = await readFile(resolve(root, check.path), "utf8");
	for (const value of check.values) {
		if (source.includes(value)) {
			throw new Error(`${check.path}: forced crop class ${value} is forbidden`);
		}
	}
}

console.log("Profile image dimensions, sizes, and references are valid.");
