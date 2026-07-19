import { adplistTop1AwardName } from "./adplist-timeline";
import type { IAward } from "./award-interface";
import { awards } from "./awards";

export type {
	AdplistBadgeKind,
	IAdplistBadge,
} from "./adplist-badge-interface";
export { adplistBadges } from "./adplist-badges";
export {
	adplistBadgeTimeline,
	mentoringAwardsCount,
	top1MonthsLabel,
} from "./adplist-timeline";
export type {
	AwardCategory,
	AwardGroup,
	IAward,
	IReference,
} from "./award-interface";
export { awards } from "./awards";

export const flagshipAwards: IAward[] = awards.filter(
	(award) => award.category === "flagship",
);

/** Award names for the sitewide Person JSON-LD `award` property */
export const awardNames: string[] = [
	...awards.map((award) => `${award.name} (${award.issuer})`),
	adplistTop1AwardName,
];

/** Find a flagship award by slug, throws at build time if data is missing */
export function getAward(slug: string): IAward {
	const award = awards.find((entry) => entry.slug === slug);
	if (!award) {
		throw new Error(`Award not found in src/data/awards: ${slug}`);
	}
	return award;
}
