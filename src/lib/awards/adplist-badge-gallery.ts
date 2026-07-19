import type { ILightboxEntry } from "@/components/image-lightbox";
import type { IAdplistBadge } from "@/data/awards";
import { badgeImgPath } from "@/lib/awards/adplist-badge-image";
import { badgeReference } from "@/lib/awards/adplist-badge-reference";

/**
 * One shared lightbox gallery for a badge collection, in display order,
 * so arrow keys walk every certificate, each with its own reference pill.
 * Badges without an image are skipped; their chips stay disabled.
 */
export function buildBadgeGallery(badges: IAdplistBadge[]): {
	gallery: ILightboxEntry[];
	galleryIndexOf: Record<string, number>;
} {
	const gallery: ILightboxEntry[] = [];
	const galleryIndexOf: Record<string, number> = {};

	for (const badge of badges) {
		const img = badgeImgPath(badge);
		if (!img) {
			continue;
		}
		const reference = badgeReference(badge);
		galleryIndexOf[`${badge.kind}-${badge.date}`] = gallery.length;
		gallery.push({ src: img, references: reference ? [reference] : [] });
	}

	return { gallery, galleryIndexOf };
}
