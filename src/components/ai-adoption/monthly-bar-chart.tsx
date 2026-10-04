import type { ITimeSeriesData } from "@/data/ai-adoption/chart-types";
import { ChartFigure } from "./chart-figure";
import { barPercent } from "./comparison-scale";

export function MonthlyBarChart({ data }: { data: ITimeSeriesData }) {
	return (
		<ChartFigure data={data}>
			<dl className="mt-8 grid grid-cols-8 gap-1.5 sm:gap-3">
				{data.observations.map((observation) => (
					<div key={observation.date} className="flex min-w-0 flex-col">
						<dt className="order-2 mt-3 whitespace-nowrap text-center text-xs text-zinc-600 dark:text-zinc-400">
							{observation.label}
							<span className="sr-only"> {observation.date.slice(0, 4)}</span>
						</dt>
						<dd className="relative h-52 border-b border-zinc-300 dark:border-zinc-600">
							<span
								className="absolute inset-x-0 whitespace-nowrap text-center text-xs font-semibold text-zinc-900 tabular-nums sm:text-sm dark:text-zinc-100"
								style={{
									bottom: `calc(${barPercent(observation.value, data.maximum)}% + 6px)`,
								}}
							>
								{observation.value.toLocaleString("en-GB")}
							</span>
							<span
								aria-hidden="true"
								className="absolute inset-x-0 bottom-0 rounded-t-sm bg-accent-700 dark:bg-accent-400"
								style={{
									height: `${barPercent(observation.value, data.maximum)}%`,
								}}
							/>
						</dd>
					</div>
				))}
			</dl>
			<p className="mt-3 text-xs text-zinc-600 dark:text-zinc-400">
				Each bar starts at zero.
			</p>
		</ChartFigure>
	);
}
