import {
	CommandLineIcon,
	RocketLaunchIcon,
	SparklesIcon,
	UserGroupIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType } from "react";
import { Reveal } from "@/components/reveal/reveal";
import { talkTopics } from "@/data/talks/talk-topics";

const icons: Record<string, ComponentType<{ className?: string }>> = {
	"co-founding": RocketLaunchIcon,
	technologies: CommandLineIcon,
	ai: SparklesIcon,
	leadership: UserGroupIcon,
};

export function TalksTopics() {
	return (
		<Reveal className="mt-16 sm:mt-20">
			<div className="relative overflow-hidden rounded-3xl bg-zinc-50 px-8 py-12 ring-1 ring-zinc-100 sm:px-12 sm:py-14 dark:bg-zinc-900 dark:ring-zinc-700/60">
				<div
					aria-hidden="true"
					className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl dark:bg-accent-500/15"
				/>
				<div
					aria-hidden="true"
					className="absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-accent-400/10 blur-3xl"
				/>
				<div className="relative">
					<p className="text-sm font-semibold tracking-wider text-accent-700 uppercase dark:text-accent-400">
						What I speak about
					</p>
					<h2 className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-white">
						Four things I keep coming back to.
					</h2>
					<p className="mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-300">
						Picked from what I actually do, not what sounds good on a slide.
					</p>
					<div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
						{talkTopics.map((topic) => {
							const Icon = icons[topic.slug];
							return (
								<div
									key={topic.slug}
									className="min-w-0 rounded-2xl bg-white p-5 ring-1 ring-zinc-100 dark:bg-white/5 dark:ring-white/10"
								>
									{Icon && (
										<Icon className="h-6 w-6 text-accent-700 dark:text-accent-400" />
									)}
									<p className="mt-3 text-sm font-semibold text-zinc-800 dark:text-white">
										{topic.title}
									</p>
									<p className="mt-2 text-sm leading-snug text-zinc-600 dark:text-zinc-300">
										{topic.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</Reveal>
	);
}
