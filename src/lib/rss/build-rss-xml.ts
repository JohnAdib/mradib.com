import type { IArticle } from "@/data/articles/article-interface";
import { articlesMeta } from "@/data/articles/articles-meta";
import { profile } from "@/data/profile";
import { homepageUrl } from "@/lib/constants/url";

function escapeXml(value: string): string {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&apos;");
}

function buildItem(article: IArticle) {
	const url = `${homepageUrl}${article.pagePath}`;
	const categories = article.keywords.map(
		(keyword) => `<category>${escapeXml(keyword)}</category>`,
	);
	return [
		"<item>",
		`<title>${escapeXml(article.title)}</title>`,
		`<link>${url}</link>`,
		`<guid>${url}</guid>`,
		`<description>${escapeXml(article.description)}</description>`,
		`<pubDate>${new Date(article.datePublished).toUTCString()}</pubDate>`,
		`<author>${escapeXml(profile.name)}</author>`,
		...categories,
		"</item>",
	].join("");
}

export function buildRssXml(): string {
	const items = articlesMeta.map(buildItem).join("");
	const newestModified = articlesMeta.reduce((latest, article) => {
		const modified = new Date(article.dateModified).getTime();
		return modified > latest ? modified : latest;
	}, 0);

	return [
		'<?xml version="1.0" encoding="UTF-8"?>',
		// Two deliberate scope decisions for this feed:
		// 1. English only. A single Persian article does not justify a second feed.
		// 2. Talks are excluded. They carry Event schema and live in the sitemap.
		"<!-- English articles only; talks are covered by Event schema and the sitemap. -->",
		'<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
		"<channel>",
		`<title>${escapeXml(`Articles by ${profile.name} (${profile.brand})`)}</title>`,
		`<link>${homepageUrl}</link>`,
		`<description>${escapeXml(profile.shortBio)}</description>`,
		"<language>en-gb</language>",
		`<lastBuildDate>${new Date(newestModified).toUTCString()}</lastBuildDate>`,
		`<atom:link href="${homepageUrl}/feed.xml" rel="self" type="application/rss+xml"/>`,
		items,
		"</channel>",
		"</rss>",
	].join("");
}
