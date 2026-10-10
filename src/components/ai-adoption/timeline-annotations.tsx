import type { ITimeSeriesData } from "@/data/ai-adoption/chart-types";

interface ITimelineAnnotations {
	data: ITimeSeriesData;
	coordinates: { x: number; y: number }[];
}

export function TimelineValueLabels({
	data,
	coordinates,
}: ITimelineAnnotations) {
	const first = data.observations[0];
	const last = data.observations[data.observations.length - 1];
	const labels = data.labelDates ?? [first.date, last.date];
	return data.observations.map((point, index) => {
		const { x, y } = coordinates[index];
		if (!labels.includes(point.date)) return null;
		return (
			<div key={point.date} aria-hidden="true">
				<span
					className="absolute size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-700 ring-2 ring-surface dark:bg-accent-400 dark:ring-zinc-900"
					style={{ left: `${x}%`, top: `${y}%` }}
				/>
				<span
					className="absolute z-20 whitespace-nowrap bg-surface text-xs font-semibold text-zinc-900 tabular-nums dark:bg-zinc-900 dark:text-zinc-100"
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
	});
}

export function TimelineAxis({ data, coordinates }: ITimelineAnnotations) {
	const first = data.observations[0];
	const last = data.observations[data.observations.length - 1];
	const axisDates = data.axisDates ?? [first.date, last.date];
	return (
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
	);
}
