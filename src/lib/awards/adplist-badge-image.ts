import type { IAdplistBadge } from "@/data/awards";

const kindSlug: Record<IAdplistBadge["kind"], string> = {
	top1: "top1",
	superMentor: "super-mentor",
	top10Frontend: "top10-frontend",
};

/** Root-relative certificate image paths, public/awards/adplist/YYYY-MM-<kind>[-N].jpg. */
export function badgeImgPaths(badge: IAdplistBadge): string[] {
	const count = badge.imageCount ?? 0;
	const base = `/awards/adplist/${badge.date}-${kindSlug[badge.kind]}`;
	return Array.from({ length: count }, (_, i) =>
		i === 0 ? `${base}.jpg` : `${base}-${i + 1}.jpg`,
	);
}
