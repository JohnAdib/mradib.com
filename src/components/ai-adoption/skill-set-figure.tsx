import { aiDevelopmentSkills } from "@/data/ai-adoption/skills";

export function SkillSetFigure() {
	return (
		<figure
			aria-labelledby="skill-set-title"
			aria-describedby="skill-set-caption"
			className="not-prose my-10 rounded-3xl bg-surface p-5 ring-1 ring-zinc-200 sm:p-8 dark:bg-zinc-900/70 dark:ring-zinc-700/70"
		>
			<h3
				id="skill-set-title"
				className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-100"
			>
				The {aiDevelopmentSkills.length} skills behind the workflow
			</h3>
			<ol className="mt-7 divide-y divide-zinc-200 dark:divide-zinc-700">
				{aiDevelopmentSkills.map((skill, index) => (
					<li key={skill.id} className="py-6 first:pt-0 last:pb-0">
						<div className="flex items-center gap-3">
							<span
								aria-hidden="true"
								className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent-500/10 text-xs font-bold text-accent-800 tabular-nums dark:text-accent-300"
							>
								{String(index + 1).padStart(2, "0")}
							</span>
							<h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
								{skill.name}
							</h4>
						</div>
						<p className="mt-3 text-xs font-semibold tracking-wide text-accent-800 uppercase dark:text-accent-300">
							{skill.phase}
						</p>
						<p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
							{skill.responsibility}
						</p>
						<p className="mt-3 text-sm leading-6 text-zinc-900 dark:text-zinc-100">
							<span className="font-semibold">Handoff: </span>
							{skill.output}
						</p>
					</li>
				))}
			</ol>
			<figcaption
				id="skill-set-caption"
				className="mt-7 text-xs leading-5 text-zinc-600 dark:text-zinc-400"
			>
				Cook coordinates the lifecycle and saul works throughout it. The other
				skills handle focused stages; worktree setup and cleanup belong to the
				lifecycle.
			</figcaption>
		</figure>
	);
}
