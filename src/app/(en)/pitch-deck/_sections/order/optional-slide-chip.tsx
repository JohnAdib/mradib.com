import { PlusIcon } from "@heroicons/react/20/solid";
import type { IOptionalSlide } from "@/data/pitch-deck";

/** One optional slide and the case that earns it a place. */
export function OptionalSlideChip({ slide }: { slide: IOptionalSlide }) {
	return (
		<li className="flex items-start gap-3 rounded-2xl bg-surface px-4 py-3 ring-1 ring-zinc-900/10 dark:bg-zinc-800/40 dark:ring-zinc-700/50">
			<span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent-700/10 text-accent-700 dark:bg-accent-400/10 dark:text-accent-400">
				<PlusIcon aria-hidden="true" className="h-3.5 w-3.5" />
			</span>
			<span className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
				<span className="font-semibold text-zinc-800 dark:text-zinc-100">
					{slide.title}.{" "}
				</span>
				{slide.when}
			</span>
		</li>
	);
}
