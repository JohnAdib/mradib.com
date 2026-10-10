import type { ITimeSeriesData } from "@/data/ai-adoption/chart-types";
import { ChartFigure } from "./chart-figure";
import { ChartMotion } from "./chart-motion";
import { VerticalBarPlot } from "./vertical-bar-plot";

export function VerticalBarChart({
	data,
	snapshotDates = false,
}: {
	data: ITimeSeriesData;
	snapshotDates?: boolean;
}) {
	return (
		<ChartFigure data={data}>
			<ChartMotion>
				<VerticalBarPlot data={data} snapshotDates={snapshotDates} />
			</ChartMotion>
			<p className="mt-3 text-xs text-zinc-600 dark:text-zinc-400">
				Each bar starts at zero.
			</p>
		</ChartFigure>
	);
}
