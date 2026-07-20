import type { LanguageLocale } from "@/lib/languages/locale";
import { CopyLinkButton } from "./copy-link-button";
import { ScoreGauge } from "./score-gauge";
import type { IScorecardCopy } from "./scorecard-copy";

/** The builder's score panel: the live gauge and the one primary action, copy
 * the share link. A glow panel so it matches the result hero. */
export function ReviewScorePanel({
	score,
	flaggedCount,
	shareText,
	locale,
	copy,
}: {
	score: number;
	flaggedCount: number;
	shareText: string;
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
			<div className="relative flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
				<div className="flex items-center gap-3">
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
				<CopyLinkButton
					text={shareText}
					label={copy.copyLink}
					copiedLabel={copy.copied}
					className="w-full sm:w-auto"
				/>
			</div>
		</div>
	);
}
