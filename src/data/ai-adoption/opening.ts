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
			`I joined in April 2026 and started changing that process in May. The earlier chart history gives context for what followed. By 2 October, the app had ${last.unitTestFiles.toLocaleString("en-GB")} unit-test files and ${last.uiFlowFiles} Maestro YAML files, with smoke runs, device captures, review automation and installable test builds around the work.`,
			"My goal was to make AI adoption useful all the way through development. I wanted the agent to understand the requirement, implement it, write meaningful tests, run the checks and show the interaction on a device. That would give me something concrete to review. The change to the process mattered as much as the ability to generate code: each task needed to leave behind evidence and reusable protection.",
			"We also moved towards product engineering. A smaller engineering team took on broader responsibility for product decisions, mobile development and the web experience. In practice, I saw features become faster to develop and deliver, with more work completed across that wider scope. That is my experience of the transition; the activity charts below provide a visible record alongside it.",
		],
	},
	{
		id: "monthly-delivery-activity",
		title: "The rhythm of development changed from May",
		tocTitle: "Development activity",
		kind: "activity",
		paragraphs: [
			`The monthly record follows the same app repository from July 2024 through August 2026. Within that history, January through August 2026 gives a continuous comparison around the May change in process. Its merged-PR counts were ${earlierPrs.map((point) => point.value).join(", ")} from January to April, followed by ${laterPrs.map((point) => point.value).join(", ")} from May to August. The app moved into a wider monorepo in September, so I keep later repository-wide activity out of this comparison. For longer-term context, the 2025 monthly counts ranged from ${Math.min(...priorYearPrs)} to ${Math.max(...priorYearPrs)}.`,
			`Across the two four-month windows, that is ${earlierPrTotal} merged PRs before May and ${laterPrTotal} from May through August. The monthly average increased from ${earlierPrTotal / earlierPrs.length} to ${laterPrTotal / laterPrs.length}, about ${(laterPrTotal / earlierPrTotal).toFixed(2)} times as many merged PRs. This records a sustained increase in merge activity. Changes differ in size and purpose, so the ratio cannot be read as the same increase in effort, productivity, features delivered or customer value.`,
			`I also count distinct ticket identifiers in each month. They moved from ${earlierTickets.map((point) => point.value).join(", ")} in January to April to ${laterTickets.map((point) => point.value).join(", ")} in May to August. The sums are ${earlierTicketTotal} and ${laterTicketTotal} monthly ticket occurrences. A ticket spanning two months can be counted in both, so I do not present those sums as unique features. This second measure helps check whether higher PR activity was accompanied by work against more tracked requests.`,
			"PR counts are the clearest continuous record of development activity I can share here. I use them to show the rhythm of work moving through review, not as a productivity target. Ten PRs can involve more effort than fifteen, or less. Planning, investigation, implementation, testing and product decisions also happen without a merge, so a day with none can still contain substantial work. Splitting a feature into smaller PRs changes the count too. These monthly charts show recorded merge activity; they do not measure daily effort, feature completion or turnaround.",
			"The outcome I cared about was how quickly we could develop and deliver useful features with confidence. I experienced an improvement there as the loop became established, even as the team became smaller and its product and web responsibilities grew. The PR history documents visible activity accompanying that change; it does not quantify the time from a feature request to its release or establish an improvement per engineer.",
			"This is an observational comparison: team size, responsibilities, task mix, scope, AI assistance and the engineering process changed together. It does not isolate AI's contribution. The useful question is how we made the work assessable: which checks ran, what evidence accompanied it, and what remained uncertain at review.",
		],
	},
	{
		id: "planning-before-generation",
		title: "I gave implementation and review the same rulebook",
		tocTitle: "Rules and planning",
		paragraphs: [
			"The first app rulebook appeared on 7 May. On 24 and 25 July, I made the standards explicit, moved lint rules from warnings to errors, connected the AI reviewers to those standards and added a self-verification runbook. The agent now had a contract to follow across different tasks.",
			"The rules covered small files with focused responsibilities, business logic in hooks and helpers, reuse of existing components and tests for changed production code. The target was roughly 100 lines per file, rather than allowing one large UI file to accumulate every decision. Existing exceptions remained, so I treat this as an enforced direction for new work rather than claiming that the entire application suddenly met every standard.",
			"The agent writes a plan in the task description before implementation. I can correct a misunderstanding while it is still a paragraph, before it becomes a feature to unwind. Focused skills then carry the approved task through the remaining work.",
			"The same rules reach the reviewers. CodeRabbit reads the main guidance file; Qodo reads a mirror plus explicit compliance checks; cubic uses focused review rules. A small CI comparison fails when the mirror drifts from the main rulebook. Implementation and review use the same version of the contract.",
		],
	},
	{
		id: "a-repeatable-development-loop",
		title: "A task had to produce more than implementation",
		tocTitle: "The loop",
		kind: "loop",
		paragraphs: [
			"The workflow became plan, implement, test, verify, capture, review and deliver a test build. Its completion criteria extend beyond the code: a changed behaviour needs tests, a UI change needs device evidence, and a reviewer needs fresh results for the revision they are assessing.",
			"The agent runs checks and reads their output before describing them as passing. Review material identifies what was exercised and its revision. If the branch changes, the affected checks need fresh results. Verification becomes part of finishing the task.",
			"Device-evidence blocks started appearing in PRs on 19 June. Recent evidence tables link green device-flow runs to the revision under review. Those tables were still posted by the engineer, so I do not describe the whole evidence package as fully automatic.",
			"This is the mechanism behind reducing repetitive QA. When a defect becomes a test, the next change can exercise that behaviour again. When a recording accompanies the implementation, a reviewer can inspect the result without reconstructing the whole task. When a test build is available, someone can try it on a real device. Each artifact answers a particular question and reduces how much confidence must be assembled again at release time.",
		],
	},
];
