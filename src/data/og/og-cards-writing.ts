import { monthlyActivityData } from "@/data/ai-adoption/metrics";
import { aiDevelopmentSkills } from "@/data/ai-adoption/skills";
import { articleAiAdoption } from "@/data/articles/ai-adoption";
import type { IOgCard } from "./og-card-interface";

export const ogCardsWriting: IOgCard[] = [
	{
		slug: "ai-adoption",
		route: articleAiAdoption.pagePath,
		lang: "en",
		eyebrow: "AI adoption / John Adib",
		headline: "Confidence comes from evidence.",
		proof: `${aiDevelopmentSkills.length} focused skills. ${monthlyActivityData.observations[0].value} merged PRs in January 2026. ${monthlyActivityData.observations.at(-1)?.value} in August.`,
	},
];
