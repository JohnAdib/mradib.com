"use client";

import { type RefObject, useEffect } from "react";

/**
 * Plays a muted background video only while it's in view, pausing it
 * off-screen. Honors prefers-reduced-motion by never starting playback.
 */
export function useVideoAutoplayOnView(
	ref: RefObject<HTMLVideoElement | null>,
) {
	useEffect(() => {
		const node = ref.current;
		if (!node) {
			return;
		}

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			node.pause();
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0]?.isIntersecting) {
					node.play().catch(() => {});
				} else {
					node.pause();
				}
			},
			{ threshold: 0.25 },
		);
		observer.observe(node);
		return () => observer.disconnect();
	}, [ref]);
}
