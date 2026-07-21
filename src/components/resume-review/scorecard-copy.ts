import type { LanguageLocale } from "@/lib/languages/locale";

/** The handful of UI strings for the scorecard, resolved once per locale. */
export interface IScorecardCopy {
	locale: LanguageLocale;
	guideCta: string;
	builderTitle: string;
	namePlaceholder: string;
	gradeGood: string;
	gradeNeedsWork: string;
	gradeProblem: string;
	gradeNa: string;
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
	clearTitle: string;
	clearBody: string;
	clearConfirm: string;
	clearCancel: string;
	emptyTitle: string;
	emptyBody: string;
	emptyCta: string;
}

const en: IScorecardCopy = {
	locale: "en-US",
	guideCta: "Read the full guide",
	builderTitle: "Review a CV",
	namePlaceholder: "Whose CV is this? (optional)",
	gradeGood: "Good",
	gradeNeedsWork: "Needs work",
	gradeProblem: "Problem",
	gradeNa: "N/A",
	projectedLabel: "Their score",
	copyLink: "Copy review link",
	copied: "Link copied",
	previewCta: "Preview",
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
	clearTitle: "Clear this review?",
	clearBody: "This removes every grade you have set. It cannot be undone.",
	clearConfirm: "Clear all",
	clearCancel: "Keep it",
	emptyTitle: "No review to show yet",
	emptyBody:
		"Open a review link to see the scorecard, or review a CV yourself.",
	emptyCta: "Review a CV",
};

const fa: IScorecardCopy = {
	locale: "fa-IR",
	guideCta: "راهنمای کامل رو بخون",
	builderTitle: "بررسی رزومه",
	namePlaceholder: "رزومه‌ی کیه؟ (اختیاری)",
	gradeGood: "خوب",
	gradeNeedsWork: "نیاز به کار",
	gradeProblem: "مشکل",
	gradeNa: "نامرتبط",
	projectedLabel: "امتیاز طرف",
	copyLink: "کپی لینک بررسی",
	copied: "لینک کپی شد",
	previewCta: "پیش‌نمایش",
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
	clearTitle: "این بررسی پاک بشه؟",
	clearBody: "همه‌ی نمره‌هایی که دادی حذف می‌شه. این کار برگشت‌پذیر نیست.",
	clearConfirm: "پاک کردن همه",
	clearCancel: "بمونه",
	emptyTitle: "هنوز بررسی‌ای برای نمایش نیست",
	emptyBody:
		"یک لینک بررسی باز کن تا کارنامه رو ببینی، یا خودت یک رزومه بررسی کن.",
	emptyCta: "بررسی رزومه",
};

export function scorecardCopy(locale: LanguageLocale): IScorecardCopy {
	return locale === "fa-IR" ? fa : en;
}
