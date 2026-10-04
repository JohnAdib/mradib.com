import { articleAiAdoption } from "@/data/articles/ai-adoption";
import type { IOgCard } from "./og-card-interface";

export const ogCardsWriting: IOgCard[] = [
	{
		slug: "ai-adoption",
		route: articleAiAdoption.pagePath,
		lang: "en",
		eyebrow: "AI adoption / John Adib",
		headline: "Confidence comes from evidence.",
		proof:
			"Tests, device evidence and production feedback inside the development loop.",
	},
];
