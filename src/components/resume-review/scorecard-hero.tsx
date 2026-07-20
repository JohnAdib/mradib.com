import { Reveal } from "@/components/reveal/reveal";
import type { LanguageLocale } from "@/lib/languages/locale";
import { ScoreGauge } from "./score-gauge";
import type { IScorecardCopy } from "./scorecard-copy";
import { ScorecardHeader } from "./scorecard-header";

/** The result's first view: a glowing score panel that greets the person. */
export function ScorecardHero({
	score,
	name,
	caption,
	progress,
	locale,
	copy,
}: {
	score: number;
	name: string;
	caption: string;
	progress: string | null;
	locale: LanguageLocale;
	copy: IScorecardCopy;
}) {
	return (
		<Reveal>
			<div className="relative overflow-hidden rounded-3xl bg-zinc-100/70 px-5 py-8 text-center ring-1 ring-zinc-900/10 sm:py-9 dark:bg-zinc-800/40 dark:ring-zinc-700/50">
				<div
					aria-hidden="true"
					className="absolute -top-20 -right-16 h-56 w-56 rounded-full bg-accent-500/15 blur-3xl"
				/>
				<div
					aria-hidden="true"
					className="absolute -bottom-24 -left-16 h-52 w-52 rounded-full bg-accent-400/10 blur-3xl"
				/>
				<div className="relative flex flex-col items-center">
					<ScorecardHeader name={name} locale={locale} copy={copy} />
					<ScoreGauge
						score={score}
						locale={locale}
						glow
						className="mt-4 h-32 w-32"
					/>
					<p className="mt-3 max-w-sm text-sm text-zinc-600 dark:text-zinc-400">
						{caption}
					</p>
					{progress && (
						<p className="mt-1 text-xs font-medium tabular-nums text-zinc-500 dark:text-zinc-400">
							{progress}
						</p>
					)}
				</div>
			</div>
		</Reveal>
	);
}
