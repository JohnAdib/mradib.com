import { buildRssXml } from "@/lib/rss/build-rss-xml";

export const dynamic = "force-static";

export function GET(): Response {
	return new Response(buildRssXml(), {
		headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
	});
}
