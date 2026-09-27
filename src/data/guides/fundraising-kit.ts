import type { IArticle } from "@/data/articles/article-interface";
import { articlePitchDeck } from "@/data/articles/pitch-deck";
import { deckName } from "@/data/pitch-deck/copy-hero";

/** The hub that introduces the kit. Not an article: it lives in routes-en.ts. */
export const hubRoute = "/fundraising";

export interface IKitEntry {
	article: IArticle;
	/** Short name for the kit cards, breadcrumbs and the position line. */
	name: string;
	/** What this piece does for the raise, in one line, on the kit cards. */
	short: string;
}

// The order a founder builds them, and the order the kit shows them. Imports
// only article and copy leaves, never guide bundles, so the kit can render on
// every guide page without loading every guide.
export const fundraisingKit: IKitEntry[] = [
	{
		article: articlePitchDeck,
		name: deckName,
		short: "Twelve slides, one investor question each.",
	},
];
