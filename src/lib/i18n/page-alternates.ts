import type { Metadata } from "next";
import { languageAlternates } from "./language-alternates";

/** Per-page `alternates` metadata: self canonical, RSS feed, and hreflang languages. */
export function pageAlternates(path: string): Metadata["alternates"] {
	return {
		canonical: "./",
		types: {
			"application/rss+xml": "/feed.xml",
		},
		languages: languageAlternates(path),
	};
}
