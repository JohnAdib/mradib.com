import clsx from "clsx";
import { type IResolvedGroup, scoreOfItems } from "@/data/resume-checklist";
import type { LanguageLocale } from "@/lib/languages/locale";
import { isIssue } from "./grades";
import { toneClasses, toneForScore } from "./score-bands";

/** Per section score tiles. Tapping one jumps to that section's issues. */
export function GroupScoreList({
	groups,
	review,
	locale,
}: {
	groups: IResolvedGroup[];
	review: Record<string, number>;
	locale: LanguageLocale;
}) {
	return (
		<div className="grid gap-2 sm:grid-cols-2">
			{groups.map((group) => {
				const score = scoreOfItems(group.items, review);
				const colors = toneClasses(toneForScore(score));
				const openCount = group.items.filter((item) =>
					isIssue(review[item.slug] ?? 0),
				).length;
				return (
					<a
						key={group.id}
						href={`#group-${group.id}`}
						className="flex items-center gap-2.5 rounded-xl bg-surface p-3 ring-1 ring-zinc-900/10 transition duration-200 hover:-translate-y-0.5 hover:bg-zinc-50 hover:shadow-md hover:shadow-zinc-900/5 dark:bg-zinc-800/40 dark:ring-zinc-700/50 dark:hover:bg-zinc-800/70"
					>
						<span
							className={clsx(
								"w-7 shrink-0 text-base font-bold tabular-nums",
								colors.text,
							)}
						>
							{score.toLocaleString(locale)}
						</span>
						<span className="min-w-0 flex-1">
							<span className="block truncate text-sm font-semibold text-zinc-800 dark:text-zinc-100">
								{group.title}
							</span>
							<span className="mt-1 block h-1.5 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-700">
								<span
									className={clsx("block h-full rounded-full", colors.bar)}
									style={{ width: `${score}%` }}
								/>
							</span>
						</span>
						{openCount > 0 ? (
							<span
								className={clsx(
									"shrink-0 rounded-full px-2 py-0.5 text-xs font-bold tabular-nums",
									colors.soft,
								)}
							>
								{openCount.toLocaleString(locale)}
							</span>
						) : null}
					</a>
				);
			})}
		</div>
	);
}
