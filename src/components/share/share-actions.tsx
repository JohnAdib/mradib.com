"use client";

import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";
import { QrCodeIcon, ShareIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import { shareProfile } from "@/data/share";

export function ShareActions() {
	const [open, setOpen] = useState(false);
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
			setStatus(
				"Unable to share. Use the QR code or copy the address from your browser.",
			);
		}
	}
	return (
		<>
			<div className="share-actions">
				<button type="button" onClick={() => setOpen(true)}>
					<QrCodeIcon className="size-5" />
					QR code
				</button>
				<button type="button" onClick={share}>
					<ShareIcon className="size-5" />
					Share
				</button>
			</div>
			<p className="share-status" role="status">
				{status}
			</p>
			<Dialog open={open} onClose={setOpen} className="share-dialog">
				<DialogBackdrop transition className="share-backdrop" />
				<div className="share-dialog-position">
					<DialogPanel transition className="share-qr-panel">
						<button
							type="button"
							className="share-qr-close"
							aria-label="Close QR code"
							onClick={() => setOpen(false)}
						>
							<XMarkIcon className="size-6" />
						</button>
						<DialogTitle>{shareProfile.name}</DialogTitle>
						<Image
							src={shareProfile.qr}
							alt="QR code linking to mradib.com/share"
							width={320}
							height={320}
							unoptimized
							className="share-qr-image"
						/>
						<a href={shareProfile.url}>mradib.com/share</a>
					</DialogPanel>
				</div>
			</Dialog>
		</>
	);
}
