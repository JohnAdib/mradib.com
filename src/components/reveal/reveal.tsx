"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

/**
 * Reveals its children on scroll. The content is rendered in the SSR HTML
 * (visible without JS, see the noscript fallback in the about page), and the
 * hidden-then-slide-in animation is layered on only once JavaScript observes
 * the element entering the viewport. Motion is disabled under
 * prefers-reduced-motion by reveal.css.
 */
export function Reveal({
	className,
	delay,
	children,
}: {
	className?: string;
	delay?: number;
	children: React.ReactNode;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) {
			return;
		}
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0]?.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
		);
		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={clsx("reveal-on-scroll", isVisible && "is-visible", className)}
			style={delay ? { transitionDelay: `${delay}ms` } : undefined}
		>
			{children}
		</div>
	);
}
