import { founderVideoHero } from "@/data/founder-video/copy-hero";
import type { IArticle } from "./article-interface";

export const articleFounderVideo: IArticle = {
	author: "John Adib",
	publishDate: "2026-09-27",
	publishTime: "11:30:00",
	datePublished: "2026-09-27T11:30:00.000Z",
	dateModified: "2026-09-27T11:30:00.000Z",
	title: `${founderVideoHero.titleLead} ${founderVideoHero.titleAccent}`,
	description: founderVideoHero.thesis,
	pageTitle: "The Founder Video: Six Beats in Sixty Seconds, One Take",
	pageDesc:
		"The one-minute founder video, beat by beat: the question each beat answers, what to say, what to leave out, its pass test, and a prompt to script it with AI.",
	pagePath: "/founder-video",
	keywords: [
		"founder video",
		"YC founder video",
		"one minute founder video",
		"accelerator application video",
		"how to record a founder video",
		"Y Combinator application",
		"Techstars application",
		"startup video",
		"pre-seed",
	],
};
