import type { Metadata } from "next";
import { ArticleLayout } from "@/components/article/layout";
import { Button } from "@/components/button";
import { articleDesignSystemsAi as article } from "@/data/articles/design-systems-ai";
import imgCover from "./_img/cover.webp";

export const metadata: Metadata = {
	title: article.pageTitle,
	description: article.pageDesc,
	openGraph: {
		type: "article",
		publishedTime: article.datePublished,
	},
	twitter: {
		card: "summary_large_image",
	},
};

export default function Page() {
	return (
		<ArticleLayout
			title={article.title}
			intro={article.description}
			datePublished={article.datePublished}
			lang="en-US"
			urlPath={article.pagePath}
			keywords={article.keywords}
			coverImage={imgCover}
			dateModified={article.dateModified}
		>
			<Intro />
			<PDFPreview />
		</ArticleLayout>
	);
}

function Intro() {
	return (
		<div id="intro">
			<p>
				Design Systems, AI, and the Art of Separation of Concern" is a talk
				about how modern design systems can empower both humans and AI to build
				scalable, maintainable products. It shares 7 practical tips for
				structuring architecture, aligning design and code, and teaching AI
				tools your system's logic—perfect for designers, developers, and product
				teams navigating the future of AI-driven workflows.
			</p>
		</div>
	);
}

function PDFPreview() {
	if (!article.pdfUrl) return null;
	return (
		<div className="flex justify-center">
			<Button variant="primary" href={article.pdfUrl}>
				Download PDF
			</Button>
		</div>
	);
}
