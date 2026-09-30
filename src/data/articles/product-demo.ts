import { hubRoute } from "@/data/guides/hub-route";
import { productDemoHero } from "@/data/product-demo/copy-hero";
import type { IArticle } from "./article-interface";

export const articleProductDemo: IArticle = {
	author: "John Adib",
	publishDate: "2026-09-28",
	publishTime: "10:00:00",
	datePublished: "2026-09-28T10:00:00.000Z",
	dateModified: "2026-09-30T12:00:00.000Z",
	title: `${productDemoHero.titleLead} ${productDemoHero.titleAccent}`,
	description: productDemoHero.thesis,
	pageTitle: "Product Demo Guide: Six Beats, One Flow, Under Three Minutes",
	pageDesc:
		"The product demo, beat by beat: the question each beat answers, what to show, what to skip, the test it must pass, and a prompt to script it with AI.",
	pagePath: `${hubRoute}/product-demo`,
	keywords: [
		"product demo",
		"demo video",
		"startup demo video",
		"how to demo a product",
		"YC demo video",
		"live demo",
		"pitch demo",
		"product walkthrough",
		"seed round",
	],
};
