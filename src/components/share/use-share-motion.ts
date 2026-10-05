"use client";

import { type RefObject, useEffect } from "react";

type OrientationApi = typeof DeviceOrientationEvent & {
	requestPermission?: unknown;
};
const clamp = (value: number) => Math.max(-1, Math.min(1, value / 20));
const delta = (value: number, start: number) =>
	((value - start + 540) % 360) - 180;

export function useShareMotion(
	background: RefObject<HTMLDivElement | null>,
	card: RefObject<HTMLDivElement | null>,
) {
	useEffect(() => {
		const surfaceNode = background.current;
		const frameNode = card.current;
		if (!surfaceNode || !frameNode) return;
		const surface: HTMLDivElement = surfaceNode;
		const frame: HTMLDivElement = frameNode;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
		const touch = window.matchMedia("(pointer: coarse)");
		const orientation = window.DeviceOrientationEvent as
			| OrientationApi
			| undefined;
		let origin: { beta: number; gamma: number } | undefined;
		let animation: number | undefined;
		let idle: ReturnType<typeof setTimeout> | undefined;
		let listening = false;
		function reset() {
			origin = undefined;
			if (animation !== undefined) cancelAnimationFrame(animation);
			clearTimeout(idle);
			animation = undefined;
			delete surface.dataset.sensor;
			surface.style.transform = "";
			frame.style.removeProperty("--sensor-x");
			frame.style.removeProperty("--sensor-y");
		}
		function onOrientation(event: DeviceOrientationEvent) {
			if (
				document.hidden ||
				reduced.matches ||
				!Number.isFinite(event.beta) ||
				!Number.isFinite(event.gamma) ||
				event.beta === null ||
				event.gamma === null
			)
				return;
			origin ??= { beta: event.beta, gamma: event.gamma };
			const angle = ((window.screen.orientation?.angle ?? 0) * Math.PI) / 180;
			const horizontal = delta(event.gamma, origin.gamma);
			const vertical = delta(event.beta, origin.beta);
			const x = clamp(
				horizontal * Math.cos(angle) + vertical * Math.sin(angle),
			);
			const y = clamp(
				vertical * Math.cos(angle) - horizontal * Math.sin(angle),
			);
			if (animation !== undefined) cancelAnimationFrame(animation);
			animation = requestAnimationFrame(() => {
				animation = undefined;
				surface.dataset.sensor = "true";
				surface.style.transform = `translate3d(${-x * 14}px, ${-y * 14}px, 0)`;
				frame.style.setProperty("--sensor-x", `${-y * 2}deg`);
				frame.style.setProperty("--sensor-y", `${x * 2}deg`);
			});
			clearTimeout(idle);
			idle = setTimeout(reset, 1500);
		}
		function sync() {
			window.removeEventListener("deviceorientation", onOrientation);
			listening = false;
			reset();
			surface.dataset.paused = String(document.hidden || reduced.matches);
			// Permission-gated browsers use ambient drift, without extra controls or prompts.
			if (
				!document.hidden &&
				!reduced.matches &&
				touch.matches &&
				window.isSecureContext &&
				orientation &&
				typeof orientation.requestPermission !== "function"
			) {
				window.addEventListener("deviceorientation", onOrientation, {
					passive: true,
				});
				listening = true;
			}
		}
		sync();
		reduced.addEventListener("change", sync);
		touch.addEventListener("change", sync);
		document.addEventListener("visibilitychange", sync);
		window.screen.orientation?.addEventListener("change", reset);
		return () => {
			if (listening)
				window.removeEventListener("deviceorientation", onOrientation);
			reduced.removeEventListener("change", sync);
			touch.removeEventListener("change", sync);
			document.removeEventListener("visibilitychange", sync);
			window.screen.orientation?.removeEventListener("change", reset);
			reset();
		};
	}, [background, card]);
}
