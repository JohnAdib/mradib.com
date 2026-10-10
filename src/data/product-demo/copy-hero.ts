import type {
	GuideFrame,
	IGuideHeadings,
	IGuideHero,
} from "@/data/guides/guide-bundle";

/** Short name for breadcrumbs and the kit. */
export const productDemoName = "Product demo";

/** The shape of the artifact: the hero object, the tiles and the stage take it. */
export const productDemoFrame: GuideFrame = "screen";

// The page title is split so the hero can set the accent phrase in italic.
// src/data/articles/product-demo.ts joins the same two parts for metadata.
export const productDemoHero: IGuideHero = {
	eyebrow: "Free guide",
	titleLead: "Your product demo is one flow in",
	titleAccent: "three minutes",
	thesis:
		"Nobody funds a feature tour. Show one real user doing one real job in your product, narrate why, and stop before the third minute. Six beats, recorded or live.",
	rules: [
		"Under three minutes",
		"Real product, real data",
		"No intro, no music",
		"One user, one job",
	],
	ctaLabel: "Build it with AI",
	ctaAnchor: "ai",
};

export const productDemoHeadings: IGuideHeadings = {
	overview: {
		eyebrow: "At a glance",
		title: "Six beats, one job done",
		intro:
			"In order: who it is for, where they start, what they do, the moment it pays off, the proof it is real, what happens next. Tap a beat to jump to it.",
	},
	steps: {
		eyebrow: "Beat by beat",
		title: "What each beat must do",
		intro:
			"The question the viewer has at that moment, what to show, what to skip, and a test to check it passes.",
	},
	rules: {
		eyebrow: "Make it yours",
		title: "Recorded, live, or on stage",
		intro:
			"The default is a screen recording with your voice, the format most applications ask for. Three formats change the rules, and a few beats are optional.",
	},
	ai: {
		eyebrow: "Build it with AI",
		title: "Hand this framework to your AI",
		intro:
			"Writing the demo script with ChatGPT, Claude or any AI? Point it at this guide so it scripts one flow instead of a feature tour. The whole method is published as two files, built from the same data as this page.",
	},
	references: {
		eyebrow: "Sources",
		title: "Where this comes from",
		intro:
			"The beats distil what the programmes that watch the most demo videos ask for. Read them.",
	},
};

export const productDemoOptionalTitle = "Optional beats";

export const productDemoHowTo = {
	name: "How to record a startup product demo",
	description:
		"Six beats in under three minutes, each answering one question the viewer has: what to show, what to skip, and the test it must pass.",
};
