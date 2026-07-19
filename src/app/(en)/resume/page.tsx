import type { Metadata } from "next";
import type { JSX } from "react";
import { ArticleLayout } from "@/components/article/layout";
import { ArticleToc } from "@/components/toc/article-toc";
import { articleResume as article } from "@/data/articles/resume";
import { pageAlternates } from "@/lib/i18n/page-alternates";
import { ogMetadata } from "@/lib/og-metadata";
import { SectionActionVerbs } from "./_sections/action-verbs";
import { SectionAts } from "./_sections/ats";
import { SectionContact } from "./_sections/contact";
import { SectionEducation } from "./_sections/education";
import { SectionExperience } from "./_sections/experience";
import { SectionFinalChecklist } from "./_sections/final-checklist";
import { SectionIntro } from "./_sections/intro";
import { SectionLength } from "./_sections/length";
import { SectionOptional } from "./_sections/optional";
import { SectionOutro } from "./_sections/outro";
import { SectionSkills } from "./_sections/skills";
import { SectionSummary } from "./_sections/summary";
import { SectionTemplate } from "./_sections/template";
import { breadcrumb } from "./breadcrumb";
import coverImg from "./cover.jpg";
import { resumeTemplateFaq } from "./faq";
import {
	checklistIdsBySection,
	resumeChecklistStorageKey,
} from "./resume-checklist-data";
import { ResumeReferences } from "./resume-references";
import { tocSections } from "./resume-sections";

export const metadata: Metadata = {
	title: article.pageTitle,
	description: article.pageDesc,
	alternates: pageAlternates("/resume"),
	...ogMetadata(article.pagePath, { publishedTime: article.datePublished }),
};

function PageContent(): JSX.Element {
	return (
		<section>
			{SectionIntro()}
			{SectionTemplate()}
			{SectionContact()}
			{SectionSummary()}
			{SectionExperience()}
			{SectionSkills()}
			{SectionEducation()}
			{SectionOptional()}
			{SectionLength()}
			{SectionAts()}
			{SectionActionVerbs()}
			{SectionFinalChecklist()}
			<ResumeReferences />
			{SectionOutro()}
		</section>
	);
}

export default function Page() {
	const readTimeMinutes = 30;
	return (
		<ArticleLayout
			title={article.title}
			intro={article.description}
			urlPath={article.pagePath}
			keywords={article.keywords}
			coverImage={coverImg}
			datePublished={article.datePublished}
			dateModified={article.dateModified}
			readTimeMinutes={readTimeMinutes}
			faq={resumeTemplateFaq}
			breadcrumb={breadcrumb}
			aside={
				<ArticleToc
					variant="sidebar"
					sections={tocSections}
					storageKey={resumeChecklistStorageKey}
					checklistIdsBySection={checklistIdsBySection}
					label="Table of Contents"
					locale="en-US"
				/>
			}
			lang="en-US"
		>
			{PageContent()}
		</ArticleLayout>
	);
}
