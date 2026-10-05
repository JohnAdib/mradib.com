"use client";

import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";
import { ShareIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import { shareProfile } from "@/data/share";
import { useShareMorph } from "./use-share-morph";

export function ShareActions() {
	const morph = useShareMorph();
	const [status, setStatus] = useState("");
	async function share() {
		setStatus("");
		try {
			if (navigator.share) {
				await navigator.share({
					title: shareProfile.name,
					url: shareProfile.url,
				});
			} else {
				await navigator.clipboard.writeText(shareProfile.url);
				setStatus("Link copied");
			}
		} catch (error) {
			if (error instanceof Error && error.name === "AbortError") return;
			setStatus("Unable to share. You can scan the QR code instead.");
		}
	}
	return (
		<>
			<button
				ref={morph.trigger}
				type="button"
				className="share-trigger"
				aria-label="Share profile"
				onClick={() => {
					setStatus("");
					morph.show();
				}}
			>
				<ShareIcon className="size-6" />
			</button>
			<Dialog open={morph.open} onClose={morph.close} className="share-dialog">
				<DialogBackdrop className="share-backdrop" />
				<div className="share-dialog-position">
					<DialogPanel ref={morph.panel} className="share-qr-panel">
						<div className="share-qr-surface" aria-hidden="true" />
						<div className="share-qr-content">
							<button
								type="button"
								className="share-qr-close"
								aria-label="Close QR code"
								onClick={morph.close}
							>
								<XMarkIcon className="size-6" />
							</button>
							<DialogTitle>{shareProfile.name}</DialogTitle>
							<Image
								src={shareProfile.qr}
								alt="QR code linking to mradib.com/@"
								width={320}
								height={320}
								unoptimized
								className="share-qr-image"
							/>
							<button
								type="button"
								className="share-address"
								onClick={share}
								aria-label="Share mradib.com/@"
							>
								mradib.com/@
							</button>
							<p className="share-status" role="status">
								{status}
							</p>
						</div>
					</DialogPanel>
				</div>
			</Dialog>
		</>
	);
}
