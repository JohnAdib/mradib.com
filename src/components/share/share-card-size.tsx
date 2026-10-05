"use client";

import { ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "profile-card-scale";

export function ShareCardSize({ children }: { children: React.ReactNode }) {
	const trigger = useRef<HTMLButtonElement>(null);
	const [scale, setScale] = useState(100);
	const [adjusting, setAdjusting] = useState(false);
	useEffect(() => {
		try {
			const saved = Number(localStorage.getItem(STORAGE_KEY));
			if (Number.isFinite(saved) && saved >= 75 && saved <= 175)
				setScale(saved);
		} catch {
			/* Storage may be unavailable in private browsing. */
		}
	}, []);
	useEffect(() => {
		if (!adjusting) return;
		function onKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				setAdjusting(false);
				trigger.current?.focus();
			}
		}
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [adjusting]);
	function updateScale(value: number) {
		setScale(value);
		try {
			localStorage.setItem(STORAGE_KEY, String(value));
		} catch {
			/* Keep this session usable. */
		}
	}
	return (
		<>
			<button
				type="button"
				ref={trigger}
				className="share-size-trigger"
				aria-label="Adjust card size"
				aria-expanded={adjusting}
				aria-controls="share-size-settings"
				onClick={() => setAdjusting(!adjusting)}
			>
				<ArrowsPointingOutIcon className="size-5" />
			</button>
			<div className="share-card-frame" style={{ zoom: scale / 100 }}>
				{children}
			</div>
			{adjusting && (
				<section
					id="share-size-settings"
					className="share-size-settings"
					aria-label="Adjust card size"
				>
					<label htmlFor="share-size-range">
						Match the edges to a real card.
					</label>
					<p>Keep browser zoom unchanged. Saved on this device.</p>
					<div className="share-size-controls">
						<input
							id="share-size-range"
							type="range"
							min="75"
							max="175"
							step="1"
							value={scale}
							aria-label="Card size"
							aria-valuetext={`${scale}%`}
							onChange={(event) => updateScale(Number(event.target.value))}
						/>
						<button type="button" onClick={() => updateScale(100)}>
							Reset
						</button>
						<button
							type="button"
							onClick={() => {
								setAdjusting(false);
								trigger.current?.focus();
							}}
						>
							Done
						</button>
					</div>
				</section>
			)}
		</>
	);
}
