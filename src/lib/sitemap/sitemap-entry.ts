import type { MetadataRoute } from "next";
import { homepageUrl } from "@/lib/constants/url";
import { languageAlternates } from "@/lib/i18n/language-alternates";

export type SitemapEntry = MetadataRoute.Sitemap[number];

function toUrl(path: string): string {
	return path === "/" ? homepageUrl : `${homepageUrl}${path}`;
}

/** Build one sitemap entry, attaching hreflang alternates when the path is paired. */
export function sitemapEntry(path: string, lastModified: string): SitemapEntry {
	const languages = languageAlternates(path);
	return {
		url: toUrl(path),
		lastModified,
		...(languages ? { alternates: { languages } } : {}),
	};
}
