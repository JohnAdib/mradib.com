import { hubRoute } from "@/data/guides/hub-route";
import { onePagerHero } from "@/data/one-pager/copy-hero";
import type { IArticle } from "./article-interface";

export const articleOnePager: IArticle = {
	author: "John Adib",
	publishDate: "2026-09-27",
	publishTime: "16:00:00",
	datePublished: "2026-09-27T16:00:00.000Z",
	dateModified: "2026-09-30T12:00:00.000Z",
	title: `${onePagerHero.titleLead} ${onePagerHero.titleAccent}`,
	description: onePagerHero.thesis,
	pageTitle:
		"Startup One-Pager Guide: Nine Blocks Investors Read in 60 Seconds",
	pageDesc:
		"The investor one-pager, block by block: the question each block answers, what goes in, what stays out, the test it must pass, and a prompt to build it with AI.",
	pagePath: `${hubRoute}/one-pager`,
	keywords: [
		"startup one-pager",
		"one pager template",
		"investor one-pager",
		"executive summary startup",
		"one page pitch",
		"pre-seed",
		"seed round",
		"fundraising",
		"how to write a one-pager",
	],
};
