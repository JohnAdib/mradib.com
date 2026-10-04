import type { ICategoricalChartData } from "./chart-types";

const platformJobs = [
	{ label: "iOS", value: 22 },
	{ label: "Android", value: 9 },
];
const totalJobs = platformJobs.reduce((sum, point) => sum + point.value, 0);

export const ciCoverageData: ICategoricalChartData = {
	id: "ci-coverage",
	title: "What the September coverage run measured",
	unit: "Code coverage (%)",
	maximum: 100,
	valueSuffix: "%",
	observations: [
		{ label: "Lines", value: 72 },
		{ label: "Statements", value: 71.2 },
		{ label: "Branches", value: 63.7 },
		{ label: "Functions", value: 63.4 },
	],
	caption:
		"The last main-branch coverage run in the original app repository during September ran 1,351 suites and 7,693 tests.",
	methodology:
		"This is one September run, not a month-end combined-repository report. Coverage measures code exercised, not assertion quality. The configured minimum threshold and the share of files with nearby tests are different measures, not earlier coverage baselines.",
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
	caption:
		"These separately recorded file-role counts explain how checks, shared setup and suite entrypoints work together. They are not a September month-end breakdown.",
	methodology:
		"The role counts are not an exhaustive, mutually exclusive partition of all YAML files. They do not measure independent journeys or coverage.",
};
