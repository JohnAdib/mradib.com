import type { MetadataRoute } from "next";
import { homepageUrl } from "@/lib/constants/url";

export const dynamic = "force-static";

/**
 * A single allow-all rule is deliberate. It covers every search and AI
 * crawler (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot and
 * whatever ships next) without a user-agent list that rots. LLM visibility
 * is a goal for this site, so nothing is blocked.
 */
export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: `${homepageUrl}/sitemap.xml`,
	};
}
