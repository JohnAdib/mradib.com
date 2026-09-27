import { buildPitchDeckLlmsTxt } from "@/lib/pitch-deck/build-llms-txt";

export const dynamic = "force-static";

export function GET(): Response {
	return new Response(buildPitchDeckLlmsTxt(), {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
