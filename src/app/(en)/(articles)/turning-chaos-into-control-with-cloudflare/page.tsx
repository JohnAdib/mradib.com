import { ArticleLayout } from "@/components/article/layout";
import { Button } from "@/components/button";
import type { Metadata } from "next";
import type { IArticle } from "../i-article-interface";
import imgCover from "./opengraph-image.png";

export const article: IArticle = {
	author: "John Adib",
	publishDate: "2025-09-24",
	publishTime: "10:00:00",
	datePublished: "",
	dateModified: "",
	title: "Turning Chaos into Control with Cloudflare",
	description:
		"Learn how to transform chaotic infrastructure into a controlled, scalable system using Cloudflare's powerful tools and services",
	pageTitle: "Turning Chaos into Control with Cloudflare",
	pageDesc:
		"Learn how to transform chaotic infrastructure into a controlled, scalable system using Cloudflare's powerful tools and services",
	pagePath: "/turning-chaos-into-control-with-cloudflare",
	keywords: [
		"Cloudflare",
		"Infrastructure",
		"DevOps",
		"Scalability",
		"Control",
		"Chaos Engineering",
	],
	pdfUrl:
		"https://mradib.com/talks/2025-09-24-turning-chaos-into-control-with-cloudflare.pdf",
};

// set publish date and time
article.datePublished = `${article.publishDate}T${article.publishTime}.000Z`;
article.dateModified = "2025-09-24" + "T" + "10:00:00" + ".000Z";

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
			coverImage={imgCover}
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
				"Turning Chaos into Control with Cloudflare" is a comprehensive talk
				about transforming chaotic infrastructure into a controlled, scalable
				system. This presentation covers how to leverage Cloudflare's powerful
				tools and services to build resilient, performant applications that can
				handle traffic spikes, security threats, and global distribution
				challenges with confidence.
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
