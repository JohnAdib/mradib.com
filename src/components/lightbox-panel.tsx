import { DialogPanel } from "@headlessui/react";
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";

export function LightboxPanel({
	images,
	index,
	onStep,
	onClose,
}: {
	images: string[];
	index: number;
	onStep: (delta: number) => void;
	onClose: () => void;
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
			<DialogPanel
				transition
				className="relative max-h-[75vh] max-w-3xl duration-300 ease-out data-closed:scale-95 data-closed:opacity-0"
			>
				<button
					type="button"
					onClick={onClose}
					className="absolute -top-10 right-0 text-white/80 transition hover:text-white"
				>
					<XMarkIcon className="h-7 w-7" />
					<span className="sr-only">Close</span>
				</button>
				{/* biome-ignore lint/performance/noImgElement: static export with images.unoptimized; plain img is intentional */}
				<img
					key={index}
					src={images[index]}
					alt="Certificate"
					className="lightbox-morph max-h-[75vh] w-auto rounded-2xl"
				/>
			</DialogPanel>
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
