import type { ReactNode } from "react";
import type { ITimeSeriesData } from "@/data/ai-adoption/chart-types";
import { ChartFigure } from "./chart-figure";
import { ChartMotion } from "./chart-motion";
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
			<ChartMotion>
				<TimelinePlot data={data} />
			</ChartMotion>
			<TimelineData data={data} />
			{children}
		</ChartFigure>
	);
}
