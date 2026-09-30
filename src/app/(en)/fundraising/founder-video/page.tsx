import type { Metadata } from "next";
import { GuideAiPrompt } from "@/components/guide/ai/guide-ai-prompt";
import { GuideClosing } from "@/components/guide/closing/guide-closing";
import { GuideFaq } from "@/components/guide/faq/guide-faq";
import { GuideHero } from "@/components/guide/hero/guide-hero";
import { GuideKit } from "@/components/guide/kit/guide-kit";
import { GuideOverview } from "@/components/guide/overview/guide-overview";
import { GuideReferences } from "@/components/guide/references/guide-references";
import { GuideRules } from "@/components/guide/rules/guide-rules";
import { GuideJsonLd } from "@/components/guide/seo/guide-json-ld";
import { RevealFallback } from "@/components/guide/shell/reveal-fallback";
import { GuideSteps } from "@/components/guide/steps/guide-steps";
import { founderVideoGuide as guide } from "@/data/founder-video";
import { kitCopy } from "@/data/guides/kit-copy";
import { ogMetadata } from "@/lib/og-metadata";

export const metadata: Metadata = {
	title: guide.article.pageTitle,
	description: guide.article.pageDesc,
	...ogMetadata(guide.article.pagePath, {
		publishedTime: guide.article.datePublished,
	}),
};

// Composition only. Each part takes the guide and owns its anchor, copy, and
// reveal, so the page reads in order: move a line to reorder, delete a line
// to drop a part.
export default function Page() {
	return (
		<>
			<RevealFallback />
			<GuideJsonLd guide={guide} />
			<GuideHero guide={guide} />
			<GuideOverview guide={guide} />
			<GuideSteps guide={guide} />
			<GuideRules guide={guide} />
			<GuideAiPrompt guide={guide} />
			<GuideReferences guide={guide} />
			<GuideFaq guide={guide} />
			<GuideKit
				id={guide.anchors.kit}
				heading={kitCopy.heading}
				current={guide.article.pagePath}
			/>
			<GuideClosing guide={guide} />
		</>
	);
}
