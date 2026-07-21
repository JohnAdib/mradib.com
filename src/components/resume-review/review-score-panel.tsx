import type { LanguageLocale } from "@/lib/languages/locale";
import { ScoreGauge } from "./score-gauge";
import type { IScorecardCopy } from "./scorecard-copy";

/** The builder's score panel: the live gauge and the projected score. A glow
 * panel so it matches the result hero. */
export function ReviewScorePanel({
	score,
	flaggedCount,
	locale,
	copy,
}: {
	score: number;
	flaggedCount: number;
	locale: LanguageLocale;
	copy: IScorecardCopy;
}) {
	return (
		<div className="relative mt-3 overflow-hidden rounded-2xl bg-zinc-100/70 p-4 ring-1 ring-zinc-900/10 sm:p-5 dark:bg-zinc-800/40 dark:ring-zinc-700/50">
			<div
				aria-hidden="true"
				className="absolute -top-16 -right-12 h-40 w-40 rounded-full bg-accent-500/10 blur-3xl"
			/>
			<div
				aria-hidden="true"
				className="absolute -bottom-20 -left-12 h-36 w-36 rounded-full bg-accent-400/10 blur-3xl"
			/>
			<div className="relative flex items-center justify-center gap-3">
				<ScoreGauge
					score={score}
					locale={locale}
					showLabel={false}
					glow
					className="h-16 w-16 shrink-0"
				/>
				<div className="text-start">
					<p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
						{copy.projectedLabel}
					</p>
					<p className="text-sm text-zinc-500 dark:text-zinc-400">
						{copy.flaggedCount(flaggedCount)}
					</p>
				</div>
			</div>
		</div>
	);
}
