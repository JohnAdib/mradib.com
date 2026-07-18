export type AdplistBadgeKind = "top1" | "superMentor" | "top10Frontend";

export interface IAdplistBadge {
	kind: AdplistBadgeKind;
	/** ISO YYYY-MM of the period the badge covers, not LinkedIn's issue date. */
	date: string;
	/** Display label for the period, e.g. "July 2025", "Q4 2024". */
	period: string;
	/** How many certificate images exist at the paths badgeImgPaths() computes, 0 if none yet. */
	imageCount?: number;
}
