import { encodeReview } from "@/data/resume-checklist/share";
import { homepageUrl } from "@/lib/constants/url";
import type { LanguageLocale } from "@/lib/languages/locale";

/** Route of the scorecard page for a locale. Apex domain, so no basePath. */
export function checklistPath(locale: LanguageLocale): string {
	return locale === "fa-IR" ? "/fa/resume/checklist" : "/resume/checklist";
}

/**
 * Absolute share link for a review. Only non-green items ride along (as
 * slug+severity), so a mostly-good CV yields a short link. The `issues` param is
 * always present, even when empty, so the link opens the result view. An
 * optional name personalizes the recipient's first view.
 */
export function shareUrl(
	locale: LanguageLocale,
	review: Record<string, number>,
	name?: string,
): string {
	const params = new URLSearchParams();
	params.set("issues", encodeReview(review));
	const trimmed = name?.trim();
	if (trimmed) {
		params.set("name", trimmed);
	}
	return `${homepageUrl}${checklistPath(locale)}?${params.toString()}`;
}
