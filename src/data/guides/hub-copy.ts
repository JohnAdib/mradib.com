import type { IPageClosing } from "@/data/page-closings";
import type { IGuideHeading } from "./guide-interface";

// Everything the /fundraising hub renders. The six guides themselves come
// from fundraising-kit.ts.
export const hubCopy = {
	pageTitle: "The Fundraising Kit: Six Guides From Pitch Deck to Application",
	pageDesc:
		"Six free founder guides in one kit: pitch deck, one-pager, product demo, founder video, financial model and application answers, by John Adib.",
	anchors: { guides: "guides", how: "how", ai: "ai" },
	hero: {
		eyebrow: "Free guides",
		titleLead: "Six documents,",
		titleAccent: "one story",
		thesis:
			"Raising money takes six documents. Each guide here says what goes in, what stays out, and the test it must pass. Build all six from one set of facts, and none of them will contradict another.",
		rules: [
			"Six guides, in build order",
			"One set of facts",
			"AI-ready files",
			"Written by a two-time founder",
		],
		ctaLabel: "Start with the deck",
		ctaHref: "/pitch-deck",
	},
	/** The kit as a living artifact in the hero: "Guide 2 of 6". */
	artifactLabels: { unit: "Guide", of: "of" },
	headings: {
		guides: {
			eyebrow: "The kit",
			title: "Six guides, in the order you build them",
			intro:
				"Start with the deck, because it forces the story. Everything after it is a cut of the same facts for a different reader.",
		},
		how: {
			eyebrow: "The method",
			title: "One set of facts, six documents",
			intro:
				"Investors read every piece you send and notice when two of them disagree. Write the facts once, then shape them.",
		},
		ai: {
			eyebrow: "Build it with AI",
			title: "Every framework, machine-readable",
			intro:
				"Each guide publishes its framework as a text file and a portable skill, built from the same data as its page. Point your AI at one guide, or hand it the whole kit.",
		},
	} satisfies Record<"guides" | "how" | "ai", IGuideHeading>,
	how: [
		{
			title: "Write the fact sheet",
			text: "One page for yourself, never sent: what you do, for whom, every number with its date, the team, the amount you are raising and what it buys. Every document below quotes it.",
		},
		{
			title: "Tell the story in the deck",
			text: "Twelve slides, one investor question each. The deck decides the order of the argument, and the other five documents inherit it.",
		},
		{
			title: "Cut it, then show it",
			text: "The one-pager is the deck without you in the room. The demo and the founder video prove the two claims a deck cannot: the product works, and you are the people to build it.",
		},
		{
			title: "Price it, then apply",
			text: "The financial model turns the ask into months of runway an investor can check. The application answers put the same facts into plain words, in the boxes the programme gives you.",
		},
	],
	ai: {
		indexNote:
			"One link that lists all six frameworks, for any AI that can read a link.",
		frameworkLabel: "Framework",
		skillLabel: "Skill",
	},
	aiText: {
		title: "The fundraising kit: six MrAdib frameworks",
		summary:
			"An index of six machine-readable frameworks by John Adib (MrAdib), a two-time founder who raised $1M as a CEO: pitch deck, one-pager, product demo, founder video, financial model and application answers. Follow one link per document.",
	},
	itemListName: "The fundraising kit",
	closing: {
		title: "Start with the deck.",
		desc: "Twelve questions, one slide each. Once the story holds, the other five documents fall into place. Stuck on a piece? Say hello.",
		linkPrimaryText: "Read the pitch deck guide",
		linkPrimaryLink: "/pitch-deck",
		linkSecondaryText: "Get in touch",
		linkSecondaryLink: "/contact",
	} satisfies IPageClosing,
};
