import { checklistItems } from "./checklist-items";

export type IssueSeverity = 1 | 2;
/** A review: each flagged item mapped to orange (1) or red (2). Green omitted. */
export type ReviewMap = Record<string, IssueSeverity>;

/**
 * Share codec for a review. Each non-green item travels as its slug followed by
 * a severity digit (1 = some issue, 2 = a problem); green items are dropped so
 * links stay short. Tokens are dot joined in canonical item order, so the same
 * review always yields the same string. Slugs never end in a digit, so the last
 * character is unambiguously the severity. Unknown slugs or bad digits are
 * dropped, so old links degrade to whatever still exists.
 */
const SEPARATOR = ".";
const knownSlugs = new Set(checklistItems.map((item) => item.slug));

export function encodeReview(review: Record<string, number>): string {
	return checklistItems
		.filter((item) => review[item.slug] === 1 || review[item.slug] === 2)
		.map((item) => `${item.slug}${review[item.slug]}`)
		.join(SEPARATOR);
}

export function decodeReview(param: string | null | undefined): ReviewMap {
	const out: ReviewMap = {};
	if (!param) {
		return out;
	}
	for (const token of param.split(SEPARATOR)) {
		const trimmed = token.trim();
		const digit = trimmed.slice(-1);
		const slug = trimmed.slice(0, -1);
		if (knownSlugs.has(slug) && (digit === "1" || digit === "2")) {
			out[slug] = digit === "2" ? 2 : 1;
		}
	}
	return out;
}
