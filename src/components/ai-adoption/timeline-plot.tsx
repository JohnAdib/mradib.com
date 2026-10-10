import type { ITimeSeriesData } from "@/data/ai-adoption/chart-types";
import { chartMarkerPosition } from "./chart-marker-position";
import { ChartMarkerLabel, ChartMarkerLine } from "./chart-month-marker";
import { TimelineAxis, TimelineValueLabels } from "./timeline-annotations";
import { timelinePositions } from "./timeline-scale";

export function TimelinePlot({ data }: { data: ITimeSeriesData }) {
	const coordinates = timelinePositions(data.observations, data.maximum);
	const markerPosition = chartMarkerPosition(data, "timeline");
	return (
		<div className="mt-10 ms-9 me-2">
			<ChartMarkerLabel marker={data.monthMarker} position={markerPosition} />
			<div className="relative h-52">
				<svg
					viewBox="0 0 100 100"
					preserveAspectRatio="none"
					aria-hidden="true"
					className="h-full w-full overflow-visible"
				>
					{[0, 50, 100].map((y) => (
						<line
							key={y}
							x1="0"
							x2="100"
							y1={y}
							y2={y}
							vectorEffect="non-scaling-stroke"
							className="stroke-zinc-200 dark:stroke-zinc-700"
						/>
					))}
					<polyline
						data-chart-shape="line"
						points={coordinates.map(({ x, y }) => `${x},${y}`).join(" ")}
						fill="none"
						strokeWidth="2.5"
						vectorEffect="non-scaling-stroke"
						className="stroke-accent-700 dark:stroke-accent-400"
					/>
				</svg>
				<ChartMarkerLine position={markerPosition} />
				{[0, data.maximum].map((value) => (
					<span
						key={value}
						className="absolute -start-9 text-xs text-zinc-600 tabular-nums dark:text-zinc-400"
						style={{ top: value === 0 ? "calc(100% - 8px)" : "-8px" }}
					>
						{value.toLocaleString("en-GB", { notation: "compact" })}
					</span>
				))}
				<TimelineValueLabels data={data} coordinates={coordinates} />
			</div>
			<TimelineAxis data={data} coordinates={coordinates} />
		</div>
	);
}
