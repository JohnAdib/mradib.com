import type { IComparisonData } from "@/data/ai-adoption/visuals";
import { ComparisonRow } from "./comparison-row";
import { ComparisonTable } from "./comparison-table";

export function ComparisonChart({ data }: { data: IComparisonData }) {
	return (
		<figure
			aria-labelledby={`${data.id}-title`}
			aria-describedby={`${data.id}-caption`}
			className="not-prose my-10 rounded-3xl bg-surface p-5 ring-1 ring-zinc-200 sm:p-8 dark:bg-zinc-900/70 dark:ring-zinc-700/70"
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
			<dl className="mt-7 space-y-5">
				{data.observations.map((observation, index) => (
					<ComparisonRow
						key={observation.label}
						observation={observation}
						maximum={data.maximum}
						approximate={data.approximate}
						isLater={index === data.observations.length - 1}
					/>
				))}
			</dl>
			<div
				aria-hidden="true"
				className="mt-3 grid grid-cols-3 text-xs text-zinc-600 tabular-nums dark:text-zinc-400"
			>
				{data.axisLabels.map((label) => (
					<span
						key={label}
						className="text-center first:text-left last:text-right"
					>
						{label}
					</span>
				))}
			</div>
			<figcaption id={`${data.id}-caption`} className="mt-6 space-y-3">
				<p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
					{data.caption}
				</p>
				<p className="text-xs leading-5 text-zinc-600 dark:text-zinc-400">
					{data.methodology}
				</p>
			</figcaption>
			<ComparisonTable data={data} />
		</figure>
	);
}
