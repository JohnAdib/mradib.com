import { groupsFor, totalPoints } from "@/data/resume-checklist";
import { homepageUrl } from "@/lib/constants/url";
import type { LanguageLocale } from "@/lib/languages/locale";

// The single source for the AI-facing resume method. Both the llms.txt and the
// portable skill render from here, so the advice never gets stated twice: it
// all traces back to src/data/resume-checklist.

export interface IFrameworkRule {
	title: string;
	avoid: string;
	fix: string;
	points: number;
}

export interface IFrameworkSection {
	id: string;
	title: string;
	guideHref: string;
	points: number;
	rules: IFrameworkRule[];
}

/** Absolute URL of the human guide for this locale. */
export function resumeGuideUrl(locale: LanguageLocale): string {
	return locale === "fa-IR"
		? `${homepageUrl}/fa/resume`
		: `${homepageUrl}/resume`;
}

/** The method as ordered sections and weighted rules, localized. */
export function resumeFramework(locale: LanguageLocale): IFrameworkSection[] {
	return groupsFor(locale).map((group) => ({
		id: group.id,
		title: group.title,
		guideHref: `${homepageUrl}${group.guideHref}`,
		points: group.points,
		rules: group.items.map((item) => ({
			title: item.title,
			avoid: item.problem,
			fix: item.fix,
			points: item.points,
		})),
	}));
}

export { totalPoints };
