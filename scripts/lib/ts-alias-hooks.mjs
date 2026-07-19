// Node resolver hooks for the repo's TypeScript import style, so scripts can
// import src/data modules directly (Node strips types natively, but resolves
// neither the "@/" alias nor extensionless specifiers).
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const srcRoot = new URL("../../src/", import.meta.url);

function probe(url) {
	const path = fileURLToPath(url);
	if (existsSync(`${path}.ts`)) return `${url.href}.ts`;
	if (existsSync(`${path}/index.ts`)) return `${url.href}/index.ts`;
	if (/\.[a-z]+$/i.test(path) && existsSync(path)) return url.href;
	return null;
}

export async function resolve(specifier, context, nextResolve) {
	if (specifier.startsWith("@/")) {
		const hit = probe(new URL(specifier.slice(2), srcRoot));
		if (hit) return nextResolve(hit, context);
	}
	if (specifier.startsWith("./") || specifier.startsWith("../")) {
		const hit = probe(new URL(specifier, context.parentURL));
		if (hit) return nextResolve(hit, context);
	}
	return nextResolve(specifier, context);
}
