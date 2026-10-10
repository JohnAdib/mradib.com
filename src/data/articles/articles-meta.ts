import { fundraisingKit } from "@/data/guides/fundraising-kit";
import { articleAiAdoption } from "./ai-adoption";
import type { IArticle } from "./article-interface";
import { articleCoaching } from "./coach-for-every-learner";
import { articleGithubAutolink } from "./github-autolink";
import { articleResume } from "./resume";

// The registry, in the order the site presents the guides: the fundraising
// kit first in kit order, then the older guides. Drives the sitemap and the
// page list in llms.txt.
export const articlesMeta: IArticle[] = [
	articleCoaching,
	articleAiAdoption,
	...fundraisingKit.map((entry) => entry.article),
	articleGithubAutolink,
	articleResume,
];

// Newest first, for the article index and the RSS feed, so publish dates
// read as a timeline. ISO timestamps sort correctly as strings.
export const articlesNewestFirst: IArticle[] = [...articlesMeta].sort((a, b) =>
	b.datePublished.localeCompare(a.datePublished),
);
