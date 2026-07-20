import type { LanguageLocale } from "@/lib/languages/locale";

/** The handful of UI strings for the scorecard, resolved once per locale. */
export interface IScorecardCopy {
	locale: LanguageLocale;
	guideCta: string;
	builderTitle: string;
	builderIntro: string;
	projectedLabel: string;
	copyLink: string;
	copied: string;
	previewCta: string;
	backToEditing: string;
	clear: string;
	flaggedCount: (n: number) => string;
	resultKicker: string;
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
		"Tap each problem you spot. Then copy the link and send it to them.",
	projectedLabel: "Their score",
	copyLink: "Copy review link",
	copied: "Link copied",
	previewCta: "Preview what they see",
	backToEditing: "Back to editing",
	clear: "Clear all",
	flaggedCount: (n) => (n === 1 ? "1 issue flagged" : `${n} issues flagged`),
	resultKicker: "Resume scorecard",
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
		"هر مشکلی که تو رزومه می‌بینی رو بزن، بعد لینک رو کپی کن و براشون بفرست.",
	projectedLabel: "امتیاز طرف",
	copyLink: "کپی لینک بررسی",
	copied: "لینک کپی شد",
	previewCta: "ببین طرف چی می‌بینه",
	backToEditing: "برگرد به ویرایش",
	clear: "پاک کردن همه",
	flaggedCount: (n) => `${n.toLocaleString("fa-IR")} مورد علامت خورده`,
	resultKicker: "کارنامه رزومه",
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
