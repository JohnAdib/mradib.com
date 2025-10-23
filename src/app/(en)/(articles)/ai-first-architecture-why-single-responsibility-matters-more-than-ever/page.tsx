import { ArticleLayout } from "@/components/article/layout";
import { Button } from "@/components/button";
import type { Metadata } from "next";
import type { IArticle } from "../i-article-interface";
import imgCover from "./opengraph-image.png";

export const article: IArticle = {
	author: "John Adib",
	publishDate: "2025-10-23",
	publishTime: "10:00:00",
	datePublished: "",
	dateModified: "",
	title:
		"AI-First Architecture - Why Single Responsibility Matters More Than Ever",
	description:
		"Discover why single responsibility principle becomes critical in AI-first architectures and how to design systems that work seamlessly with AI tools",
	pageTitle:
		"AI-First Architecture - Why Single Responsibility Matters More Than Ever",
	pageDesc:
		"Discover why single responsibility principle becomes critical in AI-first architectures and how to design systems that work seamlessly with AI tools",
	pagePath:
		"/ai-first-architecture-why-single-responsibility-matters-more-than-ever",
	keywords: [
		"AI-First Architecture",
		"Single Responsibility",
		"Software Architecture",
		"AI Tools",
		"System Design",
		"Clean Code",
	],
	pdfUrl:
		"https://mradib.com/talks/2025-10-23-ai-first-architecture-why-single-responsibility-matters-more-than-ever.pdf",
};

// set publish date and time
article.datePublished = `${article.publishDate}T${article.publishTime}.000Z`;
article.dateModified = "2025-10-24" + "T" + "10:00:00" + ".000Z";

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
			coverImage={imgCover}
			datePublished={article.datePublished}
			lang="en-US"
			urlPath={article.pagePath}
			keywords={article.keywords}
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
				"AI-First Architecture - Why Single Responsibility Matters More Than
				Ever" is a forward-thinking talk about designing software systems that
				work seamlessly with AI tools. This presentation explores why the single
				responsibility principle becomes even more critical in AI-first
				architectures, and how proper separation of concerns enables both human
				developers and AI assistants to understand, maintain, and extend your
				codebase effectively.
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
