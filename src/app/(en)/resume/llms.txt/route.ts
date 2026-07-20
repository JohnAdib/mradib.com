import { buildResumeLlmsTxt } from "@/lib/resume-ai/build-llms-txt";

export const dynamic = "force-static";

export function GET(): Response {
	return new Response(buildResumeLlmsTxt("en-US"), {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
