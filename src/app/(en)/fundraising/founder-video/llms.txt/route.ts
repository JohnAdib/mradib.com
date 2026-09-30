import { founderVideoGuide } from "@/data/founder-video";
import { buildGuideLlmsTxt } from "@/lib/guides/build-llms-txt";

export const dynamic = "force-static";

export function GET(): Response {
	return new Response(buildGuideLlmsTxt(founderVideoGuide), {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
