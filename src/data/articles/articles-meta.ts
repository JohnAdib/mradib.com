import type { IArticle } from "./article-interface";
import { articleGithubAutolink } from "./github-autolink";

// newest first, drives /articles, the sitemap, the RSS feed, and llms.txt
export const articlesMeta: IArticle[] = [articleGithubAutolink];
