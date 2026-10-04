import type { CSSProperties } from "react";
import type { ICategoricalChartData } from "@/data/ai-adoption/chart-types";
import { ChartFigure } from "./chart-figure";
import { ChartMotion } from "./chart-motion";
import { barPercent } from "./comparison-scale";

export function CategoricalBarChart({ data }: { data: ICategoricalChartData }) {
	return (
		<ChartFigure data={data}>
			<ChartMotion>
				<dl className="mt-8 space-y-6">
					{data.observations.map((point, index) => (
						<div
							key={point.label}
							className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-2"
						>
							<dt className="text-sm text-zinc-700 dark:text-zinc-300">
								{point.label}
							</dt>
							<dd className="text-sm font-semibold text-zinc-900 tabular-nums dark:text-zinc-100">
								{point.value.toLocaleString("en-GB")}
							</dd>
							<div
								aria-hidden="true"
								className="col-span-2 h-3 overflow-hidden rounded-sm bg-zinc-200/70 dark:bg-zinc-700/70"
							>
								<span
									data-chart-shape="horizontal-bar"
									className="block h-full rounded-sm bg-accent-700 dark:bg-accent-400"
									style={
										{
											width: `${barPercent(point.value, data.maximum)}%`,
											"--chart-group": Math.min(index, 4),
										} as CSSProperties
									}
								/>
							</div>
						</div>
					))}
				</dl>
				<p
					aria-hidden="true"
					className="mt-3 flex justify-between text-xs text-zinc-600 tabular-nums dark:text-zinc-400"
				>
					<span>0</span>
					<span>{data.maximum.toLocaleString("en-GB")}</span>
				</p>
			</ChartMotion>
		</ChartFigure>
	);
}
