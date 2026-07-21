"use client";

import clsx from "clsx";
import { useState } from "react";
import { groupsFor } from "@/data/resume-checklist";
import type { LanguageLocale } from "@/lib/languages/locale";
import { shareUrl } from "@/lib/resume-review/share-url";
import { ConfirmDialog } from "./confirm-dialog";
import { GradeLegend } from "./grade-legend";
import { GradeRow } from "./grade-row";
import { nextGrade } from "./grades";
import { ResumeScorecard } from "./resume-scorecard";
import { ReviewScorePanel } from "./review-score-panel";
import type { IScorecardCopy } from "./scorecard-copy";
import { useReviewState } from "./use-review-state";

/** The reviewer view: grade each item, watch the score, copy the share link. */
export function ReviewBuilder({
	locale,
	copy,
}: {
	locale: LanguageLocale;
	copy: IScorecardCopy;
}) {
	const [preview, setPreview] = useState(false);
	const [confirmClear, setConfirmClear] = useState(false);
	const { name, setName, review, setGrade, clearAll, score, flaggedCount } =
		useReviewState();

	if (preview) {
		return (
			<div>
				<button
					type="button"
					onClick={() => setPreview(false)}
					className="mb-5 text-sm font-medium text-accent-600 transition hover:text-accent-700 dark:text-accent-400"
				>
					{copy.backToEditing}
				</button>
				<ResumeScorecard
					review={review}
					name={name.trim()}
					locale={locale}
					copy={copy}
				/>
			</div>
		);
	}

	return (
		<div>
			<div className="flex flex-col items-center text-center">
				<h1
					className={clsx(
						locale === "fa-IR" ? "font-fa" : "font-display",
						"text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100",
					)}
				>
					{copy.builderTitle}
				</h1>
			</div>

			<div className="mt-5">
				<input
					type="text"
					value={name}
					onChange={(event) => setName(event.target.value)}
					aria-label={copy.namePlaceholder}
					placeholder={copy.namePlaceholder}
					className="w-full rounded-xl bg-surface px-4 py-2.5 text-center text-sm text-zinc-800 ring-1 ring-zinc-900/10 transition placeholder:text-zinc-400 focus:ring-2 focus:ring-accent-500 focus:outline-none dark:bg-zinc-800/40 dark:text-zinc-100 dark:ring-zinc-700/50"
				/>
			</div>

			<ReviewScorePanel
				score={score}
				flaggedCount={flaggedCount}
				shareText={shareUrl(locale, review, name)}
				locale={locale}
				copy={copy}
			/>

			<GradeLegend copy={copy} />

			<div className="mt-5 space-y-5">
				{groupsFor(locale).map((group) => (
					<section key={group.id}>
						<h2 className="mb-2 text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
							{group.title}
						</h2>
						<div className="space-y-2">
							{group.items.map((item) => (
								<GradeRow
									key={item.slug}
									item={item}
									grade={review[item.slug] ?? 0}
									guideHref={group.guideHref}
									onCycle={() =>
										setGrade(item.slug, nextGrade(review[item.slug] ?? 0))
									}
									copy={copy}
								/>
							))}
						</div>
					</section>
				))}
			</div>

			<div className="mt-6 flex items-center justify-center gap-4 text-sm">
				<button
					type="button"
					onClick={() => setPreview(true)}
					className="font-medium text-zinc-500 transition hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
				>
					{copy.previewCta}
				</button>
				{flaggedCount > 0 && (
					<button
						type="button"
						onClick={() => setConfirmClear(true)}
						className="font-medium text-zinc-400 transition hover:text-rose-600 dark:text-zinc-500 dark:hover:text-rose-400"
					>
						{copy.clear}
					</button>
				)}
			</div>

			<ConfirmDialog
				open={confirmClear}
				title={copy.clearTitle}
				body={copy.clearBody}
				confirmLabel={copy.clearConfirm}
				cancelLabel={copy.clearCancel}
				onConfirm={() => {
					clearAll();
					setConfirmClear(false);
				}}
				onClose={() => setConfirmClear(false)}
			/>
		</div>
	);
}
