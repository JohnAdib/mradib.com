import { CheckIcon } from "@heroicons/react/24/outline";
import type { ReactNode } from "react";

interface PricingCardProps {
	name: string;
	priceDisplay: string;
	priceNote: string;
	foundingCopy?: string;
	slotsLine?: string;
	included: string[];
	guarantee: string;
	paperworkLine: string;
	addOnsLine: string;
	children?: ReactNode;
}

export function PricingCard({
	name,
	priceDisplay,
	priceNote,
	foundingCopy,
	slotsLine,
	included,
	guarantee,
	paperworkLine,
	addOnsLine,
	children,
}: PricingCardProps) {
	return (
		<div className="rounded-3xl bg-surface p-8 ring-1 ring-zinc-900/10 sm:p-10 dark:bg-zinc-800/40 dark:ring-zinc-700/50">
			<p className="text-sm font-semibold tracking-wider text-accent-700 uppercase dark:text-accent-400">
				{name}
			</p>
			<p className="mt-4 font-display text-5xl font-semibold tracking-tight text-zinc-800 sm:text-6xl dark:text-zinc-100">
				{priceDisplay}
			</p>
			<p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
				{priceNote}
			</p>
			{foundingCopy ? (
				<p className="mt-4 max-w-prose text-base text-zinc-600 dark:text-zinc-400">
					{foundingCopy}
				</p>
			) : null}
			<ul className="mt-8 space-y-3">
				{included.map((item) => (
					<li
						key={item}
						className="flex gap-3 text-base text-zinc-600 dark:text-zinc-400"
					>
						<CheckIcon
							aria-hidden
							className="h-6 w-6 flex-none text-accent-700 dark:text-accent-400"
						/>
						{item}
					</li>
				))}
			</ul>
			<p className="mt-8 border-t border-zinc-900/10 pt-6 text-base text-zinc-600 dark:border-zinc-700/50 dark:text-zinc-400">
				{guarantee}
			</p>
			{children ? <div className="mt-8">{children}</div> : null}
			{slotsLine ? (
				<p className="mt-3 text-sm font-medium text-zinc-800 dark:text-zinc-200">
					{slotsLine}
				</p>
			) : null}
			<p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
				{paperworkLine}
			</p>
			<p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
				{addOnsLine}
			</p>
		</div>
	);
}
