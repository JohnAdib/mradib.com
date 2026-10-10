import { type IMotionTokens, readMotionTokens } from "./motion-tokens";

/**
 * Opens and closes a native <details> with motion. The height eases between
 * the summary alone and the full panel while the panel fades and settles into
 * place. It stays a real <details> throughout, so it still works without
 * JavaScript, with find in page and with assistive technology. A click during
 * a run reverses from wherever the panel is, so it never jumps.
 */

const running = new WeakMap<HTMLDetailsElement, Animation[]>();
const closing = "data-closing";
const lift = "translateY(-0.5rem)";

function panelsOf(details: HTMLDetailsElement): HTMLElement[] {
	return Array.from(details.children).filter(
		(child): child is HTMLElement =>
			child instanceof HTMLElement && child.tagName !== "SUMMARY",
	);
}

function closedHeight(details: HTMLDetailsElement, summary: HTMLElement) {
	const style = getComputedStyle(details);
	const below =
		Number.parseFloat(style.paddingBottom) +
		Number.parseFloat(style.borderBottomWidth);
	const top = details.getBoundingClientRect().top;
	return summary.getBoundingClientRect().bottom - top + below;
}

function stop(details: HTMLDetailsElement): void {
	for (const animation of running.get(details) ?? []) {
		animation.cancel();
	}
	running.delete(details);
	details.removeAttribute(closing);
	details.style.removeProperty("overflow");
}

function expand(
	details: HTMLDetailsElement,
	from: number,
	fades: number[],
	tokens: IMotionTokens,
): Animation[] {
	details.open = true;
	const to = details.getBoundingClientRect().height;
	details.style.overflow = "hidden";
	const timing = { duration: tokens.base, easing: tokens.ease };
	const height = details.animate({ height: [`${from}px`, `${to}px`] }, timing);
	height.onfinish = () => stop(details);
	const panels = panelsOf(details).map((panel, index) =>
		panel.animate(
			{ opacity: [fades[index] ?? 0, 1], transform: [lift, "none"] },
			timing,
		),
	);
	return [height, ...panels];
}

function collapse(
	details: HTMLDetailsElement,
	summary: HTMLElement,
	from: number,
	fades: number[],
	tokens: IMotionTokens,
): Animation[] {
	const to = closedHeight(details, summary);
	details.setAttribute(closing, "");
	details.style.overflow = "hidden";
	const height = details.animate(
		{ height: [`${from}px`, `${to}px`] },
		{ duration: tokens.base, easing: tokens.ease, fill: "forwards" },
	);
	height.onfinish = () => {
		details.open = false;
		stop(details);
	};
	const fade: KeyframeAnimationOptions = {
		duration: tokens.fast,
		easing: tokens.ease,
		fill: "forwards",
	};
	const panels = panelsOf(details).map((panel, index) =>
		panel.animate(
			{ opacity: [fades[index] ?? 1, 0], transform: ["none", lift] },
			fade,
		),
	);
	return [height, ...panels];
}

export function toggleDetails(
	details: HTMLDetailsElement,
	summary: HTMLElement,
): void {
	const tokens = readMotionTokens(details);
	const from = details.getBoundingClientRect().height;
	const fades = panelsOf(details).map((panel) =>
		details.open ? Number.parseFloat(getComputedStyle(panel).opacity) : 0,
	);
	const shouldClose = details.open && !details.hasAttribute(closing);
	stop(details);
	running.set(
		details,
		shouldClose
			? collapse(details, summary, from, fades, tokens)
			: expand(details, from, fades, tokens),
	);
}
