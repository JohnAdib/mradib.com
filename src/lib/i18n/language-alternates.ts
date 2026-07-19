import type { MetadataRoute } from "next";
import { articlesMeta } from "@/data/articles/articles-meta";
import { routesEn } from "@/data/routes";
import { homepageUrl } from "@/lib/constants/url";

// Next's Languages<string> map: { "en-GB"?: string; fa?: string; "x-default"?: string; ... }.
export type LanguageAlternates = NonNullable<
	NonNullable<MetadataRoute.Sitemap[number]["alternates"]>["languages"]
>;

interface ILanguagePair {
	en: string;
	fa: string;
}

function toUrl(path: string): string {
	return path === "/" ? homepageUrl : `${homepageUrl}${path}`;
}

/** Every English/Persian page pair, sourced from route and article faPath fields. */
function languagePairs(): ILanguagePair[] {
	const fromRoutes = routesEn.flatMap((route) =>
		route.faPath ? [{ en: route.path, fa: route.faPath }] : [],
	);
	const fromArticles = articlesMeta.flatMap((article) =>
		article.faPath ? [{ en: article.pagePath, fa: article.faPath }] : [],
	);
	return [...fromRoutes, ...fromArticles];
}

/** Resolve hreflang alternates for either side of a pair, or undefined when unpaired. */
export function languageAlternates(
	path: string,
): LanguageAlternates | undefined {
	const pair = languagePairs().find((p) => p.en === path || p.fa === path);
	if (!pair) {
		return undefined;
	}
	const en = toUrl(pair.en);
	return { "en-GB": en, fa: toUrl(pair.fa), "x-default": en };
}
