import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export function LightboxPanel({
	images,
	index,
	onStep,
}: {
	images: string[];
	index: number;
	onStep: (delta: number) => void;
}) {
	return (
		<div className="flex items-center gap-4">
			{images.length > 1 && (
				<button
					type="button"
					onClick={() => onStep(-1)}
					className="text-white/80 transition hover:text-white"
				>
					<ChevronLeftIcon className="h-8 w-8" />
					<span className="sr-only">Previous image</span>
				</button>
			)}
			{/* biome-ignore lint/performance/noImgElement: static export with images.unoptimized; plain img is intentional */}
			<img
				key={index}
				src={images[index]}
				alt="Certificate"
				className="lightbox-morph max-h-[75vh] w-auto rounded-2xl"
			/>
			{images.length > 1 && (
				<button
					type="button"
					onClick={() => onStep(1)}
					className="text-white/80 transition hover:text-white"
				>
					<ChevronRightIcon className="h-8 w-8" />
					<span className="sr-only">Next image</span>
				</button>
			)}
		</div>
	);
}
