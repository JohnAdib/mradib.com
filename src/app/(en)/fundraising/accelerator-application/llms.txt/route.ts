import { acceleratorApplicationGuide } from "@/data/accelerator-application";
import { buildGuideLlmsTxt } from "@/lib/guides/build-llms-txt";

export const dynamic = "force-static";

export function GET(): Response {
	return new Response(buildGuideLlmsTxt(acceleratorApplicationGuide), {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
