export function AwardLogo({ src, alt }: { src: string; alt: string }) {
	return (
		<div className="flex items-center justify-center rounded-2xl bg-surface p-10 ring-1 ring-zinc-900/10">
			{/* biome-ignore lint/performance/noImgElement: static export with images.unoptimized; plain img is intentional */}
			<img src={src} alt={alt} className="w-full" />
		</div>
	);
}
