import { checklistItems } from "./checklist-items";

/**
 * A review: each graded item mapped to a grade code. 1 = needs work, 2 = problem,
 * 3 = great, 4 = N/A. Good (0) is the default and never stored.
 */
export type ReviewMap = Record<string, number>;

/**
 * Share codec for a review. Each non-good item travels as its slug followed by a
 * grade digit (1-4); good items are dropped so links stay short. Tokens are dot
 * joined in canonical item order, so the same review always yields the same
 * string. Slugs never end in a digit, so the last character is unambiguously the
 * grade. Unknown slugs or bad digits are dropped, so old links degrade to
 * whatever still exists (1 and 2 keep their meaning from earlier links).
 */
const SEPARATOR = ".";
const knownSlugs = new Set(checklistItems.map((item) => item.slug));
const gradeCodes = new Set([1, 2, 3, 4]);

export function encodeReview(review: Record<string, number>): string {
	return checklistItems
		.filter((item) => gradeCodes.has(review[item.slug]))
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
		const code = Number(trimmed.slice(-1));
		const slug = trimmed.slice(0, -1);
		if (knownSlugs.has(slug) && gradeCodes.has(code)) {
			out[slug] = code;
		}
	}
	return out;
}
