import { articleAcceleratorApplication } from "@/data/articles/accelerator-application";
import { articleFinancialModel } from "@/data/articles/financial-model";
import { articleFounderVideo } from "@/data/articles/founder-video";
import { articleOnePager } from "@/data/articles/one-pager";
import { articlePitchDeck } from "@/data/articles/pitch-deck";
import { articleProductDemo } from "@/data/articles/product-demo";

export interface IMovedRoute {
	/** The path that used to serve the guide. Renders a redirect stub. */
	from: string;
	/** Where the guide lives now. Derived from its article, so it never drifts. */
	to: string;
}

// The six guides moved under the hub on 2026-09-30. Each old path renders a
// redirect stub, and its old llms.txt and skill.md point at the new files.
// Rendered by src/app/(en)/(redirect)/[guide]/.
export const movedGuideRoutes: IMovedRoute[] = [
	{ from: "/pitch-deck", to: articlePitchDeck.pagePath },
	{ from: "/one-pager", to: articleOnePager.pagePath },
	{ from: "/product-demo", to: articleProductDemo.pagePath },
	{ from: "/founder-video", to: articleFounderVideo.pagePath },
	{ from: "/financial-model", to: articleFinancialModel.pagePath },
	{ from: "/application-answers", to: articleAcceleratorApplication.pagePath },
];
