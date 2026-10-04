import type { ITimeSeriesData } from "@/data/ai-adoption/chart-types";
import { timelinePositions } from "./timeline-scale";

export function TimelinePlot({ data }: { data: ITimeSeriesData }) {
	const coordinates = timelinePositions(data.observations, data.maximum);
	const first = data.observations[0];
	const last = data.observations[data.observations.length - 1];
	const labels = data.labelDates ?? [first.date, last.date];
	const axisDates = data.axisDates ?? [first.date, last.date];
	return (
		<div className="mt-10 ms-9 me-2">
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
						points={coordinates.map(({ x, y }) => `${x},${y}`).join(" ")}
						fill="none"
						strokeWidth="2.5"
						vectorEffect="non-scaling-stroke"
						className="stroke-accent-700 dark:stroke-accent-400"
					/>
				</svg>
				{[0, data.maximum].map((value) => (
					<span
						key={value}
						className="absolute -start-9 text-xs text-zinc-600 tabular-nums dark:text-zinc-400"
						style={{ top: value === 0 ? "calc(100% - 8px)" : "-8px" }}
					>
						{value.toLocaleString("en-GB", { notation: "compact" })}
					</span>
				))}
				{data.observations.map((point, index) => {
					const { x, y } = coordinates[index];
					if (!labels.includes(point.date)) return null;
					return (
						<div key={point.date} aria-hidden="true">
							<span
								className="absolute size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-700 ring-2 ring-surface dark:bg-accent-400 dark:ring-zinc-900"
								style={{ left: `${x}%`, top: `${y}%` }}
							/>
							<span
								className="absolute whitespace-nowrap text-xs font-semibold text-zinc-900 tabular-nums dark:text-zinc-100"
								style={{
									left: `${x}%`,
									bottom: `calc(${100 - y}% + 9px)`,
									transform: `translateX(${index === 0 ? 0 : index === data.observations.length - 1 ? -100 : -50}%)`,
								}}
							>
								{point.value.toLocaleString("en-GB")}
							</span>
						</div>
					);
				})}
			</div>
			<div
				aria-hidden="true"
				className="relative mt-3 h-5 text-xs text-zinc-600 dark:text-zinc-400"
			>
				{axisDates.map((date, index) => {
					const pointIndex = data.observations.findIndex(
						(point) => point.date === date,
					);
					return (
						<span
							key={date}
							className="absolute whitespace-nowrap"
							style={{
								left: `${coordinates[pointIndex].x}%`,
								transform: `translateX(${index === 0 ? 0 : index === axisDates.length - 1 ? -100 : -50}%)`,
							}}
						>
							{data.observations[pointIndex].label}
						</span>
					);
				})}
			</div>
		</div>
	);
}
