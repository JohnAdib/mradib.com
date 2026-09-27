import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import type { IPitchReference } from "@/data/pitch-deck";

/** One source, opening in a new tab without passing link equity. */
export function ReferenceCard({ reference }: { reference: IPitchReference }) {
	return (
		<a
			href={reference.url}
			target="_blank"
			rel="nofollow noopener noreferrer"
			className="group flex h-full flex-col justify-between gap-4 rounded-3xl bg-surface p-5 ring-1 ring-zinc-900/10 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-zinc-900/5 motion-reduce:transition-none dark:bg-zinc-800/40 dark:ring-zinc-700/50 dark:hover:bg-zinc-800/70"
		>
			<span>
				<span className="block text-xs font-semibold tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
					{reference.source}
				</span>
				<span className="mt-2 block text-base font-semibold text-zinc-800 transition-colors group-hover:text-accent-700 dark:text-zinc-100 dark:group-hover:text-accent-400">
					{reference.title}
				</span>
			</span>
			<span className="inline-flex items-center gap-1 text-sm font-medium text-accent-700 dark:text-accent-400">
				Read it
				<ArrowTopRightOnSquareIcon aria-hidden="true" className="h-4 w-4" />
			</span>
		</a>
	);
}
