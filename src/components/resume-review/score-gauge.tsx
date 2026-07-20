"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import type { LanguageLocale } from "@/lib/languages/locale";
import { bandLabel, toneClasses, toneForScore } from "./score-bands";

const RADIUS = 52;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/**
 * Circular score gauge. The number and band label live inside the SVG so they
 * scale with the gauge at any size. The arc draws in from empty on mount and
 * animates on score changes; reduced motion snaps it. The number is always the
 * true score, so no-JS and first paint read correctly.
 */
export function ScoreGauge({
	score,
	locale,
	className,
	showLabel = true,
}: {
	score: number;
	locale: LanguageLocale;
	className?: string;
	showLabel?: boolean;
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
				className="h-full w-full"
				role="img"
				aria-label={`${score} / 100`}
			>
				<circle
					cx="60"
					cy="60"
					r={RADIUS}
					fill="none"
					strokeWidth="8"
					className="stroke-zinc-200 dark:stroke-zinc-700/60"
				/>
				<circle
					cx="60"
					cy="60"
					r={RADIUS}
					fill="none"
					strokeWidth="8"
					strokeLinecap="round"
					strokeDasharray={CIRCUMFERENCE}
					strokeDashoffset={offset}
					transform="rotate(-90 60 60)"
					className={clsx(
						colors.stroke,
						"transition-[stroke-dashoffset] duration-1000 ease-out motion-reduce:transition-none",
					)}
				/>
				<text
					x="60"
					y={showLabel ? 54 : 60}
					textAnchor="middle"
					dominantBaseline="central"
					fill="currentColor"
					fontSize="30"
					className={clsx("font-bold tabular-nums", colors.text)}
				>
					{score.toLocaleString(locale)}
				</text>
				{showLabel && (
					<text
						x="60"
						y="78"
						textAnchor="middle"
						dominantBaseline="central"
						fontSize="10"
						className="fill-zinc-500 font-semibold tracking-wide dark:fill-zinc-400"
					>
						{bandLabel(score, locale)}
					</text>
				)}
			</svg>
		</div>
	);
}
