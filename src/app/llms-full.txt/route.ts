import { buildLlmsFullTxt } from "@/lib/llms/build-llms-full-txt";

export const dynamic = "force-static";

export function GET(): Response {
	return new Response(buildLlmsFullTxt(), {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
