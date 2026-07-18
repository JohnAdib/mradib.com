export function TalksClosing() {
	return (
		<div className="relative mt-16 overflow-hidden rounded-3xl bg-zinc-100/70 px-8 py-12 text-center ring-1 ring-zinc-100 sm:mt-20 sm:py-14 dark:bg-zinc-800/40 dark:ring-zinc-700/50">
			<div
				aria-hidden="true"
				className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl"
			/>
			<div
				aria-hidden="true"
				className="absolute -bottom-28 -left-16 h-56 w-56 rounded-full bg-accent-400/10 blur-3xl"
			/>
			<div className="relative">
				<h2 className="mx-auto max-w-xl text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
					Bring these talks to your event.
				</h2>
				<p className="mx-auto mt-3 max-w-xl text-base text-zinc-600 dark:text-zinc-400">
					I speak on founding companies, AI-first development, and the
					leadership it takes to hold a team together. London based, happy to
					travel.
				</p>
				<a
					id="invite"
					href="mailto:Mr.JohnAdib@Gmail.com"
					className="mt-8 inline-flex scroll-mt-24 items-center gap-2 rounded-md bg-zinc-800 px-6 py-3 text-base font-semibold text-zinc-100 transition hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600"
				>
					Invite me to speak
				</a>
			</div>
		</div>
	);
}
