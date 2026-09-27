import type { IGuideHeadings, IGuideHero } from "@/data/guides/guide-bundle";

/** Short name for breadcrumbs and the kit. */
export const founderVideoName = "Founder video";

// The page title is split so the hero can set the accent phrase in italic.
// src/data/articles/founder-video.ts joins the same two parts for metadata.
export const founderVideoHero: IGuideHero = {
	eyebrow: "Free guide",
	titleLead: "Your founder video is",
	titleAccent: "one minute, one take",
	thesis:
		"Reviewers watch the founder video to meet you, not your slides. Every founder on camera, six beats, sixty seconds, and the words you would use across a table.",
	rules: [
		"60 seconds",
		"Every founder on camera",
		"One take, no edits",
		"A phone is enough",
	],
	ctaLabel: "Build it with AI",
	ctaAnchor: "ai",
};

export const founderVideoHeadings: IGuideHeadings = {
	overview: {
		eyebrow: "At a glance",
		title: "Six beats in sixty seconds",
		intro:
			"In order: who you are, what you are building, why this and why you, why this team, how far along you are, what you want. Tap a beat to jump to it.",
	},
	steps: {
		eyebrow: "Beat by beat",
		title: "What each beat must do",
		intro:
			"The question the reviewer has, what to say, what to leave out, and a test to check it passes.",
	},
	rules: {
		eyebrow: "Make it yours",
		title: "Solo, remote, or camera shy",
		intro:
			"The default is every founder in one frame, talking to the lens. Three cases change the rules, and a few beats are optional.",
	},
	ai: {
		eyebrow: "Build it with AI",
		title: "Hand this framework to your AI",
		intro:
			"Drafting the script with ChatGPT, Claude or any AI? Point it at this guide so it writes sixty seconds you can say naturally, not a press release. The whole method is published as two files, built from the same data as this page.",
	},
	references: {
		eyebrow: "Sources",
		title: "Where this comes from",
		intro:
			"The beats distil what the programmes that ask for founder videos say they look for. Read them.",
	},
};

export const founderVideoOptionalTitle = "Optional beats";

export const founderVideoHowTo = {
	name: "How to record a founder video",
	description:
		"Six beats in sixty seconds, each answering one reviewer question: what to say, what to leave out, and the test it must pass.",
};
