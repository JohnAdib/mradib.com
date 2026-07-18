import type { IAdplistBadge } from "./adplist-badge-interface";

/**
 * Every recurring ADPList recognition event, newest first. Traced to
 * docs/profile/certifications.md (Top 1%, Super Mentor, Top 10 Front-End)
 * and the 4 Top 1% honors that LinkedIn filed under "Honors & awards"
 * instead, docs/profile/awards.md (Jul to Oct 2024). Session and minute
 * milestones are participation counters, not competitive awards, so they
 * are intentionally excluded here. Certificate image paths are computed by
 * badgeImgPaths(), imageCount reflects how many files actually exist under
 * public/awards/adplist. Most are the full-resolution certificate from each
 * badge's adplist.org verification page, not the small LinkedIn thumbnail.
 * The 4 badges from Jul to Oct 2024 predate ADPList's verification pages,
 * LinkedIn's own thumbnails are the ceiling for those.
 */
export const adplistBadges: IAdplistBadge[] = [
	{ kind: "top1", period: "January 2026", date: "2026-01", imageCount: 1 },
	{ kind: "top10Frontend", period: "Q1 2026", date: "2026-01", imageCount: 1 },
	{ kind: "top1", period: "December 2025", date: "2025-12", imageCount: 1 },
	{ kind: "top1", period: "November 2025", date: "2025-11", imageCount: 1 },
	{ kind: "superMentor", period: "Q4 2025", date: "2025-10", imageCount: 1 },
	{ kind: "top1", period: "October 2025", date: "2025-10", imageCount: 1 },
	{ kind: "superMentor", period: "Q3 2025", date: "2025-07", imageCount: 1 },
	{ kind: "top1", period: "August 2025", date: "2025-08", imageCount: 1 },
	{ kind: "top1", period: "July 2025", date: "2025-07", imageCount: 1 },
	{ kind: "top1", period: "June 2025", date: "2025-06", imageCount: 1 },
	{ kind: "top1", period: "May 2025", date: "2025-05", imageCount: 1 },
	{ kind: "superMentor", period: "Q2 2025", date: "2025-04", imageCount: 1 },
	{ kind: "top10Frontend", period: "Q1 2025", date: "2025-01", imageCount: 1 },
	{ kind: "top1", period: "January 2025", date: "2025-01", imageCount: 1 },
	{ kind: "superMentor", period: "Q4 2024", date: "2024-10", imageCount: 1 },
	{ kind: "top1", period: "October 2024", date: "2024-10", imageCount: 2 },
	{ kind: "top1", period: "September 2024", date: "2024-09", imageCount: 2 },
	{ kind: "top1", period: "August 2024", date: "2024-08", imageCount: 2 },
	{ kind: "top1", period: "July 2024", date: "2024-07", imageCount: 2 },
];
