"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { groupsFor, scoreForAll } from "@/data/resume-checklist";
import { useChecklistStore } from "@/lib/checklist/use-checklist-store";
import type { LanguageLocale } from "@/lib/languages/locale";
import { checkedSlugs } from "@/lib/resume-review/checked-slugs";
import { shareUrl } from "@/lib/resume-review/share-url";
import { CopyLinkButton } from "./copy-link-button";
import { FlagRow } from "./flag-row";
import { ResumeScorecard } from "./resume-scorecard";
import { ScoreGauge } from "./score-gauge";
import type { IScorecardCopy } from "./scorecard-copy";

const BUILDER_KEY = "resume-review-builder";
const NAME_KEY = "resume-review-name";

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
	const [name, setName] = useState("");

	useEffect(() => {
		try {
			setName(localStorage.getItem(NAME_KEY) ?? "");
		} catch {
			// Private mode can throw on read; leave the name empty.
		}
	}, []);

	function updateName(value: string) {
		const next = value.slice(0, 40);
		setName(next);
		try {
			localStorage.setItem(NAME_KEY, next);
		} catch {
			// Ignore quota / private-mode write failures.
		}
	}

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
				<ResumeScorecard
					flagged={flagged}
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
						"text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100",
					)}
				>
					{copy.builderTitle}
				</h1>
				<p className="mt-4 max-w-md text-zinc-600 dark:text-zinc-400">
					{copy.builderIntro}
				</p>
			</div>

			<div className="mt-8">
				<input
					type="text"
					value={name}
					onChange={(event) => updateName(event.target.value)}
					aria-label={copy.namePlaceholder}
					placeholder={copy.namePlaceholder}
					className="w-full rounded-2xl bg-surface px-4 py-3 text-center text-sm text-zinc-800 ring-1 ring-zinc-900/10 transition placeholder:text-zinc-400 focus:ring-2 focus:ring-accent-500 focus:outline-none dark:bg-zinc-800/40 dark:text-zinc-100 dark:ring-zinc-700/50"
				/>
			</div>

			<div className="mt-4 rounded-3xl bg-surface p-6 ring-1 ring-zinc-900/10 sm:p-7 dark:bg-zinc-800/40 dark:ring-zinc-700/50">
				<div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
					<div className="flex items-center gap-4">
						<ScoreGauge
							score={score}
							locale={locale}
							showLabel={false}
							className="h-24 w-24 shrink-0"
						/>
						<div className="text-start">
							<p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
								{copy.projectedLabel}
							</p>
							<p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
								{copy.flaggedCount(flagged.length)}
							</p>
						</div>
					</div>
					<div className="flex w-full flex-col items-stretch gap-2 sm:w-auto sm:items-end">
						<CopyLinkButton
							text={shareUrl(locale, flagged, name)}
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

			<div className="mt-12 space-y-10">
				{groupsFor(locale).map((group) => (
					<section key={group.id}>
						<h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
							{group.title}
						</h2>
						<div className="space-y-3">
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
