import { applicationAnswersHero } from "@/data/application-answers/copy-hero";
import type { IArticle } from "./article-interface";

export const articleApplicationAnswers: IArticle = {
	author: "John Adib",
	publishDate: "2026-09-27",
	publishTime: "11:10:00",
	datePublished: "2026-09-27T11:10:00.000Z",
	dateModified: "2026-09-27T11:10:00.000Z",
	title: `${applicationAnswersHero.titleLead} ${applicationAnswersHero.titleAccent}`,
	description: applicationAnswersHero.thesis,
	pageTitle:
		"Startup Application Answers: 10 Questions YC, Antler and Techstars Ask",
	pageDesc:
		"Accelerator application answers, question by question: what to say, what to leave out, who asks it, its pass test, and a prompt to draft them with AI.",
	pagePath: "/application-answers",
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
