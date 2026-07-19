// Small, dependency-free HTML extraction helpers for the metadata verifier.

export function decodeEntities(s) {
	return s
		.replace(/&#x([0-9a-fA-F]+);/g, (_, h) =>
			String.fromCodePoint(Number.parseInt(h, 16)),
		)
		.replace(/&#(\d+);/g, (_, d) =>
			String.fromCodePoint(Number.parseInt(d, 10)),
		)
		.replace(/&quot;/g, '"')
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&amp;/g, "&");
}

// Remove inline <svg>...</svg> blocks so icon <title> tags do not inflate counts.
export function stripSvg(html) {
	return html.replace(/<svg[\s\S]*?<\/svg>/gi, "");
}

export function hasPersian(s) {
	return /[؀-ۿ]/.test(s);
}

// The og:image URL of a page, or null. Tolerates attribute ordering.
export function ogImageUrl(html) {
	for (const m of html.matchAll(/<meta\b[^>]*>/g)) {
		const tag = m[0];
		if (!tag.includes('property="og:image"')) continue;
		const src = tag.match(/content="([^"]+)"/);
		if (src) return decodeEntities(src[1]);
	}
	return null;
}

// Collect every hreflang value from <link rel="alternate" ... hreflang="..."> tags,
// tolerant of attribute ordering and case (React emits camelCase hrefLang,
// which HTML parses identically since attribute names are case insensitive).
export function hreflangSet(html) {
	const out = new Set();
	for (const m of html.matchAll(/<link\b[^>]*>/g)) {
		const tag = m[0];
		if (!tag.includes('rel="alternate"')) continue;
		const h = tag.match(/hreflang="([^"]+)"/i);
		if (h) out.add(h[1]);
	}
	return out;
}
