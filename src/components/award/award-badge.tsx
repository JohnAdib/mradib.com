"use client";

import { useLightbox } from "@/components/image-lightbox";
import type { IAward } from "@/data/awards";

export function AwardBadge({ award }: { award: IAward }) {
	const openImage = useLightbox();
	const images = award.badgeImages ?? [];
	const references = award.references ?? [];

	if (images.length === 0) {
		return null;
	}

	return (
		<div>
			<button
				type="button"
				onClick={() => openImage(images, 0, references)}
				className="block w-full"
			>
				{/* biome-ignore lint/performance/noImgElement: static export with images.unoptimized; plain img is intentional */}
				<img
					src={images[0]}
					alt={`${award.name} certificate`}
					className="w-full rounded-2xl ring-1 ring-zinc-100 shadow-sm transition hover:opacity-90 dark:ring-zinc-700/50"
				/>
			</button>
			{images.length > 1 && (
				<div className="mt-3 grid grid-cols-2 gap-2">
					{images.slice(1).map((src, i) => (
						<button
							key={src}
							type="button"
							onClick={() => openImage(images, i + 1, references)}
						>
							{/* biome-ignore lint/performance/noImgElement: static export with images.unoptimized; plain img is intentional */}
							<img
								src={src}
								alt=""
								className="aspect-square w-full rounded-lg object-cover ring-1 ring-zinc-100 transition hover:opacity-80 dark:ring-zinc-700/50"
							/>
						</button>
					))}
				</div>
			)}
		</div>
	);
}
