import { articleAcceleratorApplication } from "@/data/articles/accelerator-application";
import type { IArticle } from "@/data/articles/article-interface";
import { articleFinancialModel } from "@/data/articles/financial-model";
import { articleFounderVideo } from "@/data/articles/founder-video";
import { articleOnePager } from "@/data/articles/one-pager";
import { articlePitchDeck } from "@/data/articles/pitch-deck";
import { articleProductDemo } from "@/data/articles/product-demo";
import { hubRoute } from "@/data/guides/hub-route";
import type { IOgCard } from "./og-card-interface";

/** File name under public/og: the route without its leading slash, slashes as hyphens. */
const slugFor = (route: string): string => route.slice(1).replaceAll("/", "-");

/** A guide's card. Route and slug derive from its article, so they never drift. */
function guideCard(
	article: IArticle,
	headline: string,
	proof: string,
): IOgCard {
	return {
		slug: slugFor(article.pagePath),
		route: article.pagePath,
		lang: "en",
		eyebrow: "Free Guide",
		headline,
		proof,
	};
}

// Social cards for the fundraising kit: the hub and its guides.
export const ogCardsEnGuides: IOgCard[] = [
	{
		slug: slugFor(hubRoute),
		route: hubRoute,
		lang: "en",
		eyebrow: "Free Guides",
		headline: "Six guides. One story.",
		proof:
			"The pitch deck, one-pager, demo, founder video, financial model and accelerator application. From a 2x founder who raised $1M.",
	},
	guideCard(
		articlePitchDeck,
		"Twelve slides. Twelve questions.",
		"The pitch deck, slide by slide. From a 2x founder who raised $1M.",
	),
	guideCard(
		articleOnePager,
		"One page. Sixty seconds.",
		"The investor one-pager, block by block. From a 2x founder who raised $1M.",
	),
	guideCard(
		articleProductDemo,
		"One flow. Three minutes.",
		"The product demo, beat by beat. From a 2x founder who raised $1M.",
	),
	guideCard(
		articleFounderVideo,
		"One minute. One take.",
		"The founder video, beat by beat. From a 2x founder who raised $1M.",
	),
	guideCard(
		articleFinancialModel,
		"The plan, in numbers.",
		"The startup financial model, sheet by sheet. From a 2x founder who raised $1M.",
	),
	guideCard(
		articleAcceleratorApplication,
		"Ten straight answers.",
		"The accelerator application, answer by answer: what Y Combinator, Antler and Techstars ask. From a 2x founder who raised $1M.",
	),
];
