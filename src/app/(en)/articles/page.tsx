import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaOnDarkPanel } from "@/components/cta-on-dark-panel/cta-on-dark-panel";
import { articlesMeta } from "@/data/articles/articles-meta";
import { pageClosings } from "@/data/page-closings";
import { ArticleFeature } from "./_sections/article-feature";
import { ArticlesHero } from "./_sections/articles-hero";

export const metadata: Metadata = {
	title: "Articles",
	description:
		"Two guides, each written to be the most complete answer to its question on the internet. The complete A to Z of building a resume that gets read, and the guide to GitHub Autolink references that wire your issues to Jira, Asana, and more.",
};

export default function ArticlesIndex() {
	return (
		<Container className="mt-16 sm:mt-32">
			<ArticlesHero />
			<section id="articles" className="mt-16 scroll-mt-24 sm:mt-20">
				{articlesMeta.map((article) => (
					<ArticleFeature key={article.pagePath} article={article} />
				))}
			</section>
			<CtaOnDarkPanel {...pageClosings.articles} />
		</Container>
	);
}
