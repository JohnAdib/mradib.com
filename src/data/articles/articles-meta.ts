import { fundraisingKit } from "@/data/guides/fundraising-kit";
import type { IArticle } from "./article-interface";
import { articleGithubAutolink } from "./github-autolink";
import { articleResume } from "./resume";

// Newest first, drives /articles, the sitemap, the RSS feed, and llms.txt.
// The fundraising kit leads, in kit order; its article times descend so
// newest-first and kit order agree.
export const articlesMeta: IArticle[] = [
	...fundraisingKit.map((entry) => entry.article),
	articleGithubAutolink,
	articleResume,
];
