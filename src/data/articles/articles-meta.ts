import { articleAiFirstArchitecture } from "./ai-first-architecture";
import type { IArticle } from "./article-interface";
import { articleDesignSystemsAi } from "./design-systems-ai";
import { articleGcpTerraform } from "./gcp-terraform";
import { articleGithubAutolink } from "./github-autolink";
import { articleTurningChaosCloudflare } from "./turning-chaos-cloudflare";

// newest first — drives /articles, the sitemap, the RSS feed, and llms.txt
export const articlesMeta: IArticle[] = [
	articleAiFirstArchitecture,
	articleTurningChaosCloudflare,
	articleDesignSystemsAi,
	articleGcpTerraform,
	articleGithubAutolink,
];
