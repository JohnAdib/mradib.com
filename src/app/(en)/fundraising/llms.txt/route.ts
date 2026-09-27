import { buildKitLlmsTxt } from "@/lib/guides/build-kit-llms-txt";

export const dynamic = "force-static";

export function GET(): Response {
	return new Response(buildKitLlmsTxt(), {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
