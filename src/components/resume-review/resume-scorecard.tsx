"use client";

import clsx from "clsx";
import Link from "next/link";
import { groupsFor, scoreForAll } from "@/data/resume-checklist";
import { encodeIssues } from "@/data/resume-checklist/share";
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
	flagged,
	locale,
	copy,
	name = "",
}: {
	flagged: string[];
	locale: LanguageLocale;
	copy: IScorecardCopy;
	name?: string;
}) {
	const store = useChecklistStore(
		`resume-review-resolved:${encodeIssues(flagged)}`,
	);
	const flaggedSet = new Set(flagged);

	const open = new Set<string>();
	for (const slug of flagged) {
		if (!store.isChecked(slug)) {
			open.add(slug);
		}
	}
	const score = scoreForAll(open);
	const fixedCount = flagged.length - open.size;

	const relevant = groupsFor(locale).filter((group) =>
		group.items.some((item) => flaggedSet.has(item.slug)),
	);
	const issueGroups = relevant.map((group) => ({
		...group,
		items: group.items.filter((item) => flaggedSet.has(item.slug)),
	}));

	let caption = copy.scoreCaptionNone;
	if (flagged.length > 0) {
		caption =
			open.size === 0 ? copy.allFixed : copy.scoreCaptionSome(open.size);
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
								"text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100",
							)}
						>
							{copy.resultGreeting(name)}
						</h1>
						<p className="mt-1 text-zinc-600 dark:text-zinc-400">
							{copy.resultGreetingSub}
						</p>
					</div>
				) : (
					<p className="text-xs font-semibold uppercase tracking-wide text-accent-600 dark:text-accent-400">
						{copy.resultKicker}
					</p>
				)}
				<ScoreGauge score={score} locale={locale} className="mt-6 h-44 w-44" />
				<p className="mt-4 max-w-sm text-zinc-600 dark:text-zinc-400">
					{caption}
				</p>
				{flagged.length > 0 && (
					<p className="mt-1 text-sm font-medium tabular-nums text-zinc-500 dark:text-zinc-400">
						{copy.fixedProgress(fixedCount, flagged.length)}
					</p>
				)}
			</div>

			{issueGroups.length > 0 && (
				<>
					<div className="mt-10">
						<h2 className="mb-3 text-sm font-bold text-zinc-800 dark:text-zinc-100">
							{copy.sectionsTitle}
						</h2>
						<GroupScoreList groups={relevant} open={open} locale={locale} />
					</div>
					<div className="mt-10">
						<h2 className="mb-4 text-sm font-bold text-zinc-800 dark:text-zinc-100">
							{copy.issuesTitle}
						</h2>
						<IssueGroups
							groups={issueGroups}
							isResolved={(slug) => store.isChecked(slug)}
							onToggle={store.toggle}
							copy={copy}
						/>
					</div>
				</>
			)}

			<div className="mt-12 text-center">
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
