"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-spy over a fixed list of element ids. Returns the id of the section
 * considered "active" — the last id in `ids` order that is currently
 * intersecting the viewport — falling back to the previous value when nothing
 * intersects. SSR-safe: all DOM access happens inside the effect.
 */
export function useScrollSpy(ids: string[]): string | null {
	const [activeId, setActiveId] = useState<string | null>(null);
	const intersecting = useRef<Set<string>>(new Set());
	// Stable primitive so the effect only re-runs when the id list changes.
	// Newline is ASCII whitespace and cannot appear in an HTML id, so it is a
	// collision-proof delimiter.
	const idsKey = ids.join("\n");

	useEffect(() => {
		const order = idsKey.length > 0 ? idsKey.split("\n") : [];
		const elements = order
			.map((id) => document.getElementById(id))
			.filter((element): element is HTMLElement => element !== null);

		if (elements.length === 0) {
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				const current = intersecting.current;
				for (const entry of entries) {
					if (entry.isIntersecting) {
						current.add(entry.target.id);
					} else {
						current.delete(entry.target.id);
					}
				}

				setActiveId((previous) => {
					for (let index = order.length - 1; index >= 0; index--) {
						if (current.has(order[index])) {
							return order[index];
						}
					}
					return previous;
				});
			},
			{ rootMargin: "-96px 0px -55% 0px" },
		);

		for (const element of elements) {
			observer.observe(element);
		}

		return () => {
			observer.disconnect();
			intersecting.current.clear();
		};
	}, [idsKey]);

	return activeId;
}
