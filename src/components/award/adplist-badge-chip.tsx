"use client";

import { PhotoIcon } from "@heroicons/react/24/outline";
import { useLightbox } from "@/components/image-lightbox";
import type { IAdplistBadge } from "@/data/awards";
import { badgeImgPaths } from "@/lib/awards/adplist-badge-image";

export function AdplistBadgeChip({ badge }: { badge: IAdplistBadge }) {
	const openImage = useLightbox();
	const images = badgeImgPaths(badge);
	const hasImage = images.length > 0;

	return (
		<button
			type="button"
			onClick={() => hasImage && openImage(images, 0)}
			disabled={!hasImage}
			className="group flex flex-col overflow-hidden rounded-xl bg-white text-left ring-1 ring-zinc-100 transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-zinc-900/5 disabled:pointer-events-none dark:bg-zinc-800/40 dark:ring-zinc-700/50"
		>
			{hasImage ? (
				// biome-ignore lint/performance/noImgElement: static export with images.unoptimized; plain img is intentional
				<img
					src={images[0]}
					alt=""
					className="aspect-square w-full object-cover"
				/>
			) : (
				<div className="flex aspect-square w-full items-center justify-center bg-accent-50 dark:bg-accent-400/10">
					<PhotoIcon className="h-6 w-6 text-accent-400" />
				</div>
			)}
			<p className="px-2 py-2 text-center text-xs text-zinc-600 dark:text-zinc-400">
				{badge.period}
			</p>
		</button>
	);
}
