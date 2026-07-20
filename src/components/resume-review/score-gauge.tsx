"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import type { LanguageLocale } from "@/lib/languages/locale";
import { bandLabel, toneClasses, toneForScore } from "./score-bands";

const RADIUS = 52;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/**
 * Circular score gauge. The arc draws in from empty on mount and animates
 * whenever the score changes; reduced motion snaps it. The number is always
 * the true score so no-JS and first paint read correctly.
 */
export function ScoreGauge({
	score,
	locale,
	className,
}: {
	score: number;
	locale: LanguageLocale;
	className?: string;
}) {
	const [shown, setShown] = useState(false);
	useEffect(() => {
		const frame = requestAnimationFrame(() => setShown(true));
		return () => cancelAnimationFrame(frame);
	}, []);

	const colors = toneClasses(toneForScore(score));
	const offset = CIRCUMFERENCE * (1 - (shown ? score : 0) / 100);

	return (
		<div className={clsx("relative", className)}>
			<svg
				viewBox="0 0 120 120"
				className="h-full w-full -rotate-90"
				role="img"
				aria-label={`${score} out of 100`}
			>
				<circle
					cx="60"
					cy="60"
					r={RADIUS}
					fill="none"
					strokeWidth="9"
					className="stroke-zinc-200 dark:stroke-zinc-700"
				/>
				<circle
					cx="60"
					cy="60"
					r={RADIUS}
					fill="none"
					strokeWidth="9"
					strokeLinecap="round"
					strokeDasharray={CIRCUMFERENCE}
					strokeDashoffset={offset}
					className={clsx(
						colors.stroke,
						"transition-[stroke-dashoffset] duration-1000 ease-out motion-reduce:transition-none",
					)}
				/>
			</svg>
			<div className="absolute inset-0 flex flex-col items-center justify-center">
				<span className={clsx("text-4xl font-bold tabular-nums", colors.text)}>
					{score.toLocaleString(locale)}
				</span>
				<span className="text-[0.7rem] font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
					{bandLabel(score, locale)}
				</span>
			</div>
		</div>
	);
}
