import type { Metadata } from "next";
import { ArticleLayout } from "@/components/article/layout";
import { Button } from "@/components/button";
import { TalkMeta } from "@/components/talk/talk-meta";
import { articleAiFirstArchitecture as article } from "@/data/articles/ai-first-architecture";
import { getTalk } from "@/data/talks/get-talk";
import imgCover from "./opengraph-image.png";

const talk = getTalk("ai-first-architecture");

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
			<TalkMeta talk={talk} />
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
