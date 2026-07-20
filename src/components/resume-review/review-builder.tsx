"use client";

import clsx from "clsx";
import { useState } from "react";
import { groupsFor } from "@/data/resume-checklist";
import type { LanguageLocale } from "@/lib/languages/locale";
import { shareUrl } from "@/lib/resume-review/share-url";
import { CopyLinkButton } from "./copy-link-button";
import { GradeLegend } from "./grade-legend";
import { GradeRow } from "./grade-row";
import { ResumeScorecard } from "./resume-scorecard";
import { ScoreGauge } from "./score-gauge";
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
	const [openSlug, setOpenSlug] = useState<string | null>(null);
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
				<p className="mt-2 max-w-md text-sm text-zinc-600 dark:text-zinc-400">
					{copy.builderIntro}
				</p>
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

			<div className="mt-3 rounded-2xl bg-surface p-4 ring-1 ring-zinc-900/10 sm:p-5 dark:bg-zinc-800/40 dark:ring-zinc-700/50">
				<div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
					<div className="flex items-center gap-3">
						<ScoreGauge
							score={score}
							locale={locale}
							showLabel={false}
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
					<div className="flex w-full flex-col items-stretch gap-2 sm:w-auto sm:items-end">
						<CopyLinkButton
							text={shareUrl(locale, review, name)}
							label={copy.copyLink}
							copiedLabel={copy.copied}
							className="w-full sm:w-auto"
						/>
						<button
							type="button"
							onClick={() => setPreview(true)}
							className="text-sm font-medium text-zinc-500 transition hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
						>
							{copy.previewCta}
						</button>
					</div>
				</div>
			</div>

			<GradeLegend copy={copy} />
			<p className="mt-1 text-center text-xs text-zinc-400 dark:text-zinc-500">
				{flaggedCount > 0 ? (
					<button
						type="button"
						onClick={clearAll}
						className="transition hover:text-zinc-600 dark:hover:text-zinc-300"
					>
						{copy.clear}
					</button>
				) : (
					copy.legendHint
				)}
			</p>

			<div className="mt-5 space-y-5">
				{groupsFor(locale).map((group) => (
					<section key={group.id}>
						<h2 className="mb-2 text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
							{group.title}
						</h2>
						<div className="space-y-1.5">
							{group.items.map((item) => (
								<GradeRow
									key={item.slug}
									item={item}
									grade={review[item.slug] ?? 0}
									isOpen={openSlug === item.slug}
									onToggle={() =>
										setOpenSlug(openSlug === item.slug ? null : item.slug)
									}
									onPick={(code) => {
										setGrade(item.slug, code);
										setOpenSlug(null);
									}}
									copy={copy}
								/>
							))}
						</div>
					</section>
				))}
			</div>
		</div>
	);
}
