"use client";

import clsx from "clsx";
import { useEffect, useRef } from "react";

type PointerTracking = "element" | "viewport";

const TRACKING_TRANSITION = "transform 140ms ease-out";
const RESET_TRANSITION = "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)";

function tiltTransform(x: number, y: number, maxTilt: number) {
	return `perspective(800px) rotateX(${y * -maxTilt}deg) rotateY(${x * maxTilt}deg) rotateZ(0deg)`;
}

function restingTransform(restingRotate: number) {
	return `perspective(800px) rotateX(0deg) rotateY(0deg) rotateZ(${restingRotate}deg)`;
}

/**
 * Tilts its children in 3D toward the cursor. It can track either its own
 * bounds or the full viewport, and skips motion under prefers-reduced-motion.
 */
export function TiltCard({
	className,
	children,
	maxTilt = 12,
	restingRotate = 0,
	tracking = "element",
	disabled = false,
}: {
	className?: string;
	children: React.ReactNode;
	maxTilt?: number;
	restingRotate?: number;
	tracking?: PointerTracking;
	disabled?: boolean;
}) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (disabled && ref.current) {
			ref.current.style.transition = RESET_TRANSITION;
			ref.current.style.transform = restingTransform(restingRotate);
		}
		if (
			disabled ||
			tracking !== "viewport" ||
			window.matchMedia("(prefers-reduced-motion: reduce)").matches
		) {
			return;
		}

		let animationFrame: number | undefined;
		let normalizedX = 0;
		let normalizedY = 0;

		function updateTransform() {
			animationFrame = undefined;
			const element = ref.current;
			if (!element) {
				return;
			}

			element.style.transition = TRACKING_TRANSITION;
			element.style.transform = tiltTransform(
				normalizedX,
				normalizedY,
				maxTilt,
			);
		}

		function handleViewportPointerMove(event: PointerEvent) {
			if (event.pointerType !== "mouse") {
				return;
			}

			normalizedX = event.clientX / window.innerWidth - 0.5;
			normalizedY = event.clientY / window.innerHeight - 0.5;
			if (animationFrame === undefined) {
				animationFrame = window.requestAnimationFrame(updateTransform);
			}
		}

		function resetTransform() {
			if (animationFrame !== undefined) {
				window.cancelAnimationFrame(animationFrame);
				animationFrame = undefined;
			}
			if (ref.current) {
				ref.current.style.transition = RESET_TRANSITION;
				ref.current.style.transform = restingTransform(restingRotate);
			}
		}

		window.addEventListener("pointermove", handleViewportPointerMove, {
			passive: true,
		});
		window.addEventListener("blur", resetTransform);
		document.documentElement.addEventListener("pointerleave", resetTransform);

		return () => {
			window.removeEventListener("pointermove", handleViewportPointerMove);
			window.removeEventListener("blur", resetTransform);
			document.documentElement.removeEventListener(
				"pointerleave",
				resetTransform,
			);
			if (animationFrame !== undefined) {
				window.cancelAnimationFrame(animationFrame);
			}
		};
	}, [disabled, maxTilt, restingRotate, tracking]);

	function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
		if (
			disabled ||
			tracking !== "element" ||
			window.matchMedia("(prefers-reduced-motion: reduce)").matches
		) {
			return;
		}
		const rect = ref.current?.getBoundingClientRect();
		const element = ref.current;
		if (!rect || !element) {
			return;
		}
		const x = (event.clientX - rect.left) / rect.width - 0.5;
		const y = (event.clientY - rect.top) / rect.height - 0.5;
		element.style.transition = TRACKING_TRANSITION;
		element.style.transform = tiltTransform(x, y, maxTilt);
	}

	function handleMouseLeave() {
		if (!disabled && tracking === "element" && ref.current) {
			ref.current.style.transition = RESET_TRANSITION;
			ref.current.style.transform = restingTransform(restingRotate);
		}
	}

	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: decorative mouse-tracked tilt, not a control, no keyboard equivalent to add
		<div
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className={clsx("transition-transform duration-150 ease-out", className)}
			style={{
				transition: TRACKING_TRANSITION,
				transform: restingTransform(restingRotate),
				transformStyle: "preserve-3d",
				willChange: "transform",
			}}
		>
			{children}
		</div>
	);
}
