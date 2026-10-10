import type { ICategoricalChartData } from "./chart-types";

const platformJobs = [
	{ label: "iOS", value: 23 },
	{ label: "Android", value: 10 },
];
const totalJobs = platformJobs.reduce((sum, point) => sum + point.value, 0);

export const ciCoverageData: ICategoricalChartData = {
	id: "ci-coverage",
	title: "What the 8 October coverage run measured",
	unit: "Code coverage (%)",
	maximum: 100,
	valueSuffix: "%",
	observations: [
		{ label: "Lines", value: 99.26 },
		{ label: "Statements", value: 98.96 },
		{ label: "Branches", value: 95.55 },
		{ label: "Functions", value: 98.1 },
	],
	caption:
		"Measured on 8 October, with results merged from four Jest coverage shards. The CI thresholds were pinned to this measured baseline.",
	methodology:
		"Coverage measures exercised code within the configured scope, not assertion quality. The scope now excludes test helpers, Storybook and development-only files. Covered lines rose from 19,178 on 2 October to 22,903 on 8 October, while eligible lines fell from 25,555 to 23,072. Both changes affect the percentage; there is no measured pre-May baseline.",
};

export const platformJobsData: ICategoricalChartData = {
	id: "platform-jobs",
	title: "Nightly device jobs by platform",
	unit: "Configured Maestro Cloud jobs",
	maximum: 25,
	observations: platformJobs,
	caption: `The 8 October scheduled configuration contained ${totalJobs} jobs, each naming a suite entrypoint for a platform.`,
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
		"These separately recorded file-role counts explain how checks, shared setup and suite entrypoints work together. They are an earlier sample, not a breakdown of the 404 files recorded on 8 October.",
	methodology:
		"The role counts are not an exhaustive, mutually exclusive partition of all YAML files. They do not measure independent journeys or coverage.",
};
