import { ChevronRightIcon } from "@heroicons/react/20/solid";

export function TalksInvite() {
	return (
		<a
			id="invite"
			href="mailto:Mr.JohnAdib@Gmail.com"
			className="group flex scroll-mt-24 items-center gap-4 rounded-2xl border border-zinc-100 bg-white p-5 transition hover:border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/50"
		>
			<div className="min-w-0 flex-1">
				<h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
					Want me to speak at your event?
				</h2>
				<p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
					Talks and workshops on AI-first development, design systems, and
					engineering leadership. London based, happy to travel.
				</p>
			</div>
			<ChevronRightIcon className="h-5 w-5 flex-none text-zinc-300 transition group-hover:translate-x-0.5 group-hover:text-accent-500 dark:text-zinc-600" />
		</a>
	);
}
