export const aiDevelopmentSkills = [
	{
		id: "cook",
		name: "cook",
		phase: "Orchestrate",
		responsibility:
			"Delegates each phase to a focused skill. It carries the task from discovery through the plan approval, isolated implementation, evidence and review, rather than asking one prompt to do everything.",
		output: "A task carried through a defined sequence.",
	},
	{
		id: "sherlock",
		name: "sherlock",
		phase: "Discover",
		responsibility:
			"Detects the package manager, lint and format commands, types, build, test and coverage commands, CI names and PR conventions. It scopes checks to the repository and recognises work that already has a PR.",
		output: "The commands and conventions this task must satisfy.",
	},
	{
		id: "dig",
		name: "dig",
		phase: "Research",
		responsibility:
			"Reads the requirement, design, discussion and code in parallel. Readers return relevant findings so planning can connect the sources without carrying every document into the implementation context.",
		output: "Findings grounded in the task's sources.",
	},
	{
		id: "mastermind",
		name: "mastermind",
		phase: "Plan",
		responsibility:
			"Combines the research into the intended behaviour and a bounded checklist in the task description. It stops for my approval before implementation, where a misunderstanding is still cheap to correct.",
		output: "An approved checklist for implementation and verification.",
	},
	{
		id: "michelin",
		name: "michelin",
		phase: "Implement and verify",
		responsibility:
			"Implements to the written standards, adds tests and runs lint, types, build, tests and coverage. It diagnoses failures and repeats the checks, then assesses correctness and edge cases against the requirement.",
		output: "Changed code, meaningful tests and fresh check results.",
	},
	{
		id: "mugshot",
		name: "mugshot",
		phase: "Capture",
		responsibility:
			"Re-examines the change, then exercises the affected interface in its actual screen. Separate workers claim separate iOS and Android devices, check feature flags and capture screenshots plus recordings for the task.",
		output: "Device evidence that a reviewer can inspect.",
	},
	{
		id: "parole",
		name: "parole",
		phase: "Review",
		responsibility:
			"Opens the PR, keeps it current, evaluates bot and human feedback, fixes CI and resolves justified review threads. It stops at the human merge decision rather than accepting its own work.",
		output: "A current PR with checks and review concerns addressed.",
	},
	{
		id: "saul",
		name: "saul",
		phase: "Communicate throughout",
		responsibility:
			"Shapes task updates, the PR body and review replies in my voice: short, direct, accurate and kind. It distinguishes a bot's suggestion from a person's question and explains the evidence behind a decision.",
		output: "Clear updates and review explanations throughout the task.",
	},
] as const;
