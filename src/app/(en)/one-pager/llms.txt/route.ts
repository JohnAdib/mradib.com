import { onePagerGuide } from "@/data/one-pager";
import { buildGuideLlmsTxt } from "@/lib/guides/build-llms-txt";

export const dynamic = "force-static";

export function GET(): Response {
	return new Response(buildGuideLlmsTxt(onePagerGuide), {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
