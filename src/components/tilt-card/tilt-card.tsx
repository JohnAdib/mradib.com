"use client";

import clsx from "clsx";
import { useRef, useState } from "react";

/**
 * Tilts its children in 3D toward the cursor on hover, snapping back to flat
 * on leave. Skips the effect under prefers-reduced-motion.
 */
export function TiltCard({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const [transform, setTransform] = useState<string>();

	function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			return;
		}
		const rect = ref.current?.getBoundingClientRect();
		if (!rect) {
			return;
		}
		const x = (event.clientX - rect.left) / rect.width - 0.5;
		const y = (event.clientY - rect.top) / rect.height - 0.5;
		setTransform(
			`perspective(800px) rotateX(${y * -12}deg) rotateY(${x * 12}deg)`,
		);
	}

	function handleMouseLeave() {
		setTransform(undefined);
	}

	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: decorative mouse-tracked tilt, not a control, no keyboard equivalent to add
		<div
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className={clsx("transition-transform duration-150 ease-out", className)}
			style={{ transform }}
		>
			{children}
		</div>
	);
}
