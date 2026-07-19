export function AwardLogo({
	src,
	alt,
	width = 3018,
	height = 1994,
}: {
	src: string;
	alt: string;
	width?: number;
	height?: number;
}) {
	return (
		<div className="flex items-center justify-center rounded-2xl bg-surface p-10 ring-1 ring-zinc-900/10">
			{/* biome-ignore lint/performance/noImgElement: static export with images.unoptimized; plain img is intentional */}
			<img
				src={src}
				alt={alt}
				width={width}
				height={height}
				className="h-auto w-full"
			/>
		</div>
	);
}
