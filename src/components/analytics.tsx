"use client";

import { useEffect } from "react";

const GA_ID = "G-0T9SVDBER6";
const IDLE_FALLBACK_MS = 4000;

type GtagWindow = Window & {
	dataLayer?: unknown[];
	gtag?: (...args: unknown[]) => void;
};

function loadGtag() {
	const w = window as GtagWindow;
	if (w.gtag) {
		return;
	}
	w.dataLayer = w.dataLayer ?? [];
	/*
	  gtag.js only processes Arguments objects on the dataLayer, so the shim
	  must push `arguments`, never a plain array.
	*/
	w.gtag = function gtagShim() {
		// biome-ignore lint/complexity/noArguments: gtag.js requires Arguments objects
		w.dataLayer?.push(arguments);
	} as GtagWindow["gtag"];
	w.gtag?.("js", new Date());
	w.gtag?.("config", GA_ID);
	const script = document.createElement("script");
	script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
	script.async = true;
	document.head.appendChild(script);
}

/*
  gtag is 158 KiB and 44% of the page's JavaScript. Loading it on first
  interaction (with an idle fallback so non-interacting visits still
  count) keeps it entirely off the paint-critical window on slow phones.
*/
export function Analytics() {
	useEffect(() => {
		const events = ["pointerdown", "keydown", "scroll", "touchstart"];
		const onFirstInteraction = () => {
			cleanup();
			loadGtag();
		};
		const cleanup = () => {
			for (const event of events) {
				window.removeEventListener(event, onFirstInteraction);
			}
		};
		for (const event of events) {
			window.addEventListener(event, onFirstInteraction, {
				passive: true,
				once: true,
			});
		}
		const fallback = window.setTimeout(loadGtag, IDLE_FALLBACK_MS);
		return () => {
			cleanup();
			window.clearTimeout(fallback);
		};
	}, []);

	return null;
}
