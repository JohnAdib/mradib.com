import type { LanguageLocale } from "@/lib/languages/locale";

/** The handful of UI strings for the scorecard, resolved once per locale. */
export interface IScorecardCopy {
	locale: LanguageLocale;
	guideCta: string;
	builderTitle: string;
	builderIntro: string;
	namePlaceholder: string;
	legendHint: string;
	legendGood: string;
	legendSome: string;
	legendProblem: string;
	projectedLabel: string;
	copyLink: string;
	copied: string;
	previewCta: string;
	backToEditing: string;
	clear: string;
	flaggedCount: (n: number) => string;
	resultKicker: string;
	resultGreeting: (name: string) => string;
	resultGreetingSub: string;
	scoreCaptionNone: string;
	scoreCaptionSome: (n: number) => string;
	sectionsTitle: string;
	issuesTitle: string;
	markFixed: string;
	fixed: string;
	fixedProgress: (done: number, total: number) => string;
	allFixed: string;
	startOwn: string;
}

const en: IScorecardCopy = {
	locale: "en-US",
	guideCta: "Read the full guide",
	builderTitle: "Review a CV",
	builderIntro:
		"Tap each item to grade it, green for good, orange for a small issue, red for a real problem. Then send them the link.",
	namePlaceholder: "Whose CV is this? (optional)",
	legendHint: "Tap an item to cycle its state",
	legendGood: "Good",
	legendSome: "Some issue",
	legendProblem: "Problem",
	projectedLabel: "Their score",
	copyLink: "Copy review link",
	copied: "Link copied",
	previewCta: "Preview what they see",
	backToEditing: "Back to editing",
	clear: "Clear all",
	flaggedCount: (n) => (n === 1 ? "1 issue flagged" : `${n} issues flagged`),
	resultKicker: "Resume scorecard",
	resultGreeting: (name) => `Hi ${name},`,
	resultGreetingSub: "here's your resume scorecard.",
	scoreCaptionNone: "No issues flagged. This resume is looking sharp.",
	scoreCaptionSome: (n) =>
		n === 1
			? "One fix to raise your score."
			: `${n} fixes to raise your score.`,
	sectionsTitle: "By section",
	issuesTitle: "What to fix",
	markFixed: "Mark as fixed",
	fixed: "Fixed",
	fixedProgress: (done, total) => `${done} of ${total} fixed`,
	allFixed: "Every issue fixed. Nice work.",
	startOwn: "Review a CV yourself",
};

const fa: IScorecardCopy = {
	locale: "fa-IR",
	guideCta: "راهنمای کامل رو بخون",
	builderTitle: "بررسی رزومه",
	builderIntro:
		"روی هر مورد بزن و نمره بده؛ سبز یعنی خوبه، نارنجی یعنی یه مشکل کوچیک، قرمز یعنی مشکل جدی. بعد لینک رو براشون بفرست.",
	namePlaceholder: "رزومه‌ی کیه؟ (اختیاری)",
	legendHint: "برای تغییر وضعیت، روی هر مورد بزن",
	legendGood: "خوبه",
	legendSome: "یه مشکل",
	legendProblem: "مشکل جدی",
	projectedLabel: "امتیاز طرف",
	copyLink: "کپی لینک بررسی",
	copied: "لینک کپی شد",
	previewCta: "ببین طرف چی می‌بینه",
	backToEditing: "برگرد به ویرایش",
	clear: "پاک کردن همه",
	flaggedCount: (n) => `${n.toLocaleString("fa-IR")} مورد علامت خورده`,
	resultKicker: "کارنامه رزومه",
	resultGreeting: (name) => `سلام ${name}،`,
	resultGreetingSub: "این کارنامه‌ی رزومه‌ته.",
	scoreCaptionNone: "هیچ مشکلی علامت نخورده. رزومه‌ت حسابی مرتبه.",
	scoreCaptionSome: (n) =>
		`${n.toLocaleString("fa-IR")} مورد برای بهتر شدن امتیازت مونده.`,
	sectionsTitle: "بر اساس بخش",
	issuesTitle: "چی رو درست کنیم",
	markFixed: "درستش کردم",
	fixed: "درست شد",
	fixedProgress: (done, total) =>
		`${done.toLocaleString("fa-IR")} از ${total.toLocaleString("fa-IR")} درست شد`,
	allFixed: "همه‌ی موارد درست شد. آفرین!",
	startOwn: "خودت یک رزومه بررسی کن",
};

export function scorecardCopy(locale: LanguageLocale): IScorecardCopy {
	return locale === "fa-IR" ? fa : en;
}
