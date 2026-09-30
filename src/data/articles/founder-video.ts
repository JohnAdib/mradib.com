import { founderVideoHero } from "@/data/founder-video/copy-hero";
import { hubRoute } from "@/data/guides/hub-route";
import type { IArticle } from "./article-interface";

export const articleFounderVideo: IArticle = {
	author: "John Adib",
	publishDate: "2026-09-28",
	publishTime: "16:00:00",
	datePublished: "2026-09-28T16:00:00.000Z",
	dateModified: "2026-09-30T12:00:00.000Z",
	title: `${founderVideoHero.titleLead} ${founderVideoHero.titleAccent}`,
	description: founderVideoHero.thesis,
	pageTitle: "Founder Video Guide: Six Beats in 60 Seconds, One Take",
	pageDesc:
		"The one-minute founder video, beat by beat: the question each beat answers, what to say, what to leave out, its pass test, and a prompt to script it with AI.",
	pagePath: `${hubRoute}/founder-video`,
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
