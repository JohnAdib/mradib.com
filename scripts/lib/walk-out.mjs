// Shared helper: enumerate emitted files under out/ and map HTML to route paths.
// out/index.html -> "/", out/about.html -> "/about", out/fa.html -> "/fa",
// out/fa/resume.html -> "/fa/resume", out/foo/index.html -> "/foo".
import { readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

export const OUT_ROOT = resolve(import.meta.dirname, "..", "..", "out");

function walk(dir, exts, acc) {
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) {
			walk(full, exts, acc);
		} else if (exts.some((e) => entry.endsWith(e))) {
			acc.push(full);
		}
	}
}

export function filesByExt(exts) {
	const acc = [];
	walk(OUT_ROOT, exts, acc);
	return acc.sort();
}

export function relOut(file) {
	return file
		.slice(OUT_ROOT.length + 1)
		.split("\\")
		.join("/");
}

export function fileToRoute(file) {
	let rel = relOut(file).replace(/\.html$/, "");
	if (rel === "index") return "/";
	if (rel.endsWith("/index")) rel = rel.slice(0, -"/index".length);
	return `/${rel}`;
}

export function htmlPages() {
	return filesByExt([".html"]).map((file) => ({
		file,
		route: fileToRoute(file),
	}));
}
