import {
	ArrowTrendingUpIcon,
	ClockIcon,
	UserGroupIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType } from "react";
import type { IReorderRule, PitchSlideId } from "@/data/pitch-deck";

type IconType = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

const iconBySlide: Partial<Record<PitchSlideId, IconType>> = {
	traction: ArrowTrendingUpIcon as IconType,
	team: UserGroupIcon as IconType,
	solution: ClockIcon as IconType,
};

/** One reorder rule: when it applies, and what moves. */
export function RuleCard({ rule }: { rule: IReorderRule }) {
	const Icon = iconBySlide[rule.slideId] ?? (ClockIcon as IconType);
	return (
		<div className="rounded-3xl bg-surface p-6 ring-1 ring-zinc-900/10 dark:bg-zinc-800/40 dark:ring-zinc-700/50">
			<span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-700/10 text-accent-700 dark:bg-accent-400/10 dark:text-accent-400">
				<Icon aria-hidden={true} className="h-6 w-6" />
			</span>
			<h3 className="mt-5 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
				<a href={`#${rule.slideId}`} className="hover:underline">
					{rule.title}
				</a>
			</h3>
			<p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
				<span className="font-semibold text-zinc-800 dark:text-zinc-200">
					When:{" "}
				</span>
				{rule.when}
			</p>
			<p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
				<span className="font-semibold text-zinc-800 dark:text-zinc-200">
					Move:{" "}
				</span>
				{rule.move}
			</p>
		</div>
	);
}
