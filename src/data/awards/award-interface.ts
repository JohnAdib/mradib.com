export type AwardCategory = "flagship" | "badge";

export type AwardGroup =
	| "mentorship"
	| "national"
	| "competition"
	| "product"
	| "service";

export interface IAward {
	/** Only flagship awards have a slug — they get a page at /awards/<slug> */
	slug?: string;
	name: string;
	issuer: string;
	/** ISO date (YYYY-MM) of when the award was issued */
	date: string;
	category: AwardCategory;
	group: AwardGroup;
	summary: string;
	badgeImg?: string;
	evidencePdf?: string;
	externalUrl?: string;
}
