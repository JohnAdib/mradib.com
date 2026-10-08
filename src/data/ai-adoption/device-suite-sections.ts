import { flowCompositionData, platformJobsData } from "./operational-metrics";
import type { ArticleSectionData } from "./types";

const [leaves, shared, aggregates] = flowCompositionData.observations;
const [ios, android] = platformJobsData.observations;
const cloudJobs = platformJobsData.observations.reduce(
	(sum, point) => sum + point.value,
	0,
);

export const deviceSuiteSections: ArticleSectionData[] = [
	{
		id: "device-suite-composition",
		title: "Leaf flows, shared setup and aggregates have different jobs",
		tocTitle: "Flow composition",
		kind: "flow-composition",
		paragraphs: [
			`A separately recorded file-role sample contains ${leaves.value} leaf flows, ${shared.value} shared sub-flows and ${aggregates.value} suite aggregates. This is an earlier structural sample, not a breakdown of the 404 files at the 8 October checkpoint. Leaves exercise a behaviour, shared sub-flows reuse setup or common steps, and aggregates provide entrypoints that call the relevant leaves. Those role counts describe the structure; they are not an exhaustive, mutually exclusive partition of every YAML file or a count of independent journeys.`,
			"The 8 October route report reaches all 99 non-exempt routes through leaf flows in the inventory. Only 28 routes, 28.3%, are reached by leaves that CI runs; 71 are covered only by quarantined flows, and 12 routes are exempt. Inventory reachability therefore does not establish successful automated execution. Selection follows the call graph. Each cloud job names an aggregate entrypoint; tags on individual files do not decide which CI runs include them. A new leaf therefore needs to be connected to the entrypoint that should exercise it. Shared setup reduces repeated maintenance, but changing it can affect several callers. The static analyser checks paths and reachability so that adding a plausible file does not silently leave it outside execution.",
		],
	},
	{
		id: "device-execution-by-platform",
		title: "Device execution needed platform scope and a time budget",
		tocTitle: "Platform execution",
		kind: "platforms",
		paragraphs: [
			`By 8 October, the scheduled configuration reached ${cloudJobs} cloud jobs: ${ios.value} on iOS and ${android.value} on Android. The earlier configuration had 31 jobs. These are configured suite jobs, rather than ${cloudJobs} passing tests or a coverage percentage. PR labels select a smoke run or the broader device suite. Fresh scheduled builds tie execution to a known commit, and each platform's results describe the work it actually ran.`,
			"We changed the structure after a flaky suite prevented the suites behind it from producing evidence. On 5 August, nightly execution was split into one job per suite and platform. Two days later, a nine-leaf run hit Maestro Cloud's 15-minute limit. Some leaves needed roughly two minutes of setup each, so we split long suites into parts of three leaves or fewer. A flow that fits the execution budget can finish and leave a useful result; grouping everything into one long run made failures harder to isolate.",
			"Predictable setup mattered as much as grouping. The flows use controlled initial state and launch arguments to select test conditions, with backend scenarios for known responses rather than a separate mock server. Accessibility labels and exact text matching make selectors easier to diagnose, while overlays and sticky elements can still intercept taps. I want a failed flow explained and repaired. Changing test data until a run happens to pass leaves the original uncertainty in place.",
		],
	},
];
