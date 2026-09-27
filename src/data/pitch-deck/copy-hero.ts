import type { IGuideHeadings, IGuideHero } from "@/data/guides/guide-bundle";

/** Short name for breadcrumbs and the kit. */
export const deckName = "Pitch deck";

// The page title is split so the hero can set the accent phrase in italic.
// src/data/articles/pitch-deck.ts joins the same two parts for metadata.
export const deckHero: IGuideHero = {
	eyebrow: "Free guide",
	titleLead: "Your pitch deck is",
	titleAccent: "12 questions",
	thesis:
		"Investors do not read slides, they look for answers. Give them twelve questions, one slide each, and the story tells itself.",
	rules: [
		"One question per slide",
		"One idea per slide",
		"Legible from the back row",
		"It starts the conversation",
	],
	ctaLabel: "Build it with AI",
	ctaAnchor: "ai",
};

export const deckHeadings: IGuideHeadings = {
	overview: {
		eyebrow: "At a glance",
		title: "Twelve slides, one story",
		intro:
			"In the order investors expect: cover, ambition, problem, customer, solution and why now, market, competition, distribution, evidence, economics, team, ask. Tap a slide to jump to it.",
	},
	steps: {
		eyebrow: "Slide by slide",
		title: "What each slide must do",
		intro:
			"The question it answers, what to put on it, what to leave off, and a test to check it passes.",
	},
	rules: {
		eyebrow: "Make it yours",
		title: "When to change the order",
		intro:
			"The default order works from a £0 idea to a company with early traction. Three cases earn a change, and a few slides are optional.",
	},
	ai: {
		eyebrow: "Build it with AI",
		title: "Hand this framework to your AI",
		intro:
			"Using ChatGPT, Claude or any AI to draft your deck? Point it at this guide so it follows the framework instead of generic filler. The whole method is published as two files, built from the same data as this page.",
	},
	references: {
		eyebrow: "Sources",
		title: "Where this comes from",
		intro:
			"The framework distils what the investors who see the most decks say they want. Read them.",
	},
};

export const deckOptionalTitle = "Optional slides";

export const deckHowTo = {
	name: "How to build a 12-slide pitch deck",
	description:
		"Twelve slides, each answering one investor question: what to put on it, what to leave off, and the test it must pass.",
};
