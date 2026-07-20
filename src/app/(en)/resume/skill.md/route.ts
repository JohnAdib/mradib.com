import { buildResumeSkill } from "@/lib/resume-ai/build-skill";

export const dynamic = "force-static";

export function GET(): Response {
	return new Response(buildResumeSkill("en-US"), {
		headers: { "Content-Type": "text/markdown; charset=utf-8" },
	});
}
