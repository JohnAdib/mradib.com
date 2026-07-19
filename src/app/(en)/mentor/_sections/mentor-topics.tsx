import {
	CommandLineIcon,
	DocumentCheckIcon,
	GlobeEuropeAfricaIcon,
} from "@heroicons/react/20/solid";
import type { ComponentType } from "react";
import { Container } from "@/components/container";

type IconType = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

interface ITopic {
	title: string;
	description: string;
	icon: IconType;
}

const topics: ITopic[] = [
	{
		title: "Software Engineering",
		description:
			"Architecture, code quality, and the career moves that take you from shipping tickets to leading the room.",
		icon: CommandLineIcon as IconType,
	},
	{
		title: "Resume Review",
		description:
			"A line by line rewrite that turns your resume into interviews, tuned to the roles you actually want.",
		icon: DocumentCheckIcon as IconType,
	},
	{
		title: "Tech Immigration",
		description:
			"The immigration playbook I lived myself, from visa strategy to landing and thriving in a new country.",
		icon: GlobeEuropeAfricaIcon as IconType,
	},
];

export function MentorTopics() {
	return (
		<Container className="mt-16 sm:mt-24">
			<h2 className="font-display text-2xl font-semibold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
				What we work on together
			</h2>
			<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
				{topics.map((topic) => (
					<div
						key={topic.title}
						className="rounded-3xl bg-surface p-6 ring-1 ring-zinc-900/10 transition hover:-translate-y-1 hover:shadow-lg dark:bg-zinc-800/40 dark:ring-zinc-700/50"
					>
						<span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-700/10 text-accent-700 dark:bg-accent-400/10 dark:text-accent-400">
							<topic.icon aria-hidden={true} className="h-6 w-6" />
						</span>
						<h3 className="mt-5 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
							{topic.title}
						</h3>
						<p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
							{topic.description}
						</p>
					</div>
				))}
			</div>
		</Container>
	);
}
