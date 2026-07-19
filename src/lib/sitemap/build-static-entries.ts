import { routesEn, routesFa } from "@/data/routes";
import { type SitemapEntry, sitemapEntry } from "@/lib/sitemap/sitemap-entry";

// English routes emit their own entry plus a paired Persian entry when faPath is set.
function englishEntries(): SitemapEntry[] {
	return routesEn.flatMap((route) => {
		const en = sitemapEntry(route.path, route.lastModified);
		return route.faPath
			? [en, sitemapEntry(route.faPath, route.lastModified)]
			: [en];
	});
}

// Persian-only routes with no English counterpart.
function persianOnlyEntries(): SitemapEntry[] {
	return routesFa.map((route) => sitemapEntry(route.path, route.lastModified));
}

export function buildStaticEntries(): SitemapEntry[] {
	return [...englishEntries(), ...persianOnlyEntries()];
}
