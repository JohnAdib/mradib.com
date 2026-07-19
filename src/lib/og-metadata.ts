import type { Metadata } from "next";
import { getOgCard, ogCardImage } from "@/data/og";
import { rootMetadata } from "./root-metadata";
import { rootMetadataFa } from "./root-metadata-fa";

interface IOgArticleExtra {
	publishedTime: string;
}

/**
 * Social metadata for one route: the bespoke 1200x630 card from public/og
 * plus an og:title written for feeds, not search snippets. og:description
 * intentionally stays unset so it falls back to the page's meta description.
 * Next merges metadata per top level key, so openGraph re-spreads the root
 * object here; otherwise siteName, locale, and url would be lost.
 */
export function ogMetadata(route: string, article?: IOgArticleExtra): Metadata {
	const card = getOgCard(route);
	const root = card.lang === "fa" ? rootMetadataFa : rootMetadata;
	const base = {
		...root.openGraph,
		title: card.headline,
		images: [ogCardImage(card)],
	};
	return {
		openGraph: article
			? { ...base, type: "article", publishedTime: article.publishedTime }
			: base,
	};
}
