import { Reveal } from "@/components/reveal/reveal";
import { talkTopics } from "@/data/talks/talk-topics";

export function TalksTopics() {
	return (
		<Reveal className="mt-16 border-t border-zinc-900/10 pt-12 sm:mt-20 sm:pt-16 dark:border-zinc-700/60">
			<p className="text-sm font-semibold tracking-wider text-accent-700 uppercase dark:text-accent-400">
				What I speak about
			</p>
			<h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
				Four things I keep coming back to.
			</h2>
			<p className="mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
				Picked from what I actually do, not what sounds good on a slide.
			</p>
			<div className="mt-12 grid gap-x-10 gap-y-12 sm:mt-14 sm:grid-cols-2">
				{talkTopics.map((topic, index) => (
					<div key={topic.slug} className="flex gap-5">
						<span
							aria-hidden="true"
							className="font-display text-5xl font-semibold leading-none text-zinc-300 dark:text-zinc-700"
						>
							{String(index + 1).padStart(2, "0")}
						</span>
						<div className="min-w-0">
							<h3 className="font-display text-xl font-semibold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
								{topic.title}
							</h3>
							<p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
								{topic.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</Reveal>
	);
}
