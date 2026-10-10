"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { shareProfile } from "@/data/share";

export function ShareQr({ active }: { active: boolean }) {
	const [status, setStatus] = useState("");
	useEffect(() => {
		if (!active) setStatus("");
	}, [active]);
	async function share() {
		setStatus("");
		try {
			if (navigator.share)
				await navigator.share({
					title: shareProfile.name,
					url: shareProfile.url,
				});
			else {
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
			<Image
				src={shareProfile.qr}
				alt="QR code linking to mradib.com/@"
				width={240}
				height={240}
				unoptimized
				draggable={false}
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
		</>
	);
}
