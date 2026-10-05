"use client";

import { useCallback, useRef, useState } from "react";

export function useShareMorph() {
	const [open, setOpen] = useState(false);
	const trigger = useRef<HTMLButtonElement>(null);
	const panel = useRef<HTMLDivElement>(null);
	const closing = useRef(false);
	const animations = useRef<Animation[]>([]);
	const animate = useCallback((reverse = false) => {
		const box = panel.current;
		const button = trigger.current;
		if (!box || !button) return [];
		animations.current.forEach((animation) => {
			animation.cancel();
		});
		const from = button.getBoundingClientRect();
		const to = box.getBoundingClientRect();
		const small = `translate(${from.x - to.x}px, ${from.y - to.y}px) scale(${from.width / to.width}, ${from.height / to.height})`;
		const reduced = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		const options: KeyframeAnimationOptions = {
			duration: reduced ? 0 : reverse ? 280 : 460,
			easing: "cubic-bezier(0.22, 1, 0.36, 1)",
			fill: "both",
		};
		const surface = box.querySelector(".share-qr-surface");
		const content = box.querySelector(".share-qr-content");
		const backdrop = document.querySelector(".share-backdrop");
		const frames = [
			{ transform: small, borderRadius: "50%" },
			{ transform: "none", borderRadius: "24px" },
		];
		const fade = [{ opacity: 0 }, { opacity: 1 }];
		animations.current = [
			surface?.animate(reverse ? frames.toReversed() : frames, options),
			content?.animate(reverse ? fade.toReversed() : fade, {
				...options,
				duration: reduced ? 0 : 160,
				delay: reduced || reverse ? 0 : 150,
			}),
			backdrop?.animate(reverse ? fade.toReversed() : fade, options),
		].filter((animation): animation is Animation => Boolean(animation));
		return animations.current;
	}, []);
	const mountPanel = useCallback(
		(element: HTMLDivElement | null) => {
			panel.current = element;
			if (element) animate();
			else
				animations.current.forEach((animation) => {
					animation.cancel();
				});
		},
		[animate],
	);
	async function close() {
		if (closing.current) return;
		closing.current = true;
		await Promise.allSettled(
			animate(true).map((animation) => animation.finished),
		);
		setOpen(false);
		closing.current = false;
	}
	return { open, trigger, panel: mountPanel, show: () => setOpen(true), close };
}
