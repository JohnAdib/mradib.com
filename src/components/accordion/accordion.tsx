import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

import type { JSX } from "react";

interface IAccordionProps {
	title: string;
	children: React.ReactNode;
	defaultOpen?: boolean;
	className?: string;
}

export function Accordion({
	title,
	children,
	defaultOpen,
	className,
}: IAccordionProps): JSX.Element {
	return (
		<details
			open={defaultOpen}
			className={clsx(
				"group rounded-2xl border border-zinc-100 bg-white px-5",
				"dark:border-zinc-700/40 dark:bg-zinc-900",
				className,
			)}
		>
			<summary
				className={clsx(
					"flex cursor-pointer list-none items-center justify-between gap-4 py-4",
					"text-base font-medium text-zinc-800 dark:text-zinc-100",
					"[&::-webkit-details-marker]:hidden",
				)}
			>
				<span>{title}</span>
				<ChevronDownIcon
					aria-hidden="true"
					className="h-5 w-5 flex-none text-zinc-500 transition-transform duration-200 group-open:rotate-180 dark:text-zinc-400"
				/>
			</summary>
			<div className="pb-5 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
				{children}
			</div>
		</details>
	);
}
