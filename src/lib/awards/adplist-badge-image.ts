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

/**
 * 480px thumb for the ~250px badge chip, built by scripts/optimize-images.mjs.
 * The full-size path (badgeImgPath) stays reserved for the lightbox.
 */
export function badgeChipImgPath(badge: IAdplistBadge): string | undefined {
	const full = badgeImgPath(badge);
	return full?.replace(/\.jpg$/, "-480.jpg");
}
