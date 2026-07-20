import { checklistItems } from "./checklist-items";

/**
 * Share codec for the flagged issues. The set of slugs travels in a single URL
 * param, dot joined, always in canonical item order so the same review yields
 * the same link. Unknown slugs (from a renamed or removed item) are dropped so
 * old links degrade to whatever still exists.
 */
const SEPARATOR = ".";
const knownSlugs = new Set(checklistItems.map((item) => item.slug));

export function encodeIssues(slugs: Iterable<string>): string {
	const flagged = new Set(slugs);
	return checklistItems
		.filter((item) => flagged.has(item.slug))
		.map((item) => item.slug)
		.join(SEPARATOR);
}

export function decodeIssues(param: string | null | undefined): string[] {
	if (!param) {
		return [];
	}
	const seen = new Set<string>();
	for (const raw of param.split(SEPARATOR)) {
		const slug = raw.trim();
		if (knownSlugs.has(slug)) {
			seen.add(slug);
		}
	}
	return checklistItems
		.filter((item) => seen.has(item.slug))
		.map((item) => item.slug);
}
