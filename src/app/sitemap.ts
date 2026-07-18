import type { MetadataRoute } from "next";
import { articlesMeta } from "@/data/articles/articles-meta";
import { routesEn } from "@/data/routes-en";
import { routesFa } from "@/data/routes-fa";
import { homepageUrl } from "@/lib/constants/url";

export const dynamic = "force-static";

function toUrl(path: string): string {
	return path === "/" ? homepageUrl : `${homepageUrl}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
	const staticPages = [...routesEn, ...routesFa].map((path) => ({
		url: toUrl(path),
	}));

	const articles = articlesMeta.map((article) => ({
		url: toUrl(article.pagePath),
		lastModified: article.dateModified,
	}));

	return [...staticPages, ...articles];
}
