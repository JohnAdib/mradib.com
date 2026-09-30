"use client";

import { useEffect } from "react";
import { toggleDetails } from "@/lib/motion/details-motion";
import { prefersReducedMotion } from "@/lib/motion/motion-tokens";

const controls = "a, button, input, select, textarea";

/** The disclosure a click toggles, or null when the click is not a toggle. */
function disclosureOf(event: MouseEvent) {
	if (!(event.target instanceof Element)) {
		return null;
	}
	const summary = event.target.closest("summary");
	const details = summary?.parentElement;
	if (!summary || !(details instanceof HTMLDetailsElement)) {
		return null;
	}
	if (details.querySelector(":scope > summary") !== summary) {
		return null;
	}
	const control = event.target.closest(controls);
	if (control && summary.contains(control)) {
		return null;
	}
	return { details, summary };
}

/**
 * Gives every <details> on the site an opening and a closing animation.
 * Mounted once in the root shell, so every disclosure, today's and future
 * ones, moves the same way. Reduced motion keeps the native instant toggle.
 */
export function DetailsMotion(): null {
	useEffect(() => {
		function onClick(event: MouseEvent) {
			if (event.defaultPrevented || event.button !== 0) {
				return;
			}
			const disclosure = disclosureOf(event);
			if (!disclosure || prefersReducedMotion()) {
				return;
			}
			event.preventDefault();
			toggleDetails(disclosure.details, disclosure.summary);
		}
		document.addEventListener("click", onClick);
		return () => document.removeEventListener("click", onClick);
	}, []);
	return null;
}
