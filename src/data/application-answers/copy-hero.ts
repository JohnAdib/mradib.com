import type {
	GuideFrame,
	IGuideHeadings,
	IGuideHero,
} from "@/data/guides/guide-bundle";

/** Short name for breadcrumbs and the kit. */
export const applicationAnswersName = "Application answers";

/** The shape of the artifact: the hero object, the tiles and the stage take it. */
export const applicationAnswersFrame: GuideFrame = "form";

// The page title is split so the hero can set the accent phrase in italic.
// src/data/articles/application-answers.ts joins the same two parts for metadata.
export const applicationAnswersHero: IGuideHero = {
	eyebrow: "Free guide",
	titleLead: "Your application is",
	titleAccent: "10 straight answers",
	thesis:
		"Reviewers read thousands of applications in a few days. Answer the question asked, in plain words, with the same facts as your deck. Ten answers cover Y Combinator, Antler, Techstars and most forms in between.",
	rules: [
		"Answer the question asked",
		"Specifics, not adjectives",
		"Same facts as the deck",
		"Short beats long",
	],
	ctaLabel: "Build it with AI",
	ctaAnchor: "ai",
};

export const applicationAnswersHeadings: IGuideHeadings = {
	overview: {
		eyebrow: "At a glance",
		title: "Ten answers, one story",
		intro:
			"The questions that recur across the big programmes, in the order the forms tend to ask them. Tap an answer to jump to it.",
	},
	steps: {
		eyebrow: "Answer by answer",
		title: "What each answer must do",
		intro:
			"The question behind the box, what to say, what to leave out, who asks it, and a test to check it passes.",
	},
	rules: {
		eyebrow: "Make it yours",
		title: "Pre-product, solo, reapplying, themed",
		intro:
			"The default answers fit a small team with a product and early users. Four cases change the rules, and a few answers are optional.",
	},
	ai: {
		eyebrow: "Build it with AI",
		title: "Hand this framework to your AI",
		intro:
			"Drafting answers with ChatGPT, Claude or any AI? Point it at this guide so it answers the question asked instead of writing marketing copy. The whole method is published as two files, built from the same data as this page.",
	},
	references: {
		eyebrow: "Sources",
		title: "Where this comes from",
		intro:
			"The answers distil what the programmes themselves publish about how to apply. Forms change every batch; the questions behind them do not. Read them.",
	},
};

export const applicationAnswersOptionalTitle = "Optional answers";

export const applicationAnswersHowTo = {
	name: "How to answer a startup accelerator application",
	description:
		"Ten answers, each meeting one question the big programmes ask: what to say, what to leave out, and the test it must pass.",
};
