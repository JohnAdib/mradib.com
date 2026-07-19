import type { IAdplistBadge } from "@/data/awards";

const kindSlug: Record<IAdplistBadge["kind"], string> = {
	top1: "top-1-percent-mentor",
	superMentor: "super-mentor",
	top10Frontend: "top-10-front-end-mentor",
};

/** Root-relative certificate image path, public/awards/YYYY-MM-adplist-<kind>.jpg. */
export function badgeImgPath(badge: IAdplistBadge): string | undefined {
	if (!badge.hasImage) {
		return undefined;
	}
	return `/awards/${badge.date}-adplist-${kindSlug[badge.kind]}.jpg`;
}
