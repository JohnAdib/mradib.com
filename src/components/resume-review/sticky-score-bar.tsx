"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import type { LanguageLocale } from "@/lib/languages/locale";
import { bandLabel, toneClasses, toneForScore } from "./score-bands";

/** A floating score pill that slides in once the hero gauge scrolls away. */
export function StickyScoreBar({
	score,
	locale,
}: {
	score: number;
	locale: LanguageLocale;
}) {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		let ticking = false;
		function onScroll() {
			if (ticking) {
				return;
			}
			ticking = true;
			requestAnimationFrame(() => {
				setVisible(window.scrollY > 280);
				ticking = false;
			});
		}
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const colors = toneClasses(toneForScore(score));

	return (
		<div
			className={clsx(
				"pointer-events-none fixed inset-x-0 top-3 z-20 flex justify-center px-4 transition-transform duration-300 motion-reduce:transition-none",
				visible ? "translate-y-0" : "-translate-y-20",
			)}
		>
			<div className="pointer-events-auto flex items-center gap-3 rounded-full bg-surface/90 px-4 py-2 shadow-lg shadow-zinc-900/5 ring-1 ring-zinc-900/10 backdrop-blur dark:bg-zinc-800/90 dark:ring-zinc-700/50">
				<span className={clsx("text-base font-bold tabular-nums", colors.text)}>
					{score.toLocaleString(locale)}
				</span>
				<span className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
					{bandLabel(score, locale)}
				</span>
				<span className="h-1.5 w-16 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
					<span
						className={clsx("block h-full rounded-full", colors.bar)}
						style={{ width: `${score}%` }}
					/>
				</span>
			</div>
		</div>
	);
}
