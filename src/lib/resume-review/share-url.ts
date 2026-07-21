import { encodeReview } from "@/data/resume-checklist/share";
import { homepageUrl } from "@/lib/constants/url";
import type { LanguageLocale } from "@/lib/languages/locale";

/** Route of the scorecard result page for a locale. Apex domain, so no basePath. */
export function checklistPath(locale: LanguageLocale): string {
	return locale === "fa-IR" ? "/fa/resume/checklist" : "/resume/checklist";
}

/** Route of the reviewer builder for a locale, where a review is put together. */
export function reviewPath(locale: LanguageLocale): string {
	return locale === "fa-IR" ? "/fa/resume/review" : "/resume/review";
}

/** Route of the human resume guide for a locale. */
export function guidePath(locale: LanguageLocale): string {
	return locale === "fa-IR" ? "/fa/resume" : "/resume";
}

function reviewParams(review: Record<string, number>, name?: string): string {
	const params = new URLSearchParams();
	params.set("issues", encodeReview(review));
	const trimmed = name?.trim();
	if (trimmed) {
		params.set("name", trimmed);
	}
	return params.toString();
}

/**
 * Absolute share link for a review. Each graded item rides along as slug+grade,
 * so the link carries what was reviewed. The `issues` param is always present so
 * the link opens the result view. An optional name personalizes the first view.
 */
export function shareUrl(
	locale: LanguageLocale,
	review: Record<string, number>,
	name?: string,
): string {
	return `${homepageUrl}${checklistPath(locale)}?${reviewParams(review, name)}`;
}

/** Same target as the share link, but relative, for opening a preview in a new
 * tab on the current origin. */
export function previewUrl(
	locale: LanguageLocale,
	review: Record<string, number>,
	name?: string,
): string {
	return `${checklistPath(locale)}?${reviewParams(review, name)}`;
}
