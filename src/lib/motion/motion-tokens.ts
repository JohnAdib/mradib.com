/**
 * The motion tokens are defined once, in CSS (src/styles/tailwind.css).
 * Script-driven motion reads them from there so JavaScript never carries its
 * own durations or curves.
 */
export interface IMotionTokens {
	fast: number;
	base: number;
	ease: string;
}

/** Converts a CSS time such as "0.6s" or "250ms" to milliseconds. */
export function cssTimeToMs(value: string): number {
	const time = value.trim();
	const amount = Number.parseFloat(time);
	if (Number.isNaN(amount)) {
		return 0;
	}
	return time.endsWith("ms") ? amount : amount * 1000;
}

export function readMotionTokens(element: Element): IMotionTokens {
	const style = getComputedStyle(element);
	return {
		fast: cssTimeToMs(style.getPropertyValue("--duration-fast")),
		base: cssTimeToMs(style.getPropertyValue("--duration-base")),
		ease: style.getPropertyValue("--ease-rise").trim() || "ease-out",
	};
}

export function prefersReducedMotion(): boolean {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
