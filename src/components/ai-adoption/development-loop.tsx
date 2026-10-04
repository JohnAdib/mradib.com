import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid";
import { developmentLoopData } from "@/data/ai-adoption/visuals";

export function DevelopmentLoop() {
	return (
		<figure
			aria-labelledby="development-loop-title"
			aria-describedby="development-loop-caption"
			className="not-prose my-10 rounded-3xl bg-accent-700/[0.05] p-5 ring-1 ring-accent-700/15 sm:p-8 dark:bg-accent-400/[0.05] dark:ring-accent-400/20"
		>
			<h3
				id="development-loop-title"
				className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-100"
			>
				{developmentLoopData.title}
			</h3>
			<ol className="mt-6">
				{developmentLoopData.steps.map((step, index) => (
					<li
						key={step.title}
						className="grid grid-cols-[2rem_1fr] gap-x-3 border-b border-accent-800/10 py-4 first:pt-0 last:border-0 sm:grid-cols-[2rem_11rem_1fr] dark:border-accent-200/10"
					>
						<span
							aria-hidden="true"
							className="row-span-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent-800/10 text-xs font-bold text-accent-800 tabular-nums sm:row-span-1 dark:bg-accent-300/10 dark:text-accent-300"
						>
							{index + 1}
						</span>
						<p className="self-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
							{step.title}
						</p>
						<p className="col-start-2 mt-1 text-sm leading-6 text-zinc-600 sm:col-start-3 sm:mt-0 dark:text-zinc-400">
							{step.output}
						</p>
					</li>
				))}
			</ol>
			<p className="mt-4 flex items-center gap-3 text-sm font-semibold text-accent-800 dark:text-accent-300">
				<ArrowUturnLeftIcon aria-hidden="true" className="h-5 w-5 shrink-0" />
				{developmentLoopData.returnLabel}
			</p>
			<figcaption
				id="development-loop-caption"
				className="mt-5 text-xs leading-5 text-zinc-600 dark:text-zinc-400"
			>
				{developmentLoopData.caption}
			</figcaption>
		</figure>
	);
}
