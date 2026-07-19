import type { IAdplistBadge, IReference } from "@/data/awards";

/** date-kind -> "verify:<credential-slug>" (adplist.org) or "recap:<medium-slug>". */
const referenceKeys: Record<string, string> = {
	"2026-01-top1": "verify:top1percent-jan-2026-engineering-b2c594",
	"2026-01-top10Frontend": "verify:top10-mar-2026-front-end-b2c594",
	"2025-12-top1": "verify:top1percent-dec-2025-engineering-b2c594",
	"2025-11-top1": "verify:top1percent-nov-2025-engineering-b2c594",
	"2025-10-superMentor": "verify:supermentor-dec-2025-b2c594",
	"2025-10-top1": "verify:top1percent-oct-2025-engineering-b2c594",
	"2025-07-superMentor": "verify:supermentor-sep-2025-b2c594",
	"2025-08-top1": "verify:top1percent-aug-2025-engineering-b2c594",
	"2025-07-top1": "verify:top1percent-jul-2025-engineering-b2c594",
	"2025-06-top1": "verify:top1percent-jun-2025-engineering-b2c594",
	"2025-05-top1": "verify:top1percent-may-2025-engineering-b2c594",
	"2025-04-superMentor": "verify:supermentor-jun-2025-b2c594",
	"2025-01-top10Frontend": "verify:top10-mar-2025-front-end-b2c594",
	"2025-01-top1": "verify:top1percent-jan-2025-engineering-b2c594",
	"2024-10-superMentor": "verify:supermentor-dec-2024-b2c594",
	"2024-09-top1": "recap:september-2024-b284158aeaca",
	"2024-08-top1": "recap:august-2024-8f2e742e26ee",
	"2024-07-top1": "recap:july-2024-6af3d98950e2",
};

function verify(slug: string): IReference {
	return {
		label: "Verify on ADPList",
		url: `https://adplist.org/community-certifications/${slug}`,
	};
}

function recap(slug: string): IReference {
	return {
		label: "Read the recap",
		url: `https://medium.com/amazing-together/adplists-top-1-mentors-and-rising-stars-${slug}`,
	};
}

/** External verification page or article for a badge, undefined when none exists. */
export function badgeReference(badge: IAdplistBadge): IReference | undefined {
	const key = referenceKeys[`${badge.date}-${badge.kind}`];
	if (!key) {
		return undefined;
	}
	const [type, slug] = key.split(":");
	return type === "verify" ? verify(slug) : recap(slug);
}
