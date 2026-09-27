import { buildPitchDeckSkill } from "@/lib/pitch-deck/build-skill";

export const dynamic = "force-static";

export function GET(): Response {
	return new Response(buildPitchDeckSkill(), {
		headers: { "Content-Type": "text/markdown; charset=utf-8" },
	});
}
