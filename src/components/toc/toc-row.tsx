import clsx from "clsx";
import type { ITocProgress } from "./interface";

function CheckIcon(props: React.ComponentPropsWithoutRef<"svg">) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
			/>
		</svg>
	);
}

export function TocRow({
	id,
	title,
	index,
	active = false,
	showNumber = true,
	progress,
}: {
	id: string;
	title: string;
	index: number;
	active?: boolean;
	showNumber?: boolean;
	progress?: ITocProgress;
}): JSX.Element {
	const hasProgress = progress !== undefined && progress.total > 0;
	const isComplete = hasProgress && progress.done === progress.total;
	const counter = hasProgress
		? `${progress.done.toLocaleString("fa-IR")}/${progress.total.toLocaleString("fa-IR")}`
		: null;

	return (
		<a
			href={`#${id}`}
			aria-current={active ? "true" : undefined}
			className={clsx(
				"flex items-center justify-between gap-3 py-1.5 text-sm leading-6 no-underline transition-colors",
				active
					? "font-medium text-accent-700 dark:text-accent-400"
					: "text-zinc-700 hover:text-accent-600 dark:text-zinc-300 dark:hover:text-accent-400",
			)}
		>
			<span className="flex min-w-0 items-baseline gap-2">
				{showNumber && (
					<span className="shrink-0 tabular-nums text-zinc-400 dark:text-zinc-500">
						{(index + 1).toLocaleString("fa-IR")}.
					</span>
				)}
				<span className="truncate">{title}</span>
			</span>
			{isComplete && (
				<CheckIcon className="size-4 shrink-0 text-green-600 dark:text-green-500" />
			)}
			{hasProgress && !isComplete && (
				<span className="shrink-0 rounded-full bg-zinc-100 px-2 py-0.5 text-xs tabular-nums text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
					{counter}
				</span>
			)}
		</a>
	);
}
