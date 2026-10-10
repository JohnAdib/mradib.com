import { financialModelGuide } from "@/data/financial-model";
import { buildGuideSkill } from "@/lib/guides/build-skill";

export const dynamic = "force-static";

export function GET(): Response {
	return new Response(buildGuideSkill(financialModelGuide), {
		headers: { "Content-Type": "text/markdown; charset=utf-8" },
	});
}
