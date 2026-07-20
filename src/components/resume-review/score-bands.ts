import type { LanguageLocale } from "@/lib/languages/locale";

export type ScoreTone = "danger" | "warn" | "pass" | "good" | "great";

interface IScoreBand {
	min: number;
	tone: ScoreTone;
	en: string;
	fa: string;
}

// Highest threshold first. Teal carries the passing range; amber and rose flag
// the two lower bands. Final palette is settled in the screenshot critique.
const BANDS: IScoreBand[] = [
	{ min: 95, tone: "great", en: "Excellent", fa: "عالیه" },
	{ min: 85, tone: "good", en: "Strong", fa: "خیلی خوبه" },
	{ min: 70, tone: "pass", en: "Solid", fa: "خوبه" },
	{ min: 50, tone: "warn", en: "Getting there", fa: "در حال پیشرفت" },
	{ min: 0, tone: "danger", en: "Needs work", fa: "نیاز به کار داره" },
];

function bandForScore(score: number): IScoreBand {
	for (const band of BANDS) {
		if (score >= band.min) {
			return band;
		}
	}
	return BANDS[BANDS.length - 1];
}

export function toneForScore(score: number): ScoreTone {
	return bandForScore(score).tone;
}

export function bandLabel(score: number, locale: LanguageLocale): string {
	const band = bandForScore(score);
	return locale === "fa-IR" ? band.fa : band.en;
}

export interface IToneClasses {
	stroke: string;
	text: string;
	bar: string;
	soft: string;
}

export function toneClasses(tone: ScoreTone): IToneClasses {
	if (tone === "warn") {
		return {
			stroke: "stroke-amber-500",
			text: "text-amber-600 dark:text-amber-400",
			bar: "bg-amber-500",
			soft: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
		};
	}
	if (tone === "danger") {
		return {
			stroke: "stroke-rose-500",
			text: "text-rose-600 dark:text-rose-400",
			bar: "bg-rose-500",
			soft: "bg-rose-500/10 text-rose-700 dark:text-rose-300",
		};
	}
	return {
		stroke: "stroke-accent-500",
		text: "text-accent-600 dark:text-accent-400",
		bar: "bg-accent-500",
		soft: "bg-accent-500/10 text-accent-700 dark:text-accent-300",
	};
}
