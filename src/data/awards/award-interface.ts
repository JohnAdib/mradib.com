export interface IReference {
	label: string;
	url: string;
}

export type AwardCategory = "flagship" | "badge";

export type AwardGroup =
	| "mentorship"
	| "national"
	| "competition"
	| "product"
	| "service";

export interface IAward {
	/** Only flagship awards have a slug, they get a page at /awards/<slug> */
	slug?: string;
	name: string;
	issuer: string;
	/** ISO date (YYYY-MM) of when the award was issued */
	date: string;
	category: AwardCategory;
	group: AwardGroup;
	summary: string;
	/** Certificate/badge images, root-relative paths. First is the primary, shown largest. */
	badgeImages?: string[];
	/** Caption per badgeImages entry, same order. Use to disambiguate lookalike images. */
	badgeCaptions?: string[];
	/** Organization logo, root-relative path. Shown in a neutral card, not the lightbox. */
	badgeLogo?: string;
	evidencePdf?: string;
	externalUrl?: string;
	/** Extra reference links (articles, alternate edition pages) shown inside the evidence modal, beyond externalUrl. */
	references?: IReference[];
}
