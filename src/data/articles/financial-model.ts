import { financialModelHero } from "@/data/financial-model/copy-hero";
import type { IArticle } from "./article-interface";

export const articleFinancialModel: IArticle = {
	author: "John Adib",
	publishDate: "2026-09-27",
	publishTime: "11:20:00",
	datePublished: "2026-09-27T11:20:00.000Z",
	dateModified: "2026-09-27T11:20:00.000Z",
	title: `${financialModelHero.titleLead} ${financialModelHero.titleAccent}`,
	description: financialModelHero.thesis,
	pageTitle: "The Startup Financial Model: Nine Sheets Investors Can Check",
	pageDesc:
		"The startup financial model, sheet by sheet: the question each sheet answers, what goes in, what stays out, its pass test, and a prompt to build it with AI.",
	pagePath: "/financial-model",
	keywords: [
		"startup financial model",
		"financial model template",
		"seed round financial model",
		"pre-seed financial projections",
		"runway calculation",
		"burn rate",
		"SaaS financial model",
		"bottom-up financial model",
		"fundraising",
	],
};
