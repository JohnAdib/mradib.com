import { applicationAnswersName } from "@/data/application-answers/copy-hero";
import { articleApplicationAnswers } from "@/data/articles/application-answers";
import type { IArticle } from "@/data/articles/article-interface";
import { articleFinancialModel } from "@/data/articles/financial-model";
import { articleFounderVideo } from "@/data/articles/founder-video";
import { articleOnePager } from "@/data/articles/one-pager";
import { articlePitchDeck } from "@/data/articles/pitch-deck";
import { articleProductDemo } from "@/data/articles/product-demo";
import { financialModelName } from "@/data/financial-model/copy-hero";
import { founderVideoName } from "@/data/founder-video/copy-hero";
import { onePagerName } from "@/data/one-pager/copy-hero";
import { deckName } from "@/data/pitch-deck/copy-hero";
import { productDemoName } from "@/data/product-demo/copy-hero";

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
	{
		article: articleOnePager,
		name: onePagerName,
		short: "Nine blocks that read in sixty seconds.",
	},
	{
		article: articleProductDemo,
		name: productDemoName,
		short: "One real flow in under three minutes.",
	},
	{
		article: articleFounderVideo,
		name: founderVideoName,
		short: "Six beats in sixty seconds, one take.",
	},
	{
		article: articleFinancialModel,
		name: financialModelName,
		short: "Nine sheets, every number traced to an input.",
	},
	{
		article: articleApplicationAnswers,
		name: applicationAnswersName,
		short: "Ten answers to the questions the big programmes ask.",
	},
];
