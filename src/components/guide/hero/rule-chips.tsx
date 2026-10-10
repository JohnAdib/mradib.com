import { CheckIcon } from "@heroicons/react/20/solid";

/** The ground rules every slide follows, as a row of chips. */
export function RuleChips({ rules }: { rules: string[] }) {
	return (
		<ul className="flex flex-wrap gap-2">
			{rules.map((rule) => (
				<li
					key={rule}
					className="inline-flex items-center gap-2 rounded-full bg-surface py-1.5 pr-3.5 pl-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-900/10 dark:bg-zinc-800/40 dark:text-zinc-200 dark:ring-zinc-700/50"
				>
					<span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-700/10 text-accent-700 dark:bg-accent-400/10 dark:text-accent-400">
						<CheckIcon aria-hidden="true" className="h-3.5 w-3.5" />
					</span>
					{rule}
				</li>
			))}
		</ul>
	);
}
