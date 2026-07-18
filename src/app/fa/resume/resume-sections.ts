import type { ITocSection } from "@/components/toc/interface";

export const resumeSections = [
	{ id: "template", title: "قالب رزومه", hasChecklist: true },
	{ id: "contact", title: "اطلاعات تماس", hasChecklist: true },
	{ id: "summary", title: "بخش خلاصه", hasChecklist: true },
	{ id: "experience", title: "بخش تجربه کاری", hasChecklist: true },
	{ id: "skills", title: "مهارت‌ها", hasChecklist: true },
	{ id: "education", title: "بخش تحصیلات", hasChecklist: true },
	{ id: "optional", title: "بخش‌های اختیاری", hasChecklist: true },
	{ id: "length", title: "تعداد صفحات رزومه", hasChecklist: true },
	{ id: "ats", title: "ATS سیستم ردیابی متقاضی", hasChecklist: true },
	{ id: "action-verbs", title: "افعال اکشن", hasChecklist: true },
	{ id: "checklist", title: "چک لیست نهایی", hasChecklist: false },
	{ id: "references", title: "منابع", hasChecklist: false },
	{ id: "cover-letter", title: "کاورلتر", hasChecklist: false },
] as const;

export type ResumeSectionId = (typeof resumeSections)[number]["id"];

export interface IResumeSection {
	id: ResumeSectionId;
	title: string;
	hasChecklist: boolean;
}

export const tocSections: ITocSection[] = resumeSections.map((section) => ({
	id: section.id,
	title: section.title,
}));
