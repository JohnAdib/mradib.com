import { Container } from "@/components/container";
import { auditDimensions, auditDimensionsHeading } from "@/data/audit";

export function AuditDimensionIndex() {
	return (
		<Container className="mt-16 sm:mt-20">
			<p className="text-sm font-semibold tracking-wider text-accent-700 uppercase dark:text-accent-400">
				{auditDimensionsHeading.eyebrow}
			</p>
			<h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
				{auditDimensionsHeading.title}
			</h2>
			<p className="mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
				{auditDimensionsHeading.intro}
			</p>
			<ol className="mt-10 max-w-3xl list-none divide-y divide-zinc-900/5 dark:divide-white/5">
				{auditDimensions.map((dimension, index) => (
					<li
						key={dimension.name}
						className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 py-5 sm:gap-x-8 sm:py-7"
					>
						<span
							aria-hidden="true"
							className="font-display text-5xl font-semibold leading-none tabular-nums text-zinc-300 sm:text-7xl lg:text-8xl dark:text-zinc-700"
						>
							{String(index + 1).padStart(2, "0")}
						</span>
						<div>
							<h3 className="font-display text-xl font-semibold tracking-tight text-zinc-800 sm:text-2xl lg:text-3xl dark:text-zinc-100">
								{dimension.name}
							</h3>
							<p className="mt-1 max-w-xl text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
								{dimension.blurb}
							</p>
						</div>
					</li>
				))}
			</ol>
		</Container>
	);
}
