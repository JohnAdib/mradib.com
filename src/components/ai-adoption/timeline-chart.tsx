import type { ReactNode } from "react";
import type { ITimeSeriesData } from "@/data/ai-adoption/chart-types";
import { ChartFigure } from "./chart-figure";
import { TimelineData } from "./timeline-data";
import { TimelinePlot } from "./timeline-plot";

export function TimelineChart({
	data,
	children,
}: {
	data: ITimeSeriesData;
	children?: ReactNode;
}) {
	return (
		<ChartFigure data={data}>
			<TimelinePlot data={data} />
			<TimelineData data={data} />
			{children}
		</ChartFigure>
	);
}
