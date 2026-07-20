"use client";

import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Reveal } from "@/components/reveal/reveal";
import { groupsFor, scoreForReview } from "@/data/resume-checklist";
import { encodeReview } from "@/data/resume-checklist/share";
import { useChecklistStore } from "@/lib/checklist/use-checklist-store";
import type { LanguageLocale } from "@/lib/languages/locale";
import { checklistPath } from "@/lib/resume-review/share-url";
import { isIssue } from "./grades";
import { GroupScoreList } from "./group-score-list";
import { IssueGroups } from "./issue-groups";
import type { IScorecardCopy } from "./scorecard-copy";
import { ScorecardHero } from "./scorecard-hero";
import { StickyScoreBar } from "./sticky-score-bar";

/** The recipient view: score first, strengths, section breakdown, then fixes. */
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
	const allGroups = groupsFor(locale);
	const strengths = allGroups
		.flatMap((group) => group.items)
		.filter((item) => review[item.slug] === 3);

	// A resolved issue counts as good; strengths and N/A pass through unchanged.
	const effective: Record<string, number> = {};
	let issueTotal = 0;
	let openCount = 0;
	for (const [slug, code] of Object.entries(review)) {
		if (isIssue(code)) {
			issueTotal += 1;
			if (store.isChecked(slug)) {
				continue;
			}
			openCount += 1;
		}
		effective[slug] = code;
	}
	const score = scoreForReview(effective);
	const fixedCount = issueTotal - openCount;

	const relevant = allGroups.filter((group) =>
		group.items.some((item) => isIssue(review[item.slug] ?? 0)),
	);
	const issueGroups = relevant.map((group) => ({
		...group,
		items: group.items
			.filter((item) => isIssue(review[item.slug] ?? 0))
			.sort((a, b) => (review[b.slug] ?? 0) - (review[a.slug] ?? 0)),
	}));

	let caption = copy.scoreCaptionNone;
	if (issueTotal > 0) {
		caption =
			openCount === 0 ? copy.allFixed : copy.scoreCaptionSome(openCount);
	}

	return (
		<div>
			<StickyScoreBar score={score} locale={locale} />

			<ScorecardHero
				score={score}
				name={name}
				caption={caption}
				progress={
					issueTotal > 0 ? copy.fixedProgress(fixedCount, issueTotal) : null
				}
				locale={locale}
				copy={copy}
			/>

			{strengths.length > 0 && (
				<Reveal className="mt-6">
					<h2 className="mb-2 text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
						{copy.strengthsTitle}
					</h2>
					<div className="flex flex-wrap gap-2">
						{strengths.map((item) => (
							<span
								key={item.slug}
								className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 px-2.5 py-1.5 text-xs font-medium text-emerald-700 ring-1 ring-emerald-500/20 dark:text-emerald-300"
							>
								<StarIcon className="h-3.5 w-3.5 text-emerald-500" />
								{item.title}
							</span>
						))}
					</div>
				</Reveal>
			)}

			{issueGroups.length > 0 && (
				<>
					<Reveal className="mt-6">
						<h2 className="mb-2 text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
							{copy.sectionsTitle}
						</h2>
						<GroupScoreList
							groups={relevant}
							review={effective}
							locale={locale}
						/>
					</Reveal>
					<Reveal className="mt-6">
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
					</Reveal>
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
