import clsx from "clsx";
import type { IComparisonData } from "@/data/ai-adoption/visuals";
import { barPercent } from "./comparison-scale";

interface IComparisonRowProps {
	observation: IComparisonData["observations"][number];
	maximum: number;
	approximate?: boolean;
	isLater: boolean;
}

export function ComparisonRow({
	observation,
	maximum,
	approximate,
	isLater,
}: IComparisonRowProps) {
	const exact = observation.value.toLocaleString("en-GB");
	const display = approximate
		? `~${Math.round(observation.value / 1000)}k`
		: exact;
	return (
		<div className="relative">
			<dt className="min-h-8 pe-28 text-sm font-medium leading-5 text-zinc-700 dark:text-zinc-300">
				{observation.label}
			</dt>
			<dd>
				<span className="absolute end-0 top-0 text-2xl font-bold leading-8 tracking-tight text-zinc-900 tabular-nums sm:text-3xl dark:text-zinc-100">
					<span aria-hidden="true">{display}</span>
					<span className="sr-only">{exact}</span>
				</span>
				<span
					aria-hidden="true"
					className="mt-2 block h-8 overflow-hidden rounded-md bg-zinc-200/70 dark:bg-zinc-800"
				>
					<span
						style={{ width: `${barPercent(observation.value, maximum)}%` }}
						className={clsx(
							"block h-full rounded-e-md",
							isLater
								? "bg-accent-700 dark:bg-accent-400"
								: "bg-zinc-400 dark:bg-zinc-500",
						)}
					/>
				</span>
			</dd>
		</div>
	);
}
