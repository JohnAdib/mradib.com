import { productDemoGuide } from "@/data/product-demo";
import { buildGuideLlmsTxt } from "@/lib/guides/build-llms-txt";

export const dynamic = "force-static";

export function GET(): Response {
	return new Response(buildGuideLlmsTxt(productDemoGuide), {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
