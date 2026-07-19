"use client";

import { PhotoIcon } from "@heroicons/react/24/outline";
import { type ILightboxEntry, useLightbox } from "@/components/image-lightbox";
import type { IAdplistBadge } from "@/data/awards";
import {
	badgeChipImgPath,
	badgeImgPath,
} from "@/lib/awards/adplist-badge-image";

export function AdplistBadgeChip({
	badge,
	wide,
	gallery,
	galleryIndex,
}: {
	badge: IAdplistBadge;
	wide?: boolean;
	gallery: ILightboxEntry[];
	galleryIndex: number;
}) {
	const openLightbox = useLightbox();
	const img = badgeImgPath(badge);
	const thumb = badgeChipImgPath(badge);
	const aspect = wide ? "aspect-video" : "aspect-square";

	return (
		<button
			type="button"
			onClick={() => img && openLightbox(gallery, galleryIndex)}
			disabled={!img}
			className="group flex flex-col overflow-hidden rounded-xl bg-surface text-left ring-1 ring-zinc-900/10 transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-zinc-900/5 disabled:pointer-events-none dark:bg-zinc-800/40 dark:ring-zinc-700/50"
		>
			{thumb ? (
				// biome-ignore lint/performance/noImgElement: static export with images.unoptimized; plain img is intentional
				<img
					src={thumb}
					alt=""
					width={480}
					height={wide ? 270 : 480}
					className={`${aspect} w-full object-cover`}
				/>
			) : (
				<div
					className={`flex ${aspect} w-full items-center justify-center bg-accent-50 dark:bg-accent-400/10`}
				>
					<PhotoIcon className="h-6 w-6 text-accent-400" />
				</div>
			)}
			<p className="px-2 py-2 text-center text-xs text-zinc-600 dark:text-zinc-400">
				{badge.period}
			</p>
		</button>
	);
}
