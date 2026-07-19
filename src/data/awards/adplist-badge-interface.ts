export type AdplistBadgeKind = "top1" | "superMentor" | "top10Frontend";

export interface IAdplistBadge {
	kind: AdplistBadgeKind;
	/** ISO YYYY-MM of the period the badge covers, not LinkedIn's issue date. */
	date: string;
	/** Display label for the period, e.g. "July 2025", "Q4 2024". */
	period: string;
	/** True once a certificate image exists at the path badgeImgPath() computes. */
	hasImage?: boolean;
}
