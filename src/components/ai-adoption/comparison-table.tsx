import type { IComparisonData } from "@/data/ai-adoption/visuals";

export function ComparisonTable({ data }: { data: IComparisonData }) {
	return (
		<details className="mt-4 border-t border-zinc-200 pt-4 dark:border-zinc-700">
			<summary className="min-h-11 cursor-pointer py-2 text-sm font-medium text-accent-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-600 dark:text-accent-300">
				{data.approximate ? "View recorded counts" : "View exact counts"}
			</summary>
			<table className="mt-3 w-full text-sm text-zinc-700 dark:text-zinc-300">
				<caption className="sr-only">
					{data.title}.{" "}
					{data.approximate ? "Recorded counts." : "Exact counts."}
				</caption>
				<thead>
					<tr className="border-b border-zinc-200 text-left dark:border-zinc-700">
						<th scope="col" className="pb-2 pe-4 font-medium">
							Observation
						</th>
						<th scope="col" className="pb-2 text-right font-medium">
							{data.unit}
						</th>
					</tr>
				</thead>
				<tbody>
					{data.observations.map((observation) => (
						<tr key={observation.label}>
							<th scope="row" className="py-2 pe-4 text-left font-normal">
								{observation.label}
							</th>
							<td className="py-2 text-right tabular-nums">
								{observation.value.toLocaleString("en-GB")}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</details>
	);
}
