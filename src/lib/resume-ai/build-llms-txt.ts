import { homepageUrl } from "@/lib/constants/url";
import type { LanguageLocale } from "@/lib/languages/locale";
import {
	type IFrameworkSection,
	resumeFramework,
	resumeGuideUrl,
	totalPoints,
} from "./framework";

interface ILlmsCopy {
	title: string;
	summary: string;
	guideLabel: string;
	scoreLabel: string;
	skillLabel: string;
	howHeading: string;
	how: string[];
	guideLine: string;
	pts: string;
	doLabel: string;
	avoidLabel: string;
}

const copy: Record<LanguageLocale, ILlmsCopy> = {
	"en-US": {
		title: "How to write a great resume: the MrAdib method",
		summary: `A machine-readable resume-writing framework by John Adib (MrAdib): ${totalPoints} points of impact across the sections below. Use it to draft, rewrite, review, or score any resume.`,
		guideLabel: "Human guide",
		scoreLabel: "Score a resume out of 100",
		skillLabel: "Portable skill for AI tools",
		howHeading: "## How to use this",
		how: [
			"- Work through the sections in order. Together they are the whole resume.",
			'- For every rule, do the "Do" and never the "Avoid".',
			`- Points mark impact, so spend effort where the points are. A resume scores out of ${totalPoints}.`,
		],
		guideLine: "Guide",
		pts: "pts",
		doLabel: "Do",
		avoidLabel: "Avoid",
	},
	"fa-IR": {
		title: "چطور یک رزومه عالی بنویسیم: روش MrAdib",
		summary: `یک چارچوب ماشین‌خوان برای نوشتن رزومه از جان ادیب (MrAdib): ${totalPoints} امتیاز تاثیرگذاری در بخش‌های زیر. برای نوشتن، بازنویسی، بازبینی یا امتیازدهی هر رزومه از آن استفاده کن.`,
		guideLabel: "راهنمای انسانی",
		scoreLabel: "امتیازدهی رزومه از ۱۰۰",
		skillLabel: "اسکیل قابل حمل برای ابزارهای هوش مصنوعی",
		howHeading: "## روش استفاده",
		how: [
			"- بخش‌ها را به ترتیب پیش ببر. کنار هم کل رزومه را می‌سازند.",
			"- برای هر قانون، «انجام بده» را انجام بده و هرگز «پرهیز کن» را نه.",
			`- امتیازها نشانه تاثیرند، پس انرژی را جایی بگذار که امتیاز بیشتر است. رزومه از ${totalPoints} امتیاز گرفته می‌شود.`,
		],
		guideLine: "راهنما",
		pts: "امتیاز",
		doLabel: "انجام بده",
		avoidLabel: "پرهیز کن",
	},
};

function renderSection(section: IFrameworkSection, c: ILlmsCopy): string {
	const head = `## ${section.title} (${section.points} ${c.pts})`;
	const guide = `${c.guideLine}: ${section.guideHref}`;
	const rules = section.rules.map(
		(r) =>
			`- ${r.title} (${r.points} ${c.pts}). ${c.doLabel}: ${r.fix} ${c.avoidLabel}: ${r.avoid}`,
	);
	return [head, guide, ...rules].join("\n");
}

export function buildResumeLlmsTxt(locale: LanguageLocale): string {
	const c = copy[locale];
	const guideUrl = resumeGuideUrl(locale);
	const header = [
		`# ${c.title}`,
		"",
		`> ${c.summary}`,
		"",
		`${c.guideLabel}: ${guideUrl}`,
		`${c.scoreLabel}: ${guideUrl}/checklist`,
		`${c.skillLabel}: ${homepageUrl}${locale === "fa-IR" ? "/fa" : ""}/resume/skill.md`,
		"",
		c.howHeading,
		"",
		...c.how,
	].join("\n");
	const sections = resumeFramework(locale).map((s) => renderSection(s, c));
	return `${[header, ...sections].join("\n\n")}\n`;
}
