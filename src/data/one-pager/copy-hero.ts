import type {
	GuideFrame,
	IGuideHeadings,
	IGuideHero,
} from "@/data/guides/guide-bundle";

/** Short name for breadcrumbs and the kit. */
export const onePagerName = "One-pager";

/** The shape of the artifact: the hero object, the tiles and the stage take it. */
export const onePagerFrame: GuideFrame = "page";

// The page title is split so the hero can set the accent phrase in italic.
// src/data/articles/one-pager.ts joins the same two parts for metadata.
export const onePagerHero: IGuideHero = {
	eyebrow: "Free guide",
	titleLead: "Your one-pager is the deck in",
	titleAccent: "60 seconds",
	thesis:
		"An investor gives a one-pager one minute, often on a phone, often before deciding whether to open the deck. Nine blocks, the same facts as your deck, and every line earns its place.",
	rules: [
		"One side of one page",
		"Reads in 60 seconds",
		"Same facts as the deck",
		"Sent as a PDF",
	],
	ctaLabel: "Build it with AI",
	ctaAnchor: "ai",
};

export const onePagerHeadings: IGuideHeadings = {
	overview: {
		eyebrow: "At a glance",
		title: "Nine blocks, one page",
		intro:
			"In reading order: who you are, the problem, the solution, the market, why you win, the proof, the model, the team, the ask. Tap a block to jump to it.",
	},
	steps: {
		eyebrow: "Block by block",
		title: "What each block must do",
		intro:
			"The question it answers, what goes in, what stays out, and a test to check it passes.",
	},
	rules: {
		eyebrow: "Make it yours",
		title: "When to change the page",
		intro:
			"The default order works for most raises. Three cases earn a change, and a few blocks are optional.",
	},
	ai: {
		eyebrow: "Build it with AI",
		title: "Hand this framework to your AI",
		intro:
			"Drafting the one-pager with ChatGPT, Claude or any AI? Point it at this guide so it cuts your deck down instead of padding it out. The whole method is published as two files, built from the same data as this page.",
	},
	references: {
		eyebrow: "Sources",
		title: "Where this comes from",
		intro:
			"The one-pager follows the outline the investors who read the most of them recommend. Read them.",
	},
};

export const onePagerOptionalTitle = "Optional blocks";

export const onePagerHowTo = {
	name: "How to write a startup one-pager",
	description:
		"Nine blocks on one page, each answering one investor question: what goes in, what stays out, and the test it must pass.",
};
