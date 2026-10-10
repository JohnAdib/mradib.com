import { acceleratorApplicationHero } from "@/data/accelerator-application/copy-hero";
import { hubRoute } from "@/data/guides/hub-route";
import type { IArticle } from "./article-interface";

export const articleAcceleratorApplication: IArticle = {
	author: "John Adib",
	publishDate: "2026-09-30",
	publishTime: "10:00:00",
	datePublished: "2026-09-30T10:00:00.000Z",
	dateModified: "2026-09-30T12:00:00.000Z",
	title: `${acceleratorApplicationHero.titleLead} ${acceleratorApplicationHero.titleAccent}`,
	description: acceleratorApplicationHero.thesis,
	pageTitle: "Accelerator Application Guide: What YC, Antler and Techstars Ask",
	pageDesc:
		"Accelerator application answers, question by question: what to say, what to leave out, who asks it, its pass test, and a prompt to draft them with AI.",
	pagePath: `${hubRoute}/accelerator-application`,
	keywords: [
		"YC application",
		"Y Combinator application answers",
		"accelerator application",
		"Antler application",
		"Techstars application",
		"how to apply to an accelerator",
		"startup application questions",
		"describe what your company does in 50 characters",
		"pre-seed",
	],
};
