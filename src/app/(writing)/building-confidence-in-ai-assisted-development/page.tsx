import type { Metadata } from "next";
import {
	AiAdoptionArticle,
	aiAdoptionToc,
} from "@/components/ai-adoption-article";
import { ArticleLayout } from "@/components/article/layout";
import { ArticleToc } from "@/components/toc/article-toc";
import { articleWordCount } from "@/data/ai-adoption/reading-word-count";
import { articleAiAdoption as article } from "@/data/articles/ai-adoption";
import { ogMetadata } from "@/lib/og-metadata";
import coverImage from "../../../../public/og/ai-adoption.jpg";

export const metadata: Metadata = {
	title: article.pageTitle,
	description: article.pageDesc,
	alternates: { canonical: article.pagePath },
	...ogMetadata(article.pagePath, { publishedTime: article.datePublished }),
};

export default function Page() {
	return (
		<ArticleLayout
			neutralAuthor
			title={article.title}
			intro={article.description}
			urlPath={article.pagePath}
			keywords={article.keywords}
			coverImage={coverImage}
			datePublished={article.datePublished}
			dateModified={article.dateModified}
			readTimeMinutes={Math.ceil(articleWordCount / 220)}
			lang="en-US"
			breadcrumb={[
				{ position: 1, name: "Home", item: "/", current: false },
				{ position: 2, name: "Articles", item: "/articles", current: false },
				{
					position: 3,
					name: "AI adoption",
					item: article.pagePath,
					current: true,
				},
			]}
			aside={
				<ArticleToc
					sections={aiAdoptionToc}
					variant="sidebar"
					label="In this article"
					locale="en-GB"
				/>
			}
		>
			<AiAdoptionArticle />
		</ArticleLayout>
	);
}
