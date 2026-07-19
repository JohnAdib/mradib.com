"use client";

import { useLightbox } from "@/components/image-lightbox";
import type { IAward } from "@/data/awards";

export function AwardBadge({ award }: { award: IAward }) {
	const openLightbox = useLightbox();
	const images = award.badgeImages ?? [];
	const references = award.references ?? [];
	const captions = award.badgeCaptions ?? [];
	const entries = images.map((src) => ({ src, references }));

	if (images.length === 0) {
		return null;
	}

	if (images.length === 1) {
		return (
			<div>
				<button
					type="button"
					onClick={() => openLightbox(entries, 0)}
					className="block w-full"
				>
					{/* biome-ignore lint/performance/noImgElement: static export with images.unoptimized; plain img is intentional */}
					<img
						src={images[0]}
						alt={`${award.name} certificate`}
						className="w-full rounded-2xl ring-1 ring-zinc-900/10 shadow-sm transition hover:opacity-90 dark:ring-zinc-700/50"
					/>
				</button>
				{captions[0] && (
					<p className="mt-2 text-center text-xs text-zinc-500 dark:text-zinc-400">
						{captions[0]}
					</p>
				)}
			</div>
		);
	}

	return (
		<div className="grid grid-cols-2 gap-3">
			{images.map((src, i) => (
				<div key={src}>
					<button
						type="button"
						onClick={() => openLightbox(entries, i)}
						className="block w-full"
					>
						{/* biome-ignore lint/performance/noImgElement: static export with images.unoptimized; plain img is intentional */}
						<img
							src={src}
							alt={`${award.name} certificate${captions[i] ? `, ${captions[i]}` : ""}`}
							className="aspect-[4/5] w-full rounded-2xl object-cover ring-1 ring-zinc-900/10 shadow-sm transition hover:opacity-90 dark:ring-zinc-700/50"
						/>
					</button>
					{captions[i] && (
						<p className="mt-2 text-center text-xs text-zinc-500 dark:text-zinc-400">
							{captions[i]}
						</p>
					)}
				</div>
			))}
		</div>
	);
}
