import { Container } from "@/components/container";
import { auditProblem } from "@/data/audit";

export function AuditProblem() {
	return (
		<Container className="mt-16 sm:mt-24">
			<div className="max-w-2xl">
				<p className="text-sm font-semibold tracking-wider text-accent-700 uppercase dark:text-accent-400">
					{auditProblem.eyebrow}
				</p>
				<ul className="mt-8 space-y-4">
					{auditProblem.pains.map((pain) => (
						<li
							key={pain}
							className="flex gap-4 text-lg text-zinc-600 dark:text-zinc-400"
						>
							<span
								aria-hidden="true"
								className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-accent-700/60 dark:bg-accent-400/60"
							/>
							{pain}
						</li>
					))}
				</ul>
				<p className="mt-10 font-display text-2xl font-semibold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
					{auditProblem.closer}{" "}
					<span className="italic text-accent-700 dark:text-accent-400">
						{auditProblem.closerAccent}
					</span>
				</p>
			</div>
		</Container>
	);
}
