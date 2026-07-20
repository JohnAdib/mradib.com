import { encodeIssues } from "@/data/resume-checklist/share";
import { homepageUrl } from "@/lib/constants/url";
import type { LanguageLocale } from "@/lib/languages/locale";

/** Route of the scorecard page for a locale. Apex domain, so no basePath. */
export function checklistPath(locale: LanguageLocale): string {
	return locale === "fa-IR" ? "/fa/resume/checklist" : "/resume/checklist";
}

/**
 * Absolute share link for a set of flagged issues. Always carries the `issues`
 * param, even when empty, so the link opens the result view (a clean CV reads
 * as a full score). An optional name personalizes the recipient's first view.
 */
export function shareUrl(
	locale: LanguageLocale,
	flagged: Iterable<string>,
	name?: string,
): string {
	const params = new URLSearchParams();
	params.set("issues", encodeIssues(flagged));
	const trimmed = name?.trim();
	if (trimmed) {
		params.set("name", trimmed);
	}
	return `${homepageUrl}${checklistPath(locale)}?${params.toString()}`;
}
