import type { Metadata } from "next";
import type { JSX } from "react";
import { ArticleLayout } from "@/components/article/layout";
import { ArticleToc } from "@/components/toc/article-toc";
import { separator } from "@/lib/constants/en";
import { myNameFa } from "@/lib/constants/fa";
import { pageAlternates } from "@/lib/i18n/page-alternates";
import { pageResumeSuffix } from "@/lib/suffix";
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
import { resumeTemplateFaq } from "./faq";
import coverImg from "./opengraph-image.jpg";
import {
	checklistIdsBySection,
	resumeChecklistStorageKey,
} from "./resume-checklist-data";
import { ResumeReferences } from "./resume-references";
import { tocSections } from "./resume-sections";

const publishDate = "2024-04-08";
const publishTime = "02:53:24";
const datePublished = `${publishDate}T${publishTime}.000Z`;
const dateModified = "2026-07-18" + "T" + "19:04:00" + ".000Z";
const articleTitle = "بهترین آموزش ساخت رزومه";
const articleDescription =
	"قصد دارید رزومه بسازید و برای شغلی اپلای کنید؟ صفر تا صد ساخت رزومه رو اینجا بخونید تا یک رزومه حرفه‌ای بسازید. این بهترین و کامل‌ترین و جامع‌ترین آموزش ساخت رزومه در کهکشان است!";
const pageTitle = `آموزش ساخت رزومه${pageResumeSuffix}`;
const pageDesc = "وقتشه رزومه خفن خودت رو بسازی. آموزش صفر تا صد ساخت رزومه";
const pagePath = "/fa/resume";
const keywords = [
	"رزومه کاری",
	"رزومه",
	"رزومه فارسی",
	"رزومه انگلیسی",
	"رزومه کاری نمونه",
	"قالب رزومه",
	"تمپلیت رزومه",
	"دانلود رزومه",
	"نوشتن رزومه",
	"فرم خام رزومه",
	"دانلود رایگان رزومه",
	"ساخت رزومه انگلیسی",
	"نمونه رزومه",
	"تجربه کاری",
	"تعداد صفحات رزومه",
];

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDesc + separator + myNameFa,
	alternates: pageAlternates("/fa/resume"),
	openGraph: {
		type: "article",
		publishedTime: datePublished,
	},
	twitter: {
		card: "summary_large_image",
	},
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
	const content = PageContent();
	const readTimeMinutes = 30;
	return (
		<ArticleLayout
			title={articleTitle}
			intro={articleDescription}
			urlPath={pagePath}
			keywords={keywords}
			coverImage={coverImg}
			datePublished={datePublished}
			dateModified={dateModified}
			readTimeMinutes={readTimeMinutes}
			faq={resumeTemplateFaq}
			breadcrumb={breadcrumb}
			aside={
				<ArticleToc
					variant="sidebar"
					sections={tocSections}
					storageKey={resumeChecklistStorageKey}
					checklistIdsBySection={checklistIdsBySection}
				/>
			}
			lang="fa-IR"
		>
			{content}
		</ArticleLayout>
	);
}
