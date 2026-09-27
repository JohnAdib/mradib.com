import { applicationAnswersGuide } from "@/data/application-answers";
import { buildGuideLlmsTxt } from "@/lib/guides/build-llms-txt";

export const dynamic = "force-static";

export function GET(): Response {
	return new Response(buildGuideLlmsTxt(applicationAnswersGuide), {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
