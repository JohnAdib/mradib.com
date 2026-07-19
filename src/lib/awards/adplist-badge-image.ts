import type { IAdplistBadge } from "@/data/awards";

const kindSlug: Record<IAdplistBadge["kind"], string> = {
	top1: "top1",
	superMentor: "super-mentor",
	top10Frontend: "top10-frontend",
};

/** Root-relative certificate image path, public/awards/adplist/YYYY-MM-<kind>.jpg. */
export function badgeImgPath(badge: IAdplistBadge): string | undefined {
	if (!badge.hasImage) {
		return undefined;
	}
	return `/awards/adplist/${badge.date}-${kindSlug[badge.kind]}.jpg`;
}
