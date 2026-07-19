import type { IAdplistBadge } from "./adplist-badge-interface";

/**
 * Every recurring ADPList recognition event, newest first. Traced to
 * docs/profile/certifications.md (Top 1%, Super Mentor, Top 10 Front-End)
 * and the 4 Top 1% honors that LinkedIn filed under "Honors & awards"
 * instead, docs/profile/awards.md (Jul to Oct 2024). Session and minute
 * milestones are participation counters, not competitive awards, so they
 * are intentionally excluded here. Certificate image paths are computed by
 * badgeImgPath(), reference links by badgeReference(), both keyed off
 * date+kind, see src/lib/awards/.
 */
export const adplistBadges: IAdplistBadge[] = [
	{ kind: "top1", period: "January 2026", date: "2026-01", hasImage: true },
	{ kind: "top10Frontend", period: "Q1 2026", date: "2026-01", hasImage: true },
	{ kind: "top1", period: "December 2025", date: "2025-12", hasImage: true },
	{ kind: "top1", period: "November 2025", date: "2025-11", hasImage: true },
	{ kind: "superMentor", period: "Q4 2025", date: "2025-10", hasImage: true },
	{ kind: "top1", period: "October 2025", date: "2025-10", hasImage: true },
	{ kind: "superMentor", period: "Q3 2025", date: "2025-07", hasImage: true },
	{ kind: "top1", period: "August 2025", date: "2025-08", hasImage: true },
	{ kind: "top1", period: "July 2025", date: "2025-07", hasImage: true },
	{ kind: "top1", period: "June 2025", date: "2025-06", hasImage: true },
	{ kind: "top1", period: "May 2025", date: "2025-05", hasImage: true },
	{ kind: "superMentor", period: "Q2 2025", date: "2025-04", hasImage: true },
	{ kind: "top10Frontend", period: "Q1 2025", date: "2025-01", hasImage: true },
	{ kind: "top1", period: "January 2025", date: "2025-01", hasImage: true },
	{ kind: "superMentor", period: "Q4 2024", date: "2024-10", hasImage: true },
	{ kind: "top1", period: "October 2024", date: "2024-10", hasImage: true },
	{ kind: "top1", period: "September 2024", date: "2024-09", hasImage: true },
	{ kind: "top1", period: "August 2024", date: "2024-08", hasImage: true },
	{ kind: "top1", period: "July 2024", date: "2024-07", hasImage: true },
];
