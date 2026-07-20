import clsx from "clsx";
import { Button } from "@/components/button";
import type { LanguageLocale } from "@/lib/languages/locale";
import { reviewPath } from "@/lib/resume-review/share-url";
import type { IScorecardCopy } from "./scorecard-copy";

/** Shown at the result URL when there is no review link to render: a calm glow
 * panel that points the visitor to the reviewer builder. */
export function ReviewEmptyState({
	locale,
	copy,
}: {
	locale: LanguageLocale;
	copy: IScorecardCopy;
}) {
	return (
		<div className="relative overflow-hidden rounded-3xl bg-zinc-100/70 px-6 py-14 text-center ring-1 ring-zinc-900/10 dark:bg-zinc-800/40 dark:ring-zinc-700/50">
			<div
				aria-hidden="true"
				className="absolute -top-20 -right-16 h-56 w-56 rounded-full bg-accent-500/15 blur-3xl"
			/>
			<div
				aria-hidden="true"
				className="absolute -bottom-24 -left-16 h-52 w-52 rounded-full bg-accent-400/10 blur-3xl"
			/>
			<div className="relative flex flex-col items-center">
				<h1
					className={clsx(
						locale === "fa-IR" ? "font-fa" : "font-display",
						"text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100",
					)}
				>
					{copy.emptyTitle}
				</h1>
				<p className="mx-auto mt-2 max-w-sm text-sm text-zinc-600 dark:text-zinc-400">
					{copy.emptyBody}
				</p>
				<div className="mt-6">
					<Button href={reviewPath(locale)}>{copy.emptyCta}</Button>
				</div>
			</div>
		</div>
	);
}
