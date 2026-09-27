import { applicationAnswersGuide } from "@/data/application-answers";
import { buildGuideSkill } from "@/lib/guides/build-skill";

export const dynamic = "force-static";

export function GET(): Response {
	return new Response(buildGuideSkill(applicationAnswersGuide), {
		headers: { "Content-Type": "text/markdown; charset=utf-8" },
	});
}
