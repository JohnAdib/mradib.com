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
 * as a full score) rather than the builder.
 */
export function shareUrl(
	locale: LanguageLocale,
	flagged: Iterable<string>,
): string {
	return `${homepageUrl}${checklistPath(locale)}?issues=${encodeIssues(flagged)}`;
}
