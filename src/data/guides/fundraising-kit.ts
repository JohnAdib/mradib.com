import {
	acceleratorApplicationFrame,
	acceleratorApplicationName,
} from "@/data/accelerator-application/copy-hero";
import { articleAcceleratorApplication } from "@/data/articles/accelerator-application";
import type { IArticle } from "@/data/articles/article-interface";
import { articleFinancialModel } from "@/data/articles/financial-model";
import { articleFounderVideo } from "@/data/articles/founder-video";
import { articleOnePager } from "@/data/articles/one-pager";
import { articlePitchDeck } from "@/data/articles/pitch-deck";
import { articleProductDemo } from "@/data/articles/product-demo";
import {
	financialModelFrame,
	financialModelName,
} from "@/data/financial-model/copy-hero";
import {
	founderVideoFrame,
	founderVideoName,
} from "@/data/founder-video/copy-hero";
import type { GuideFrame } from "@/data/guides/guide-bundle";
import { onePagerFrame, onePagerName } from "@/data/one-pager/copy-hero";
import { deckFrame, deckName } from "@/data/pitch-deck/copy-hero";
import {
	productDemoFrame,
	productDemoName,
} from "@/data/product-demo/copy-hero";

export interface IKitEntry {
	article: IArticle;
	/** Short name for the kit cards, breadcrumbs and the position line. */
	name: string;
	/** The shape of the artifact, for the kit tiles. */
	frame: GuideFrame;
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
		frame: deckFrame,
		short: "Twelve slides, one investor question each.",
	},
	{
		article: articleOnePager,
		name: onePagerName,
		frame: onePagerFrame,
		short: "Nine blocks that read in sixty seconds.",
	},
	{
		article: articleProductDemo,
		name: productDemoName,
		frame: productDemoFrame,
		short: "One real flow in under three minutes.",
	},
	{
		article: articleFounderVideo,
		name: founderVideoName,
		frame: founderVideoFrame,
		short: "Six beats in sixty seconds, one take.",
	},
	{
		article: articleFinancialModel,
		name: financialModelName,
		frame: financialModelFrame,
		short: "Nine sheets, every number traced to an input.",
	},
	{
		article: articleAcceleratorApplication,
		name: acceleratorApplicationName,
		frame: acceleratorApplicationFrame,
		short: "Ten answers to the questions the big programmes ask.",
	},
];
