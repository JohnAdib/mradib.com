import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

interface IStepListCardProps {
	title: string;
	items: string[];
	tone: "do" | "dont";
}

// Put in reads as accent, leave out as rose: the panel colour says it before the words.
const tones = {
	do: {
		Icon: CheckIcon,
		panel:
			"bg-accent-700/[0.07] ring-accent-700/15 dark:bg-accent-400/10 dark:ring-accent-400/20",
		title: "text-accent-800 dark:text-accent-300",
		chip: "bg-accent-700/15 text-accent-800 dark:bg-accent-400/20 dark:text-accent-300",
	},
	dont: {
		Icon: XMarkIcon,
		panel:
			"bg-rose-600/[0.06] ring-rose-600/15 dark:bg-rose-400/10 dark:ring-rose-400/20",
		title: "text-rose-800 dark:text-rose-300",
		chip: "bg-rose-600/15 text-rose-700 dark:bg-rose-400/20 dark:text-rose-300",
	},
};

/** One list panel: what goes into a step, or what stays out. */
export function StepListCard({ title, items, tone }: IStepListCardProps) {
	const { Icon, panel, title: titleClass, chip } = tones[tone];
	return (
		<div className={clsx("rounded-3xl p-5 ring-1 sm:p-6", panel)}>
			<h4
				className={clsx(
					"text-xs font-semibold tracking-wider uppercase",
					titleClass,
				)}
			>
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
