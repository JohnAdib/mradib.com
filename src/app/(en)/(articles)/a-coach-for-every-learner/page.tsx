import type { Metadata } from "next";
import Link from "next/link";
import cover from "@/../public/talks/covers/a-coach-for-every-learner.webp";
import { ArticleLayout } from "@/components/article/layout";
import { TalkPdfPreview } from "@/components/talk/talk-pdf-preview";
import {
	articleCoaching as article,
	coachingIntro,
	coachingSections,
} from "@/data/articles/coach-for-every-learner";
import { ogMetadata } from "@/lib/og-metadata";

export const metadata: Metadata = {
	title: article.pageTitle,
	description: article.pageDesc,
	...ogMetadata(article.pagePath, { publishedTime: article.datePublished }),
};

export default function Page() {
	return (
		<ArticleLayout
			title={article.title}
			intro={article.description}
			coverImage={cover}
			urlPath={article.pagePath}
			keywords={article.keywords}
			datePublished={article.datePublished}
			dateModified={article.dateModified}
			lang="en-US"
			readTimeMinutes={4}
			breadcrumb={[
				{ position: 1, name: "Home", item: "/", current: false },
				{ position: 2, name: "Articles", item: "/articles", current: false },
				{
					position: 3,
					name: article.title,
					item: article.pagePath,
					current: true,
				},
			]}
		>
			<div className="not-prose my-6">
				<TalkPdfPreview href={article.pdfUrl ?? ""} title={article.title} />
			</div>
			{coachingIntro.map((paragraph) => (
				<p key={paragraph}>{paragraph}</p>
			))}
			{coachingSections.map((section) => (
				<section key={section.title}>
					<h2>{section.title}</h2>
					{section.paragraphs.map((paragraph) => (
						<p key={paragraph}>{paragraph}</p>
					))}
				</section>
			))}
			<p>
				Read more about <Link href="/mentor">mentoring</Link> and{" "}
				<Link href="/about">John Adib</Link>.
			</p>
		</ArticleLayout>
	);
}
