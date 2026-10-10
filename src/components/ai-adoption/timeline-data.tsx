import type { ITimeSeriesData } from "@/data/ai-adoption/chart-types";

export function TimelineData({ data }: { data: ITimeSeriesData }) {
	return (
		<div className="sr-only">
			<table>
				<caption>{data.title}. Recorded observations.</caption>
				<thead>
					<tr>
						<th scope="col">Date</th>
						<th scope="col">{data.unit}</th>
					</tr>
				</thead>
				<tbody>
					{data.observations.map((point) => (
						<tr key={point.date}>
							<th scope="row">{point.date}</th>
							<td>{point.value.toLocaleString("en-GB")}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
