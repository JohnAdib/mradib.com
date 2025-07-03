import { ArticleLayout } from "@/components/article/layout";
import { Button } from "@/components/button";
import type { Metadata } from "next";
import type { IArticle } from "../i-article-interface";
import imgCover from "./_img/cover.webp";

export const article: IArticle = {
	author: "John Adib",
	publishDate: "2025-07-03",
	publishTime: "10:17:00",
	datePublished: "",
	dateModified: "",
	title: "Design Systems, AI, and the Art of Separation of Concern",
	description:
		"Learn 7 practical tips to build scalable, maintainable architectures that empower teams and AI tools alike",
	pageTitle: "Design Systems, AI, and the Art of Separation of Concern",
	pageDesc:
		"Learn 7 practical tips to build scalable, maintainable architectures that empower teams and AI tools alike",
	pagePath: "/design-systems-ai-and-the-art-of-separation-of-concern",
	keywords: [
		"Design Systems",
		"AI",
		"Separation of Concern",
		"Figma",
		"React",
		"React Advanced London",
	],
};

// set publish date and time
article.datePublished = `${article.publishDate}T${article.publishTime}.000Z`;
article.dateModified = "2025-07-03" + "T" + "10:37:00" + ".000Z";

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
				urlPath={""}
				keywords={[]}
				coverImage={imgCover}
				dateModified={""}
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
	const pdfLink: string =
		"https://resume.mradib.com/pdf/MrAdib-Resume-v1550.pdf";
	return (
		<div className="flex justify-center">
			<Button variant="primary" href={pdfLink}>
				Download PDF
			</Button>
		</div>
	);
}
