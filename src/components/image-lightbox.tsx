"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { createContext, useContext, useState } from "react";
import { LightboxPanel } from "@/components/lightbox-panel";
import { LightboxReferences } from "@/components/lightbox-references";
import type { IReference } from "@/data/awards";

export interface ILightboxEntry {
	src: string;
	references?: IReference[];
}

type OpenLightbox = (entries: ILightboxEntry[], startIndex?: number) => void;

const LightboxContext = createContext<OpenLightbox | null>(null);

export function useLightbox(): OpenLightbox {
	const openLightbox = useContext(LightboxContext);
	if (!openLightbox) {
		throw new Error("useLightbox must be used within a LightboxProvider");
	}
	return openLightbox;
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
	const [gallery, setGallery] = useState<{
		entries: ILightboxEntry[];
		index: number;
	} | null>(null);

	const openLightbox: OpenLightbox = (entries, startIndex = 0) => {
		setGallery({ entries, index: startIndex });
	};
	const step = (delta: number) => {
		setGallery((current) => {
			if (!current) {
				return current;
			}
			const total = current.entries.length;
			return { ...current, index: (current.index + delta + total) % total };
		});
	};
	const close = () => setGallery(null);

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (!gallery || gallery.entries.length < 2) {
			return;
		}
		if (event.key === "ArrowLeft") {
			step(-1);
		} else if (event.key === "ArrowRight") {
			step(1);
		}
	};

	return (
		<LightboxContext.Provider value={openLightbox}>
			{children}
			<Dialog
				transition
				open={gallery !== null}
				onClose={close}
				onKeyDown={handleKeyDown}
				className="relative z-50"
			>
				<DialogBackdrop
					transition
					className="fixed inset-0 bg-black/80 duration-300 ease-out data-closed:opacity-0"
				/>
				<div className="fixed inset-0 flex items-center justify-center p-4">
					{gallery && (
						<DialogPanel
							transition
							className="relative flex flex-col items-center gap-5 duration-300 ease-out data-closed:scale-95 data-closed:opacity-0"
						>
							<button
								type="button"
								onClick={close}
								className="absolute -top-10 right-0 text-white/80 transition hover:text-white"
							>
								<XMarkIcon className="h-7 w-7" />
								<span className="sr-only">Close</span>
							</button>
							<LightboxPanel
								images={gallery.entries.map((entry) => entry.src)}
								index={gallery.index}
								onStep={step}
							/>
							<LightboxReferences
								references={gallery.entries[gallery.index]?.references ?? []}
							/>
						</DialogPanel>
					)}
				</div>
			</Dialog>
		</LightboxContext.Provider>
	);
}
