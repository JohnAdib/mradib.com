import { buildLlmsTxt } from "@/lib/llms/build-llms-txt";

export const dynamic = "force-static";

export function GET(): Response {
	return new Response(buildLlmsTxt(), {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
