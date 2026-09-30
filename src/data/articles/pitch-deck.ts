import { hubRoute } from "@/data/guides/hub-route";
import { deckHero } from "@/data/pitch-deck/copy-hero";
import type { IArticle } from "./article-interface";

export const articlePitchDeck: IArticle = {
	author: "John Adib",
	publishDate: "2026-09-27",
	publishTime: "12:00:00",
	datePublished: "2026-09-27T12:00:00.000Z",
	dateModified: "2026-09-30T12:00:00.000Z",
	title: `${deckHero.titleLead} ${deckHero.titleAccent}`,
	description: deckHero.thesis,
	pageTitle: "Startup Pitch Deck Guide: 12 Slides, One Investor Question Each",
	pageDesc:
		"The 12-slide pitch deck, slide by slide: the investor question each slide answers, what to put on it, what to leave off, and a prompt to build it with AI.",
	pagePath: `${hubRoute}/pitch-deck`,
	keywords: [
		"pitch deck",
		"pitch deck template",
		"pitch deck structure",
		"startup pitch deck",
		"investor deck",
		"seed round",
		"pre-seed",
		"fundraising",
		"how to make a pitch deck",
	],
};
