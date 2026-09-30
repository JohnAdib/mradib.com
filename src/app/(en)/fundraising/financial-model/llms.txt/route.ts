import { financialModelGuide } from "@/data/financial-model";
import { buildGuideLlmsTxt } from "@/lib/guides/build-llms-txt";

export const dynamic = "force-static";

export function GET(): Response {
	return new Response(buildGuideLlmsTxt(financialModelGuide), {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
