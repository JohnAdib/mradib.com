"use client";

import { useState } from "react";
import { CopyButton } from "@/components/copy-button";
import { groupsFor, scoreForAll } from "@/data/resume-checklist";
import { useChecklistStore } from "@/lib/checklist/use-checklist-store";
import type { LanguageLocale } from "@/lib/languages/locale";
import { checkedSlugs } from "@/lib/resume-review/checked-slugs";
import { shareUrl } from "@/lib/resume-review/share-url";
import { FlagRow } from "./flag-row";
import { ResumeScorecard } from "./resume-scorecard";
import { ScoreGauge } from "./score-gauge";
import type { IScorecardCopy } from "./scorecard-copy";

const BUILDER_KEY = "resume-review-builder";

/** The reviewer view: flag problems, watch the score, copy the share link. */
export function ReviewBuilder({
	locale,
	copy,
}: {
	locale: LanguageLocale;
	copy: IScorecardCopy;
}) {
	const store = useChecklistStore(BUILDER_KEY);
	const [preview, setPreview] = useState(false);

	const flagged = [...checkedSlugs(store.checked)];
	const score = scoreForAll(new Set(flagged));

	function clearAll() {
		for (const slug of flagged) {
			store.toggle(slug);
		}
	}

	if (preview) {
		return (
			<div>
				<button
					type="button"
					onClick={() => setPreview(false)}
					className="mb-6 text-sm font-medium text-accent-600 transition hover:text-accent-700 dark:text-accent-400"
				>
					{copy.backToEditing}
				</button>
				<ResumeScorecard flagged={flagged} locale={locale} copy={copy} />
			</div>
		);
	}

	return (
		<div>
			<div className="flex flex-col items-center text-center">
				<h1 className="font-display text-3xl font-bold text-zinc-800 sm:text-4xl dark:text-zinc-100">
					{copy.builderTitle}
				</h1>
				<p className="mt-2 max-w-md text-zinc-600 dark:text-zinc-400">
					{copy.builderIntro}
				</p>
			</div>

			<div className="mt-8 flex flex-col items-center gap-4 rounded-3xl bg-surface p-6 ring-1 ring-zinc-900/10 sm:flex-row sm:justify-between dark:bg-zinc-800/40 dark:ring-zinc-700/50">
				<div className="flex items-center gap-4">
					<ScoreGauge score={score} locale={locale} className="h-20 w-20" />
					<div className="text-start">
						<p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
							{copy.projectedLabel}
						</p>
						<p className="text-sm text-zinc-600 dark:text-zinc-400">
							{copy.flaggedCount(flagged.length)}
						</p>
					</div>
				</div>
				<div className="flex flex-wrap items-center justify-center gap-2">
					<CopyButton
						text={shareUrl(locale, flagged)}
						label={copy.copyLink}
						copiedLabel={copy.copied}
						className="bg-accent-500/10 text-accent-700 hover:bg-accent-500/20 dark:bg-accent-400/10 dark:text-accent-300"
					/>
					<button
						type="button"
						onClick={() => setPreview(true)}
						className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/5 dark:text-zinc-300 dark:hover:bg-zinc-800/60"
					>
						{copy.previewCta}
					</button>
				</div>
			</div>

			{flagged.length > 0 && (
				<div className="mt-4 text-center">
					<button
						type="button"
						onClick={clearAll}
						className="text-sm text-zinc-500 transition hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
					>
						{copy.clear}
					</button>
				</div>
			)}

			<div className="mt-10 space-y-8">
				{groupsFor(locale).map((group) => (
					<section key={group.id}>
						<h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
							{group.title}
						</h2>
						<div className="space-y-1">
							{group.items.map((item) => (
								<FlagRow
									key={item.slug}
									item={item}
									flagged={store.isChecked(item.slug)}
									onToggle={() => store.toggle(item.slug)}
								/>
							))}
						</div>
					</section>
				))}
			</div>
		</div>
	);
}
