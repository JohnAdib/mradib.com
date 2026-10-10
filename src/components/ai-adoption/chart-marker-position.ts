import type { ITimeSeriesData } from "@/data/ai-adoption/chart-types";
import { timelinePositions } from "./timeline-scale";

export function chartMarkerPosition(
	data: ITimeSeriesData,
	spacing: "bar" | "timeline",
): number | null {
	if (!data.monthMarker) return null;
	const index = data.observations.findIndex(({ date }) =>
		date.startsWith(`${data.monthMarker?.month}-`),
	);
	if (index < 0) return null;
	return spacing === "bar"
		? ((index + 0.5) / data.observations.length) * 100
		: timelinePositions(data.observations, data.maximum)[index].x;
}
