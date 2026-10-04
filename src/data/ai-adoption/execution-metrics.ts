import type { ICategoricalChartData } from "./chart-types";
import { ciMedianMinutes, ciRecordedOn } from "./operational-snapshot";
import { verificationCheckpoints } from "./verification-checkpoints";

const ciOutcomes = [
	{ label: "Successful", value: 70 },
	{ label: "Superseded", value: 23 },
	{ label: "Failed", value: 7 },
];
const totalRuns = ciOutcomes.reduce((sum, point) => sum + point.value, 0);
const platformJobs = [
	{ label: "iOS", value: 22 },
	{ label: "Android", value: 9 },
];
const totalJobs = platformJobs.reduce((sum, point) => sum + point.value, 0);
const last = verificationCheckpoints[verificationCheckpoints.length - 1];

export const ciOutcomesData: ICategoricalChartData = {
	id: "ci-outcomes",
	title: `What happened across ${totalRuns} app CI runs`,
	unit: `Workflow runs, recorded ${ciRecordedOn}`,
	maximum: totalRuns,
	observations: ciOutcomes,
	caption: `The most recent ${totalRuns} application CI runs at the snapshot. Superseded runs are a separate outcome from failures.`,
	methodology: `These are application CI workflow outcomes, not native-device results or public releases. The recorded median workflow duration was ${ciMedianMinutes} minutes.`,
};

export const platformJobsData: ICategoricalChartData = {
	id: "platform-jobs",
	title: "Nightly device jobs by platform",
	unit: "Configured Maestro Cloud jobs",
	maximum: 25,
	observations: platformJobs,
	caption: `The scheduled configuration contained ${totalJobs} jobs, each naming a suite entrypoint for a platform.`,
	methodology:
		"A configured job can call several flow files. These counts describe execution structure, not passing tests, distinct journeys or equal platform coverage.",
};

export const flowCompositionData: ICategoricalChartData = {
	id: "flow-composition",
	title: "Three roles inside the device-test inventory",
	unit: "Recorded YAML file-role counts",
	maximum: 140,
	observations: [
		{ label: "Leaf flows", value: 125 },
		{ label: "Shared subflows", value: 53 },
		{ label: "Suite aggregates", value: 37 },
	],
	caption: `The application inventory contained ${last.uiFlowFiles} YAML files. These three recorded roles explain how individual checks, shared setup and suite entrypoints work together.`,
	methodology:
		"The role counts are not an exhaustive, mutually exclusive partition of all YAML files. They do not measure independent journeys or coverage.",
};
