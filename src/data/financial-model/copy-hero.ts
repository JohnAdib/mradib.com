import type { IGuideHeadings, IGuideHero } from "@/data/guides/guide-bundle";

/** Short name for breadcrumbs and the kit. */
export const financialModelName = "Financial model";

// The page title is split so the hero can set the accent phrase in italic.
// src/data/articles/financial-model.ts joins the same two parts for metadata.
export const financialModelHero: IGuideHero = {
	eyebrow: "Free guide",
	titleLead: "Your financial model is",
	titleAccent: "the plan in numbers",
	thesis:
		"Investors do not check your forecast, they check your thinking. Nine sheets, every number traced to an assumption, and a runway you can defend in the meeting.",
	rules: [
		"Bottom-up, never top-down",
		"Every number traces to an input",
		"Monthly for 24 months",
		"Runway in months",
	],
	ctaLabel: "Build it with AI",
	ctaAnchor: "ai",
};

export const financialModelHeadings: IGuideHeadings = {
	overview: {
		eyebrow: "At a glance",
		title: "Nine sheets, one story",
		intro:
			"In the order you build them: the inputs, the customers, the revenue, the costs, the people, the spend, the cash, the what-ifs, the one-page summary. Tap a sheet to jump to it.",
	},
	steps: {
		eyebrow: "Sheet by sheet",
		title: "What each sheet must do",
		intro:
			"The question it answers, what goes in, what stays out, and a test to check it passes.",
	},
	rules: {
		eyebrow: "Make it yours",
		title: "Pre-revenue, SaaS, marketplace, hardware",
		intro:
			"The default model fits a software company before or just after first revenue. Four cases change the rules, and a few sheets are optional.",
	},
	ai: {
		eyebrow: "Build it with AI",
		title: "Hand this framework to your AI",
		intro:
			"Building the model with ChatGPT, Claude or any AI? Point it at this guide so it builds bottom-up sheets instead of a hockey stick. The whole method is published as two files, built from the same data as this page.",
	},
	references: {
		eyebrow: "Sources",
		title: "Where this comes from",
		intro:
			"The sheets distil what the investors and operators who read the most early-stage models say they check. Read them.",
	},
};

export const financialModelOptionalTitle = "Optional sheets";

export const financialModelHowTo = {
	name: "How to build a startup financial model",
	description:
		"Nine sheets, each answering one investor question: what goes in, what stays out, and the test it must pass.",
};
