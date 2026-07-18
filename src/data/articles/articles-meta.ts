import type { IArticle } from "./article-interface";
import { articleGithubAutolink } from "./github-autolink";
import { articleResume } from "./resume";

// newest first, drives /articles, the sitemap, the RSS feed, and llms.txt
export const articlesMeta: IArticle[] = [articleGithubAutolink, articleResume];
