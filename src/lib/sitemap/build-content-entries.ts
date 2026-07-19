import { articlesMeta } from "@/data/articles/articles-meta";
import { flagshipAwards } from "@/data/awards";
import { talks } from "@/data/talks/talks";
import { type SitemapEntry, sitemapEntry } from "@/lib/sitemap/sitemap-entry";

// Articles emit their own entry plus a paired Persian entry when faPath is set.
function articleEntries(): SitemapEntry[] {
	return articlesMeta.flatMap((article) => {
		const en = sitemapEntry(article.pagePath, article.dateModified);
		return article.faPath
			? [en, sitemapEntry(article.faPath, article.dateModified)]
			: [en];
	});
}

function awardEntries(): SitemapEntry[] {
	return flagshipAwards.map((award) =>
		sitemapEntry(`/awards/${award.slug}`, award.pageUpdated),
	);
}

function talkEntries(): SitemapEntry[] {
	return talks.flatMap((talk) =>
		talk.path ? [sitemapEntry(talk.path, talk.date)] : [],
	);
}

export function buildContentEntries(): SitemapEntry[] {
	return [...articleEntries(), ...awardEntries(), ...talkEntries()];
}
