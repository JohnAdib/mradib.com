import {
	interviewChartNote,
	interviewSegments,
} from "@/data/podcast/interview";

export function InterviewChart() {
	const total = interviewSegments.reduce(
		(sum, segment) => sum + segment.minutes,
		0,
	);
	return (
		<figure
			aria-labelledby="interview-chart-title"
			className="mt-9 rounded-3xl bg-zinc-900/[0.025] p-6 ring-1 ring-zinc-900/10 sm:p-8 dark:bg-zinc-800/40 dark:ring-zinc-700/50"
		>
			<h3
				id="interview-chart-title"
				className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"
			>
				Live coding and technical discussion
			</h3>
			<div
				aria-hidden="true"
				className="mt-7 flex h-5 gap-1 overflow-hidden rounded-full"
			>
				{interviewSegments.map((segment) => (
					<span
						key={segment.label}
						className={segment.color}
						style={{ flex: segment.minutes / total }}
					/>
				))}
			</div>
			<ul className="mt-6 grid gap-5 sm:grid-cols-3">
				{interviewSegments.map((segment) => (
					<li
						key={segment.label}
						className="flex items-center justify-between gap-4 sm:block"
					>
						<div>
							<span
								className={`mr-2 inline-block size-2.5 rounded-full ${segment.color}`}
							/>
							<span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
								{segment.label}
							</span>
							<p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
								{segment.detail}
							</p>
						</div>
						<p className="shrink-0 text-2xl font-semibold tabular-nums sm:mt-3 text-zinc-800 dark:text-zinc-100">
							{segment.minutes}
							<span className="ml-1 text-xs font-normal">min</span>
						</p>
					</li>
				))}
			</ul>
			<figcaption className="mt-6 text-xs leading-6 text-zinc-500 dark:text-zinc-400">
				{interviewChartNote}
			</figcaption>
		</figure>
	);
}
