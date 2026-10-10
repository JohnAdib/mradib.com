import Link from "next/link";
import { Reveal } from "@/components/reveal/reveal";
import type { ITalk } from "@/data/talks/talk-interface";

export function UpcomingTalks({ talks }: { talks: ITalk[] }) {
	if (!talks.length) return null;
	return (
		<section
			aria-labelledby="upcoming-talks"
			className="mt-16 max-w-3xl sm:mt-20"
		>
			<h2
				id="upcoming-talks"
				className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
			>
				Upcoming talks
			</h2>
			<div className="mt-6 grid gap-4">
				{talks.map((talk) => (
					<Reveal key={talk.slug}>
						<Link
							href={talk.path ?? "/talks"}
							className="group block rounded-3xl bg-surface p-6 ring-1 ring-zinc-200 transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none dark:bg-zinc-800/40 dark:ring-zinc-700/50"
						>
							<p className="text-xs font-medium text-accent-700 dark:text-accent-400">
								Event details TBC
							</p>
							<h3 className="mt-3 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
								{talk.title}
							</h3>
							<p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
								{talk.summary}
							</p>
							<span className="mt-5 inline-block text-sm font-semibold text-zinc-800 dark:text-zinc-100">
								Explore the talk &rarr;
							</span>
						</Link>
					</Reveal>
				))}
			</div>
		</section>
	);
}
