"use client";

import Link from "next/link";
import { Reveal } from "@/components/reveal/reveal";
import { groupsFor, scoreForReview } from "@/data/resume-checklist";
import { encodeReview } from "@/data/resume-checklist/share";
import { useChecklistStore } from "@/lib/checklist/use-checklist-store";
import type { LanguageLocale } from "@/lib/languages/locale";
import { reviewPath } from "@/lib/resume-review/share-url";
import { isIssue } from "./grades";
import { GroupScoreList } from "./group-score-list";
import { IssueGroups } from "./issue-groups";
import type { IScorecardCopy } from "./scorecard-copy";
import { ScorecardHero } from "./scorecard-hero";
import { StickyScoreBar } from "./sticky-score-bar";

/** The recipient view: score first, section breakdown, then the fixes. */
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

	// A resolved issue counts as good; N/A passes through unchanged.
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
					href={reviewPath(locale)}
					className="text-sm font-medium text-accent-600 transition hover:text-accent-700 dark:text-accent-400"
				>
					{copy.startOwn}
				</Link>
			</div>
		</div>
	);
}
