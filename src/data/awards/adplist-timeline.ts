import type { AdplistBadgeKind } from "./adplist-badge-interface";
import { adplistBadges } from "./adplist-badges";

function byKind(kind: AdplistBadgeKind) {
	return adplistBadges
		.filter((badge) => badge.kind === kind)
		.sort((a, b) => a.date.localeCompare(b.date));
}

function joinAnd(parts: string[]): string {
	if (parts.length < 2) {
		return parts.join("");
	}
	return `${parts.slice(0, -1).join(", ")} and ${parts[parts.length - 1]}`;
}

const top1 = byKind("top1");
const superMentor = byKind("superMentor");
const top10 = byKind("top10Frontend");
const top1Years = `${top1[0].date.slice(0, 4)} to ${top1[top1.length - 1].date.slice(0, 4)}`;

/** Rounded down by one, so this never needs a manual correction as new months land. */
export const top1MonthsLabel = `${top1.length - 1}+`;

/**
 * Derived from adplistBadges so counts and ranges can never drift as new
 * badges land. Same export name and string[] shape as the array this
 * replaced, every existing consumer needs no changes.
 */
export const adplistBadgeTimeline: string[] = [
	`Top 1% Engineering Mentor, awarded ${top1MonthsLabel} months (${top1Years})`,
	`Super Mentor, ${superMentor.length} quarters (${superMentor[0].period} to ${superMentor[superMentor.length - 1].period})`,
	`Top 10 Mentor in Front-End, ${joinAnd(top10.map((badge) => badge.period))}`,
];

/** Single-string form for the sitewide Person JSON-LD `award` property. */
export const adplistTop1AwardName = `Top 1% Engineering Mentor, awarded ${top1MonthsLabel} months (ADPList, ${top1Years})`;
