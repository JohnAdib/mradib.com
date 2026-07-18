import type { IAward } from "./award-interface";
import { awards } from "./awards";

export type { AwardCategory, AwardGroup, IAward } from "./award-interface";
export { awards } from "./awards";

export const flagshipAwards: IAward[] = awards.filter(
	(award) => award.category === "flagship",
);

/** ADPList recognition collapsed into consistency evidence — never separate pages */
export const adplistBadgeTimeline: string[] = [
	"Top 1% Engineering Mentor — awarded 8+ months (2024–2026)",
	"Super Mentor — Q2, Q3 & Q4 2025",
	"Top 10 Mentor in Front-End — Q1 2025 & Q1 2026",
	"Milestones: 100, 200 and 300+ sessions · 10,000+ mentoring minutes",
];

/** Award names for the sitewide Person JSON-LD `award` property */
export const awardNames: string[] = [
	...awards.map((award) => `${award.name} (${award.issuer})`),
	"Top 1% Engineering Mentor, awarded 8+ months (ADPList, 2024–2026)",
];

/** Find a flagship award by slug — throws at build time if data is missing */
export function getAward(slug: string): IAward {
	const award = awards.find((entry) => entry.slug === slug);
	if (!award) {
		throw new Error(`Award not found in src/data/awards: ${slug}`);
	}
	return award;
}
