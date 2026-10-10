import type { IChartMonthMarker } from "@/data/ai-adoption/chart-types";

export function ChartMarkerLabel({
	marker,
	position,
}: {
	marker?: IChartMonthMarker;
	position: number | null;
}) {
	if (!marker || position === null) return null;
	return (
		<div className="relative mb-4 h-5">
			<time
				dateTime={marker.month}
				data-chart-marker-label
				className="absolute whitespace-nowrap text-xs font-medium text-zinc-700 dark:text-zinc-300"
				style={{
					left: `calc(${position}% + var(--chart-gap, 0px) * ${position / 100 - 0.5})`,
					transform: `translateX(${position <= 35 ? 0 : position >= 65 ? -100 : -50}%)`,
				}}
			>
				{marker.label}
			</time>
		</div>
	);
}

export function ChartMarkerLine({ position }: { position: number | null }) {
	if (position === null) return null;
	return (
		<span
			aria-hidden="true"
			data-chart-marker
			className="pointer-events-none absolute top-0 z-10 h-52 -translate-x-1/2 border-s-2 border-dashed border-zinc-500 dark:border-zinc-400"
			style={{
				left: `calc(${position}% + var(--chart-gap, 0px) * ${position / 100 - 0.5})`,
			}}
		/>
	);
}
