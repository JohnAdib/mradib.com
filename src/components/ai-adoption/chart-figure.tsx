import type { ReactNode } from "react";
import type { IChartFigureData } from "@/data/ai-adoption/chart-types";
import styles from "./chart.module.css";

export function ChartFigure({
	data,
	children,
}: {
	data: IChartFigureData;
	children: ReactNode;
}) {
	return (
		<figure
			aria-labelledby={`${data.id}-title`}
			aria-describedby={`${data.id}-caption`}
			className={`${styles.figure} not-prose my-10 rounded-3xl bg-surface p-5 ring-1 ring-zinc-200 sm:p-8 dark:bg-zinc-900/70 dark:ring-zinc-700/70`}
		>
			<h3
				id={`${data.id}-title`}
				className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-100"
			>
				{data.title}
			</h3>
			<p className="mt-2 text-xs font-medium tracking-wide text-zinc-600 uppercase dark:text-zinc-400">
				{data.unit}
			</p>
			{children}
			<figcaption id={`${data.id}-caption`} className="mt-6 space-y-3">
				<p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
					{data.caption}
				</p>
				<p className="text-xs leading-5 text-zinc-600 dark:text-zinc-400">
					{data.methodology}
				</p>
			</figcaption>
		</figure>
	);
}
