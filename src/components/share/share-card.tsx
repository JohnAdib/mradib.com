"use client";

import { ShareIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { TiltCard } from "@/components/tilt-card/tilt-card";
import { ShareMotion } from "./share-motion";
import { ShareQr } from "./share-qr";

export function ShareCard({
	identity,
	children,
}: {
	identity: React.ReactNode;
	children: React.ReactNode;
}) {
	const [sharing, setSharing] = useState(false);
	const trigger = useRef<HTMLButtonElement>(null);
	useEffect(() => {
		if (!sharing) return;
		function onKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				setSharing(false);
				trigger.current?.focus();
			}
		}
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [sharing]);
	return (
		<>
			<button
				ref={trigger}
				type="button"
				className="share-trigger"
				aria-label={sharing ? "Close QR code" : "Share profile"}
				aria-expanded={sharing}
				aria-controls="share-qr-view"
				onClick={() => setSharing(!sharing)}
			>
				{sharing ? (
					<XMarkIcon className="size-6" />
				) : (
					<ShareIcon className="size-6" />
				)}
			</button>
			<ShareMotion sharing={sharing}>
				<TiltCard
					className="share-card"
					maxTilt={5}
					tracking="viewport"
					disabled={sharing}
				>
					{identity}
					<div className="share-views" data-sharing={sharing}>
						<div
							className="share-view share-links-view"
							inert={sharing}
							aria-hidden={sharing}
						>
							{children}
						</div>
						<section
							id="share-qr-view"
							className="share-view share-qr-view"
							aria-label="QR code"
							inert={!sharing}
							aria-hidden={!sharing}
						>
							<ShareQr active={sharing} />
						</section>
					</div>
				</TiltCard>
			</ShareMotion>
		</>
	);
}
