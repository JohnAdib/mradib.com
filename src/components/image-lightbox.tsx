"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { createContext, useContext, useState } from "react";

type OpenImage = (images: string[], startIndex?: number) => void;

const LightboxContext = createContext<OpenImage | null>(null);

export function useLightbox(): OpenImage {
	const openImage = useContext(LightboxContext);
	if (!openImage) {
		throw new Error("useLightbox must be used within a LightboxProvider");
	}
	return openImage;
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
	const [gallery, setGallery] = useState<{
		images: string[];
		index: number;
	} | null>(null);

	const openImage: OpenImage = (images, startIndex = 0) => {
		setGallery({ images, index: startIndex });
	};
	const step = (delta: number) => {
		setGallery((current) => {
			if (!current) {
				return current;
			}
			const total = current.images.length;
			return { ...current, index: (current.index + delta + total) % total };
		});
	};

	return (
		<LightboxContext.Provider value={openImage}>
			{children}
			<Dialog
				transition
				open={gallery !== null}
				onClose={() => setGallery(null)}
				className="relative z-50"
			>
				<DialogBackdrop
					transition
					className="fixed inset-0 bg-black/80 duration-300 ease-out data-closed:opacity-0"
				/>
				<div className="fixed inset-0 flex items-center justify-center gap-4 p-4">
					{gallery && gallery.images.length > 1 && (
						<button
							type="button"
							onClick={() => step(-1)}
							className="text-white/80 transition hover:text-white"
						>
							<ChevronLeftIcon className="h-8 w-8" />
							<span className="sr-only">Previous image</span>
						</button>
					)}
					<DialogPanel
						transition
						className="relative max-h-[85vh] max-w-3xl duration-300 ease-out data-closed:scale-95 data-closed:opacity-0"
					>
						<button
							type="button"
							onClick={() => setGallery(null)}
							className="absolute -top-10 right-0 text-white/80 transition hover:text-white"
						>
							<XMarkIcon className="h-7 w-7" />
							<span className="sr-only">Close</span>
						</button>
						{gallery && (
							// biome-ignore lint/performance/noImgElement: static export with images.unoptimized; plain img is intentional
							<img
								key={gallery.index}
								src={gallery.images[gallery.index]}
								alt="Certificate"
								className="lightbox-morph max-h-[85vh] w-auto rounded-2xl"
							/>
						)}
					</DialogPanel>
					{gallery && gallery.images.length > 1 && (
						<button
							type="button"
							onClick={() => step(1)}
							className="text-white/80 transition hover:text-white"
						>
							<ChevronRightIcon className="h-8 w-8" />
							<span className="sr-only">Next image</span>
						</button>
					)}
				</div>
			</Dialog>
		</LightboxContext.Provider>
	);
}
