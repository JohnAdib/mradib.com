import { productDemoGuide } from "@/data/product-demo";
import { buildGuideSkill } from "@/lib/guides/build-skill";

export const dynamic = "force-static";

export function GET(): Response {
	return new Response(buildGuideSkill(productDemoGuide), {
		headers: { "Content-Type": "text/markdown; charset=utf-8" },
	});
}
