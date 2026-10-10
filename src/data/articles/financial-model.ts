import { financialModelHero } from "@/data/financial-model/copy-hero";
import { hubRoute } from "@/data/guides/hub-route";
import type { IArticle } from "./article-interface";

export const articleFinancialModel: IArticle = {
	author: "John Adib",
	publishDate: "2026-09-29",
	publishTime: "10:00:00",
	datePublished: "2026-09-29T10:00:00.000Z",
	dateModified: "2026-09-30T12:00:00.000Z",
	title: `${financialModelHero.titleLead} ${financialModelHero.titleAccent}`,
	description: financialModelHero.thesis,
	pageTitle: "Startup Financial Model Guide: Nine Sheets Investors Can Check",
	pageDesc:
		"The startup financial model, sheet by sheet: the question each sheet answers, what goes in, what stays out, its pass test, and a prompt to build it with AI.",
	pagePath: `${hubRoute}/financial-model`,
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
