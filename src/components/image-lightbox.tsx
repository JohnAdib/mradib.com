"use client";

import { Dialog, DialogBackdrop } from "@headlessui/react";
import { createContext, useContext, useState } from "react";
import { LightboxPanel } from "@/components/lightbox-panel";
import { LightboxReferences } from "@/components/lightbox-references";
import type { IReference } from "@/data/awards";

type OpenImage = (
	images: string[],
	startIndex?: number,
	references?: IReference[],
) => void;

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
		references: IReference[];
	} | null>(null);

	const openImage: OpenImage = (images, startIndex = 0, references = []) => {
		setGallery({ images, index: startIndex, references });
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
	const close = () => setGallery(null);

	return (
		<LightboxContext.Provider value={openImage}>
			{children}
			<Dialog
				transition
				open={gallery !== null}
				onClose={close}
				className="relative z-50"
			>
				<DialogBackdrop
					transition
					className="fixed inset-0 bg-black/80 duration-300 ease-out data-closed:opacity-0"
				/>
				<div className="fixed inset-0 flex flex-col items-center justify-center gap-5 p-4">
					{gallery && (
						<>
							<LightboxPanel
								images={gallery.images}
								index={gallery.index}
								onStep={step}
								onClose={close}
							/>
							<LightboxReferences references={gallery.references} />
						</>
					)}
				</div>
			</Dialog>
		</LightboxContext.Provider>
	);
}
