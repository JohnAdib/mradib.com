import {
	monthlyActivityData,
	monthlyPrHistory,
	monthlyTicketData,
	verificationCheckpoints,
} from "./metrics";
import type { ArticleSectionData } from "./types";

const first = verificationCheckpoints[0];
const april = verificationCheckpoints[3];
const last = verificationCheckpoints[verificationCheckpoints.length - 1];
const earlierPrs = monthlyActivityData.observations.slice(0, 4);
const laterPrs = monthlyActivityData.observations.slice(4);
const earlierTickets = monthlyTicketData.observations.slice(0, 4);
const laterTickets = monthlyTicketData.observations.slice(4);
const earlierPrTotal = earlierPrs.reduce((sum, point) => sum + point.value, 0);
const laterPrTotal = laterPrs.reduce((sum, point) => sum + point.value, 0);
const earlierTicketTotal = earlierTickets.reduce(
	(sum, point) => sum + point.value,
	0,
);
const laterTicketTotal = laterTickets.reduce(
	(sum, point) => sum + point.value,
	0,
);
const priorYearPrs = monthlyPrHistory
	.filter((point) => point.date.startsWith("2025-"))
	.map((point) => point.value);

export const openingSections: ArticleSectionData[] = [
	{
		id: "ai-adoption-and-trust",
		title: "AI adoption brought verification into the development loop",
		tocTitle: "The starting point",
		kind: "adoption",
		paragraphs: [
			`I made AI-assisted development include test authoring, device verification and evidence for review. From May through August 2026, the app recorded ${laterPrTotal} merged PRs versus ${earlierPrTotal} in January through April, alongside a sustained build-out of the test suite. The earlier process had tests, but verification arrived too late: unit-test files moved from ${first.unitTestFiles} in January to ${april.unitTestFiles} in April, while Maestro stayed at ${first.uiFlowFiles} YAML files. Those device flows had existed since July 2024, yet they were not running in CI.`,
			"Finishing implementation left a familiar question: what else needed checking before we could release it? A nearby change could bring an already tested screen back into scope. Regressions weakened confidence, and manual QA carried repeated checks that did not leave an executable record for the next release. Useful backlog improvements became harder to schedule because the time between writing the code and trusting the result was difficult to predict.",
			`I started changing that process in May. By 2 October, the app had ${last.unitTestFiles.toLocaleString("en-GB")} unit-test files and ${last.uiFlowFiles} Maestro YAML files, with smoke runs, device captures, review automation and installable test builds around the work.`,
			"My goal was to make AI adoption useful all the way through development. I wanted the agent to understand the requirement, implement it, write meaningful tests, run the checks and show the interaction on a device. That would give me something concrete to review. The change to the process mattered as much as the ability to generate code: each task needed to leave behind evidence and reusable protection.",
		],
	},
	{
		id: "monthly-delivery-activity",
		title: "The monthly delivery record changed from May",
		tocTitle: "Monthly delivery",
		kind: "activity",
		paragraphs: [
			`The first chart follows the same app repository from January through August 2026. Its monthly merged-PR counts were ${earlierPrs.map((point) => point.value).join(", ")} from January to April, followed by ${laterPrs.map((point) => point.value).join(", ")} from May to August. I use that continuous cohort because the app moved into a wider monorepo in September. Combining later repository-wide activity with these app-only months would mix different scopes. For longer-term context, the 2025 monthly counts ranged from ${Math.min(...priorYearPrs)} to ${Math.max(...priorYearPrs)}. The downloads include the full record from July 2024 through August 2026.`,
			`Across the two four-month windows, that is ${earlierPrTotal} merged PRs before May and ${laterPrTotal} from May through August. The monthly average increased from ${earlierPrTotal / earlierPrs.length} to ${laterPrTotal / laterPrs.length}, about ${(laterPrTotal / earlierPrTotal).toFixed(2)} times as many merged PRs. This measures completed review units. It does not tell us how large the changes were, how much customer value each delivered or how many reached a public store. It is useful because it shows the sustained rhythm rather than a single unusually busy week.`,
			`I also count distinct ticket identifiers in each month. They moved from ${earlierTickets.map((point) => point.value).join(", ")} in January to April to ${laterTickets.map((point) => point.value).join(", ")} in May to August. The sums are ${earlierTicketTotal} and ${laterTicketTotal} monthly ticket occurrences. A ticket spanning two months can be counted in both, so I do not present those sums as unique features. This second measure helps check whether higher PR activity was accompanied by work against more tracked requests.`,
			"This is an observational comparison: task mix, scope, AI assistance and the engineering process changed together. It does not isolate AI's contribution. The useful question is how we made that larger volume of work assessable: which checks ran, what evidence accompanied it, and what remained uncertain at review.",
		],
	},
	{
		id: "planning-before-generation",
		title: "I gave implementation and review the same rulebook",
		tocTitle: "Rules and planning",
		paragraphs: [
			"The first app rulebook appeared on 7 May. On 24 and 25 July, I made the standards more explicit, moved lint rules from warnings to errors, connected the AI reviewers to those standards and added a self-verification runbook. That sequencing mattered. The agent needed to know what acceptable work looked like before I could expect it to repeat the process consistently across different tasks.",
			"The rules covered small files with focused responsibilities, business logic in hooks and helpers, reuse of existing components and tests for changed production code. The target was roughly 100 lines per file, rather than allowing one large UI file to accumulate every decision. Existing exceptions remained, so I treat this as an enforced direction for new work rather than claiming that the entire application suddenly met every standard.",
			"I split the agent workflow into focused stages. It first detects the repository's package manager, check commands, build tooling and PR conventions. Then it reads the requirement, design and relevant code, and writes a bounded plan. I review that plan before implementation. The task proceeds in a fresh worktree and branch, with its own files and devices. This keeps parallel work manageable and gives me an early opportunity to correct a misunderstood requirement.",
			"The same rules reach the reviewers. CodeRabbit reads the main guidance file; Qodo reads a mirror plus explicit compliance checks; cubic uses focused review rules. A small CI comparison fails when the mirror drifts from the main rulebook. That makes the contract maintainable: an agent and a reviewer should not be working from different versions of what the team expects. Written standards become more useful when both implementation and review can inspect them.",
		],
	},
	{
		id: "a-repeatable-development-loop",
		title: "A task had to produce more than implementation",
		tocTitle: "The loop",
		kind: "loop",
		paragraphs: [
			"The workflow became plan, implement, test, verify, capture, review and deliver a test build. An agent can carry much of the work between those stages. It can inspect the existing implementation, add or update tests, run the check chain, diagnose failures and prepare the PR. Human judgment remains at the important boundaries: agreeing the intended behaviour and accepting the result.",
			"I made the completion criteria explicit. A changed behaviour needs tests that preserve it. The agent must run the relevant checks and read the output before describing them as passing. A UI change needs evidence from the interaction in the app. Review material needs to identify what was exercised and the revision it represents. If the branch changes during review, its earlier green result is no longer enough for the affected behaviour.",
			"Device-evidence blocks started appearing in PRs on 19 June. Recent evidence tables link green device-flow runs to the revision under review. Those tables were still posted by the engineer, so I do not describe the whole evidence package as fully automatic.",
			"This is the mechanism behind reducing repetitive QA. When a defect becomes a test, the next change can exercise that behaviour again. When a recording accompanies the implementation, a reviewer can inspect the result without reconstructing the whole task. When a test build is available, someone can try it on a real device. Each artifact answers a particular question and reduces how much confidence must be assembled again at release time.",
		],
	},
];
