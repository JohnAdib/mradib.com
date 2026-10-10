import type { IChartObservation } from "@/data/ai-adoption/chart-types";

export function ChartDateLabel({
	point,
	snapshot,
}: {
	point: IChartObservation;
	snapshot: boolean;
}) {
	const date = new Date(`${point.date}T00:00:00Z`);
	const parts = point.label.split(" ");
	const label = new Intl.DateTimeFormat("en-GB", {
		day: snapshot ? "numeric" : undefined,
		month: "long",
		year: "numeric",
		timeZone: "UTC",
	}).format(date);
	return (
		<time dateTime={point.date}>
			<span className="sr-only">{label}</span>
			<span aria-hidden="true">
				{snapshot ? (
					<>
						<span className="block">{parts[0]}</span>
						<span className="block">{parts[1]}</span>
					</>
				) : (
					point.label
				)}
			</span>
		</time>
	);
}
