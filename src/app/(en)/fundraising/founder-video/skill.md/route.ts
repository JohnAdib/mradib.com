import { founderVideoGuide } from "@/data/founder-video";
import { buildGuideSkill } from "@/lib/guides/build-skill";

export const dynamic = "force-static";

export function GET(): Response {
	return new Response(buildGuideSkill(founderVideoGuide), {
		headers: { "Content-Type": "text/markdown; charset=utf-8" },
	});
}
