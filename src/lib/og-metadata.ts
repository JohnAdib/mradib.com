import type { Metadata } from "next";
import { getOgCard, ogCardImage } from "@/data/og";
import { rootMetadata } from "./root-metadata";
import { rootMetadataFa } from "./root-metadata-fa";

interface IOgExtra {
	publishedTime?: string;
	/** Override og:title when it should read differently from the card headline
	 * shown inside the image, so the preview text and the art do not repeat. */
	title?: string;
}

/**
 * Social metadata for one route: the bespoke 1200x630 card from public/og
 * plus an og:title written for feeds, not search snippets. og:description
 * intentionally stays unset so it falls back to the page's meta description.
 * Next merges metadata per top level key, so openGraph re-spreads the root
 * object here; otherwise siteName, locale, and url would be lost.
 */
export function ogMetadata(route: string, extra?: IOgExtra): Metadata {
	const card = getOgCard(route);
	const root = card.lang === "fa" ? rootMetadataFa : rootMetadata;
	const base = {
		...root.openGraph,
		title: extra?.title ?? card.headline,
		images: [ogCardImage(card)],
	};
	return {
		openGraph: extra?.publishedTime
			? { ...base, type: "article", publishedTime: extra.publishedTime }
			: base,
	};
}
