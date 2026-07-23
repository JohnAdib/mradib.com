import type { IAuditWeek } from "@/data/audit";

export function AuditProcessWeek({ week }: { week: IAuditWeek }) {
	return (
		<div>
			<p className="text-sm font-semibold tracking-wider text-accent-700 uppercase dark:text-accent-400">
				{week.label}
			</p>
			<h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
				{week.title}
			</h3>
			<ol className="mt-6">
				{week.steps.map((step, index) => {
					const last = index === week.steps.length - 1;
					const liClass = last
						? "relative flex gap-4"
						: "relative flex gap-4 pb-8";
					return (
						<li key={step.title} className={liClass}>
							{last ? null : (
								<span
									aria-hidden="true"
									className="absolute top-8 bottom-0 left-4 w-px -translate-x-1/2 bg-zinc-200 dark:bg-zinc-800"
								/>
							)}
							<span className="relative z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-accent-700/10 text-xs font-semibold text-accent-700 dark:bg-accent-400/10 dark:text-accent-400">
								{index + 1}
							</span>
							<div>
								<h4 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
									{step.title}
								</h4>
								<p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
									{step.detail}
								</p>
							</div>
						</li>
					);
				})}
			</ol>
		</div>
	);
}
