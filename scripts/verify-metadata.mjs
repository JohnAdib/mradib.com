// Per-page metadata guardrails: title, canonical, description, og:image,
// html lang/dir, hreflang pairs, and noindex on redirect routes.
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { redirectRoutes } from "../src/data/routes/redirect-routes.ts";
import {
	decodeEntities,
	hasPersian,
	hreflangSet,
	ogImageUrl,
	stripSvg,
} from "./lib/html-meta.mjs";
import { htmlPages } from "./lib/walk-out.mjs";

const redirects = new Set(redirectRoutes);
const errors = [];
const warnings = [];
const fail = (route, msg) => errors.push(`${route}: ${msg}`);
const warn = (route, msg) => warnings.push(`${route}: ${msg}`);
const isFa = (route) => route === "/fa" || route.startsWith("/fa/");
const skip = (route) =>
	route === "/404" ||
	route.endsWith("/_not-found") ||
	route === "/email/signature";

function checkPage(route, html) {
	const titles = (stripSvg(html).match(/<title>/g) ?? []).length;
	if (titles !== 1) fail(route, `expected 1 <title>, found ${titles}`);
	const canon = (html.match(/rel="canonical"/g) ?? []).length;
	if (canon !== 1) fail(route, `expected 1 rel=canonical, found ${canon}`);

	const dm = html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/);
	if (!dm) {
		fail(route, "missing meta description");
	} else {
		const desc = decodeEntities(dm[1]);
		const len = [...desc].length;
		// 160 is a display guideline, not a rule; only absurd lengths fail.
		if (len > 300) fail(route, `description ${len} chars > 300`);
		else if (len > 160) warn(route, `description ${len} chars > 160`);
		// The advisor rule wants the name with every page; the title template
		// appends it, so title or description carrying it satisfies the rule.
		const title = decodeEntities(
			stripSvg(html).match(/<title>([^<]*)<\/title>/)?.[1] ?? "",
		);
		if (
			!isFa(route) &&
			!hasPersian(desc) &&
			!desc.includes("John Adib") &&
			!title.includes("John Adib")
		)
			fail(route, "neither title nor description carries 'John Adib'");
	}

	// Never ship a page without an OG card (docs/advisor/playbooks/seo.md).
	const og = ogImageUrl(html);
	if (!og) {
		fail(route, "missing og:image");
	} else {
		const pathname = og.startsWith("http") ? new URL(og).pathname : og;
		if (!existsSync(join("out", decodeURIComponent(pathname))))
			fail(route, `og:image file missing from out/: ${pathname}`);
	}

	const tag = html.match(/<html[^>]*>/)?.[0] ?? "";
	const lang = tag.match(/lang="([^"]+)"/)?.[1] ?? "";
	const dir = tag.match(/dir="([^"]+)"/)?.[1] ?? "";
	if (isFa(route)) {
		if (lang !== "fa") fail(route, `expected lang="fa", got "${lang}"`);
		if (dir !== "rtl") fail(route, `expected dir="rtl", got "${dir}"`);
	} else if (lang !== "en") {
		fail(route, `expected lang="en", got "${lang}"`);
	}
}

const byRoute = new Map(htmlPages().map((p) => [p.route, p.file]));
for (const [route, file] of byRoute) {
	if (skip(route)) continue;
	const html = readFileSync(file, "utf8");
	if (redirects.has(route)) {
		if (!/<meta[^>]*name="robots"[^>]*content="[^"]*noindex/i.test(html))
			fail(route, "redirect route missing noindex robots meta");
		continue;
	}
	checkPage(route, html);
}

const pairs = [
	["/", "/fa"],
	["/mentor", "/fa/mentor"],
	["/resume", "/fa/resume"],
];
for (const pair of pairs) {
	for (const route of pair) {
		const file = byRoute.get(route);
		if (!file) {
			fail(route, "page missing (required for hreflang pair)");
			continue;
		}
		const set = hreflangSet(readFileSync(file, "utf8"));
		for (const h of ["en-GB", "fa", "x-default"])
			if (!set.has(h)) fail(route, `missing alternate hreflang="${h}"`);
	}
}

if (warnings.length) {
	console.warn(`Metadata warnings (${warnings.length}, non-fatal):`);
	for (const w of warnings) console.warn(`  ${w}`);
}
if (errors.length) {
	console.error(`Metadata verification FAILED (${errors.length} issues):`);
	for (const e of errors) console.error(`  ${e}`);
	process.exit(1);
}
console.log("Metadata verification OK");
