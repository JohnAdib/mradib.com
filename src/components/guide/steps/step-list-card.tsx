import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

interface IStepListCardProps {
	title: string;
	items: string[];
	tone: "do" | "dont";
}

const tones = {
	do: {
		Icon: CheckIcon,
		chip: "bg-accent-700/10 text-accent-700 dark:bg-accent-400/10 dark:text-accent-400",
	},
	dont: {
		Icon: XMarkIcon,
		chip: "bg-rose-600/10 text-rose-600 dark:bg-rose-400/10 dark:text-rose-400",
	},
};

/** One list card: what goes into a step, or what stays out. */
export function StepListCard({ title, items, tone }: IStepListCardProps) {
	const { Icon, chip } = tones[tone];
	return (
		<div className="rounded-3xl bg-surface p-5 ring-1 ring-zinc-900/10 sm:p-6 dark:bg-zinc-800/40 dark:ring-zinc-700/50">
			<h4 className="text-xs font-semibold tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
				{title}
			</h4>
			<ul className="mt-4 space-y-3">
				{items.map((item) => (
					<li
						key={item}
						className="flex gap-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300"
					>
						<span
							className={clsx(
								"mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full",
								chip,
							)}
						>
							<Icon aria-hidden="true" className="h-3.5 w-3.5" />
						</span>
						<span>{item}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
