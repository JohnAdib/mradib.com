import { onePagerGuide } from "@/data/one-pager";
import { buildGuideSkill } from "@/lib/guides/build-skill";

export const dynamic = "force-static";

export function GET(): Response {
	return new Response(buildGuideSkill(onePagerGuide), {
		headers: { "Content-Type": "text/markdown; charset=utf-8" },
	});
}
