import { acceleratorApplicationGuide } from "@/data/accelerator-application";
import { buildGuideSkill } from "@/lib/guides/build-skill";

export const dynamic = "force-static";

export function GET(): Response {
	return new Response(buildGuideSkill(acceleratorApplicationGuide), {
		headers: { "Content-Type": "text/markdown; charset=utf-8" },
	});
}
