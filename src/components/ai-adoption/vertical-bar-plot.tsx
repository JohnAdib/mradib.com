import type { CSSProperties } from "react";
import type { ITimeSeriesData } from "@/data/ai-adoption/chart-types";
import styles from "./chart.module.css";
import { ChartDateLabel } from "./chart-date-label";
import { barPercent } from "./comparison-scale";

export function VerticalBarPlot({
	data,
	snapshotDates,
}: {
	data: ITimeSeriesData;
	snapshotDates: boolean;
}) {
	return (
		<dl
			className="mt-8 grid gap-1 sm:gap-3"
			style={{
				gridTemplateColumns: `repeat(${data.observations.length}, minmax(0, 1fr))`,
			}}
		>
			{data.observations.map((point, index) => (
				<div key={point.date} className="flex min-w-0 flex-col">
					<dt
						className={`${styles.value} order-2 mt-3 whitespace-nowrap text-center text-zinc-600 dark:text-zinc-400`}
					>
						<ChartDateLabel point={point} snapshot={snapshotDates} />
					</dt>
					<dd className="relative h-52 border-b border-zinc-300 dark:border-zinc-600">
						<span
							data-chart-value
							className={`${styles.value} absolute ${snapshotDates ? "right-0" : "left-1/2 -translate-x-1/2"} w-max whitespace-nowrap font-semibold text-zinc-900 tabular-nums dark:text-zinc-100`}
							style={{
								bottom: `calc(${barPercent(point.value, data.maximum)}% + 6px)`,
							}}
						>
							{point.value.toLocaleString("en-GB")}
						</span>
						<span
							aria-hidden="true"
							data-chart-shape="bar"
							className="absolute inset-x-0 bottom-0 rounded-t-sm bg-accent-700 dark:bg-accent-400"
							style={
								{
									height: `${barPercent(point.value, data.maximum)}%`,
									"--chart-group": Math.floor(
										(index * 5) / data.observations.length,
									),
								} as CSSProperties
							}
						/>
					</dd>
				</div>
			))}
		</dl>
	);
}
