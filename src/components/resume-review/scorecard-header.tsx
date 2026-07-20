import clsx from "clsx";
import type { LanguageLocale } from "@/lib/languages/locale";
import type { IScorecardCopy } from "./scorecard-copy";

/** The result hero heading: a personal greeting when a name is present. */
export function ScorecardHeader({
	name,
	locale,
	copy,
}: {
	name: string;
	locale: LanguageLocale;
	copy: IScorecardCopy;
}) {
	if (!name) {
		return (
			<p className="text-xs font-semibold uppercase tracking-wide text-accent-600 dark:text-accent-400">
				{copy.resultKicker}
			</p>
		);
	}
	return (
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
	);
}
