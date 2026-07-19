// Assert exact parity between out/sitemap.xml <loc> values and emitted HTML routes.
// Excludes 404, _not-found variants, and every redirect-only route.
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { redirectRoutes } from "../src/data/routes/redirect-routes.ts";
import { htmlPages, OUT_ROOT } from "./lib/walk-out.mjs";

const SITE = "https://mradib.com";
const redirects = new Set(redirectRoutes);

// Static passthroughs from public/ that are utilities, not site pages.
const STATIC_ASSETS = new Set(["/email/signature"]);

function isExcluded(route) {
	if (route === "/404" || route === "/_not-found") return true;
	if (route.endsWith("/_not-found")) return true;
	if (STATIC_ASSETS.has(route)) return true;
	return redirects.has(route);
}

// Route handlers (e.g. /resume/action-verbs/list) emit extensionless files.
function existsAsHandlerOutput(route) {
	return existsSync(join(OUT_ROOT, route.slice(1)));
}

function sitemapRoutes() {
	const xml = readFileSync(join(OUT_ROOT, "sitemap.xml"), "utf8");
	const out = new Set();
	for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
		const route = m[1].trim().slice(SITE.length) || "/";
		out.add(route);
	}
	return out;
}

const htmlRoutes = new Set(
	htmlPages()
		.map((p) => p.route)
		.filter((r) => !isExcluded(r)),
);
const smRoutes = sitemapRoutes();

const missing = [...smRoutes]
	.filter((r) => !htmlRoutes.has(r) && !existsAsHandlerOutput(r))
	.sort();
const extra = [...htmlRoutes].filter((r) => !smRoutes.has(r)).sort();

if (missing.length || extra.length) {
	console.error("Sitemap parity FAILED\n");
	if (missing.length) {
		console.error("In sitemap.xml but no emitted HTML page:");
		for (const r of missing) console.error(`  ${r}`);
	}
	if (extra.length) {
		console.error("Emitted HTML page but absent from sitemap.xml:");
		for (const r of extra) console.error(`  ${r}`);
	}
	process.exit(1);
}
console.log(`Sitemap parity OK: ${smRoutes.size} routes matched both ways.`);
