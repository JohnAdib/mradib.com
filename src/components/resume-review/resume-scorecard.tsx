"use client";

import clsx from "clsx";
import Link from "next/link";
import { groupsFor, scoreForReview } from "@/data/resume-checklist";
import { encodeReview } from "@/data/resume-checklist/share";
import { useChecklistStore } from "@/lib/checklist/use-checklist-store";
import type { LanguageLocale } from "@/lib/languages/locale";
import { checklistPath } from "@/lib/resume-review/share-url";
import { GroupScoreList } from "./group-score-list";
import { IssueGroups } from "./issue-groups";
import { ScoreGauge } from "./score-gauge";
import type { IScorecardCopy } from "./scorecard-copy";
import { StickyScoreBar } from "./sticky-score-bar";

/** The recipient view: score first, then section breakdown, then the fixes. */
export function ResumeScorecard({
	review,
	locale,
	copy,
	name = "",
}: {
	review: Record<string, number>;
	locale: LanguageLocale;
	copy: IScorecardCopy;
	name?: string;
}) {
	const store = useChecklistStore(
		`resume-review-resolved:${encodeReview(review)}`,
	);
	const flaggedSlugs = Object.keys(review);

	// Resolved items drop to green so the score climbs as they get fixed.
	const effective: Record<string, number> = {};
	let openCount = 0;
	for (const slug of flaggedSlugs) {
		if (store.isChecked(slug)) {
			effective[slug] = 0;
		} else {
			effective[slug] = review[slug];
			openCount += 1;
		}
	}
	const score = scoreForReview(effective);
	const fixedCount = flaggedSlugs.length - openCount;

	const relevant = groupsFor(locale).filter((group) =>
		group.items.some((item) => (review[item.slug] ?? 0) > 0),
	);
	const issueGroups = relevant.map((group) => ({
		...group,
		items: group.items
			.filter((item) => (review[item.slug] ?? 0) > 0)
			.sort((a, b) => (review[b.slug] ?? 0) - (review[a.slug] ?? 0)),
	}));

	let caption = copy.scoreCaptionNone;
	if (flaggedSlugs.length > 0) {
		caption =
			openCount === 0 ? copy.allFixed : copy.scoreCaptionSome(openCount);
	}

	return (
		<div>
			<StickyScoreBar score={score} locale={locale} />

			<div className="flex flex-col items-center text-center">
				{name ? (
					<div>
						<h1
							className={clsx(
								locale === "fa-IR" ? "font-fa" : "font-display",
								"text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100",
							)}
						>
							{copy.resultGreeting(name)}
						</h1>
						<p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
							{copy.resultGreetingSub}
						</p>
					</div>
				) : (
					<p className="text-xs font-semibold uppercase tracking-wide text-accent-600 dark:text-accent-400">
						{copy.resultKicker}
					</p>
				)}
				<ScoreGauge score={score} locale={locale} className="mt-4 h-32 w-32" />
				<p className="mt-3 max-w-sm text-sm text-zinc-600 dark:text-zinc-400">
					{caption}
				</p>
				{flaggedSlugs.length > 0 && (
					<p className="mt-0.5 text-xs font-medium tabular-nums text-zinc-500 dark:text-zinc-400">
						{copy.fixedProgress(fixedCount, flaggedSlugs.length)}
					</p>
				)}
			</div>

			{issueGroups.length > 0 && (
				<>
					<div className="mt-6">
						<h2 className="mb-2 text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
							{copy.sectionsTitle}
						</h2>
						<GroupScoreList
							groups={relevant}
							review={effective}
							locale={locale}
						/>
					</div>
					<div className="mt-6">
						<h2 className="mb-2 text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
							{copy.issuesTitle}
						</h2>
						<IssueGroups
							groups={issueGroups}
							review={review}
							isResolved={(slug) => store.isChecked(slug)}
							onToggle={store.toggle}
							copy={copy}
						/>
					</div>
				</>
			)}

			<div className="mt-8 text-center">
				<Link
					href={checklistPath(locale)}
					className="text-sm font-medium text-accent-600 transition hover:text-accent-700 dark:text-accent-400"
				>
					{copy.startOwn}
				</Link>
			</div>
		</div>
	);
}
