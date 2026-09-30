import { pitchDeckGuide } from "@/data/pitch-deck";
import { buildGuideSkill } from "@/lib/guides/build-skill";

export const dynamic = "force-static";

export function GET(): Response {
	return new Response(buildGuideSkill(pitchDeckGuide), {
		headers: { "Content-Type": "text/markdown; charset=utf-8" },
	});
}
