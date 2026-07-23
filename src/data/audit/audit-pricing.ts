import type {
	IAuditPrice,
	IAuditPricing,
	IAuditSectionHeading,
} from "./audit-interface";

export const auditPricingHeading: IAuditSectionHeading = {
	eyebrow: "Pricing",
	title: "One price. Everything included.",
};

// Pricing constants. John edits these four values in place; every string
// below derives from them, so nothing else needs to change.
// Prices are placeholder values until the first cohort is confirmed.
const FOUNDING_PRICE = 5000;
const STANDARD_PRICE = 7500;
const FOUNDING_SLOTS_TOTAL = 2;
// John lowers this by hand as founding clients sign. At 0 the pricing card
// drops every trace of founding copy and shows the standard price alone.
const FOUNDING_SLOTS_REMAINING = 2;

const gbp = (value: number): string => `£${value.toLocaleString("en-GB")}`;

export const auditPricing: IAuditPricing = {
	foundingPriceGBP: FOUNDING_PRICE,
	foundingPriceDisplay: gbp(FOUNDING_PRICE),
	standardPriceGBP: STANDARD_PRICE,
	standardPriceDisplay: gbp(STANDARD_PRICE),
	slotsTotal: FOUNDING_SLOTS_TOTAL,
	slotsRemaining: FOUNDING_SLOTS_REMAINING,
	foundingCopy: `${gbp(FOUNDING_PRICE)} for the founding cohort. First two clients only, in exchange for a named case study. The standard price after that is ${gbp(STANDARD_PRICE)}.`,
	slotsLine: `${FOUNDING_SLOTS_REMAINING} of ${FOUNDING_SLOTS_TOTAL} founding slots available.`,
};

// The single source for which price is live. The pricing card and the
// Service JSON-LD both call this, so the page can never disagree with the
// structured data.
export function currentAuditPrice(): IAuditPrice {
	const founding = auditPricing.slotsRemaining > 0;
	return {
		gbp: founding
			? auditPricing.foundingPriceGBP
			: auditPricing.standardPriceGBP,
		display: founding
			? auditPricing.foundingPriceDisplay
			: auditPricing.standardPriceDisplay,
		founding,
	};
}
