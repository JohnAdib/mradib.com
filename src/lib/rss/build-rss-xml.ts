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

function buildItem(title: string, path: string, desc: string, date: string) {
	const url = `${homepageUrl}${path}`;
	return [
		"<item>",
		`<title>${escapeXml(title)}</title>`,
		`<link>${url}</link>`,
		`<guid>${url}</guid>`,
		`<description>${escapeXml(desc)}</description>`,
		`<pubDate>${new Date(date).toUTCString()}</pubDate>`,
		`<author>${escapeXml(profile.name)}</author>`,
		"</item>",
	].join("");
}

export function buildRssXml(): string {
	const items = articlesMeta
		.map((article) =>
			buildItem(
				article.title,
				article.pagePath,
				article.description,
				article.datePublished,
			),
		)
		.join("");

	return [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
		"<channel>",
		`<title>${escapeXml(`${profile.name} (${profile.brand}) — Articles`)}</title>`,
		`<link>${homepageUrl}</link>`,
		`<description>${escapeXml(profile.shortBio)}</description>`,
		"<language>en-gb</language>",
		`<atom:link href="${homepageUrl}/feed.xml" rel="self" type="application/rss+xml"/>`,
		items,
		"</channel>",
		"</rss>",
	].join("");
}
