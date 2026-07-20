import type { LanguageLocale } from "@/lib/languages/locale";
import {
	type IFrameworkSection,
	resumeFramework,
	resumeGuideUrl,
	totalPoints,
} from "./framework";

interface ISkillCopy {
	name: string;
	description: string;
	heading: string;
	role: string;
	workflowHeading: string;
	workflow: string[];
	rulesHeading: string;
	pts: string;
	doLabel: string;
	avoidLabel: string;
	scoringHeading: string;
	scoring: string;
	sourceLabel: string;
}

const copy: Record<LanguageLocale, ISkillCopy> = {
	"en-US": {
		name: "resume-writer",
		description:
			"Write, rewrite, or review a resume with the MrAdib method by John Adib. Use when drafting a CV, tailoring it to a job posting, turning duties into achievements, or scoring a resume out of 100.",
		heading: "# Resume Writer (the MrAdib method)",
		role: "You help a person write or improve their resume so it earns interviews. Follow the method below; it is weighted by real hiring impact.",
		workflowHeading: "## Workflow",
		workflow: [
			"1. Ask for their current resume (or their raw details) and the target job posting.",
			"2. Draft or rewrite one section at a time, applying every rule for that section.",
			"3. Make each experience bullet an achievement with a number where possible, opened by a strong, varied action verb.",
			"4. Tailor the wording and keywords to the posting so it passes ATS screening.",
			"5. Score the result out of 100, list what still loses points, and fix the highest-impact items first.",
		],
		rulesHeading: "## Rules by section",
		pts: "pts",
		doLabel: "Do",
		avoidLabel: "Avoid",
		scoringHeading: "## Scoring",
		scoring: `Weight each section by its points; a resume totals ${totalPoints}. Report the score, then the fixes.`,
		sourceLabel: "Source and full guide",
	},
	"fa-IR": {
		name: "resume-writer-fa",
		description:
			"نوشتن، بازنویسی یا بازبینی رزومه با روش MrAdib از جان ادیب. برای ساخت رزومه، تطبیق با آگهی شغلی، تبدیل وظایف به دستاورد، یا امتیازدهی رزومه از ۱۰۰.",
		heading: "# نویسنده رزومه (روش MrAdib)",
		role: "به یک نفر کمک می‌کنی رزومه‌اش را طوری بنویسد یا بهتر کند که دعوت به مصاحبه بگیرد. روش زیر را دنبال کن؛ بر پایه تاثیر واقعی در استخدام وزن‌دهی شده است.",
		workflowHeading: "## روند کار",
		workflow: [
			"۱. رزومه فعلی (یا اطلاعات خام) و آگهی شغلی هدف را بخواه.",
			"۲. هر بار یک بخش را بنویس یا بازنویسی کن و همه قوانین آن بخش را اعمال کن.",
			"۳. هر آیتم تجربه کاری را به یک دستاورد با عدد تبدیل کن و با یک فعل اکشن قوی و متنوع شروع کن.",
			"۴. واژه‌ها و کلیدواژه‌ها را با آگهی تطبیق بده تا از فیلتر ATS رد شود.",
			"۵. نتیجه را از ۱۰۰ امتیاز بده، بگو کجا امتیاز از دست می‌رود و مهم‌ترین‌ها را اول درست کن.",
		],
		rulesHeading: "## قوانین هر بخش",
		pts: "امتیاز",
		doLabel: "انجام بده",
		avoidLabel: "پرهیز کن",
		scoringHeading: "## امتیازدهی",
		scoring: `هر بخش را با امتیازش وزن بده؛ کل رزومه ${totalPoints} امتیاز است. اول امتیاز، بعد اصلاح‌ها را گزارش کن.`,
		sourceLabel: "منبع و راهنمای کامل",
	},
};

function renderSection(section: IFrameworkSection, c: ISkillCopy): string {
	const head = `### ${section.title} (${section.points} ${c.pts})`;
	const rules = section.rules.map(
		(r) => `- ${c.doLabel}: ${r.fix} ${c.avoidLabel}: ${r.avoid}`,
	);
	return [head, ...rules].join("\n");
}

export function buildResumeSkill(locale: LanguageLocale): string {
	const c = copy[locale];
	const front = [
		"---",
		`name: ${c.name}`,
		`description: ${c.description}`,
		"---",
	];
	const rulesBlock = resumeFramework(locale)
		.map((s) => renderSection(s, c))
		.join("\n\n");
	const body = [
		c.heading,
		"",
		c.role,
		"",
		c.workflowHeading,
		...c.workflow,
		"",
		c.rulesHeading,
		"",
		rulesBlock,
		"",
		c.scoringHeading,
		c.scoring,
		"",
		`${c.sourceLabel}: ${resumeGuideUrl(locale)}`,
	];
	return `${[...front, "", ...body].join("\n")}\n`;
}
