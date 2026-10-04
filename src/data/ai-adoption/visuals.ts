export interface IComparisonData {
	id: string;
	title: string;
	unit: string;
	maximum: number;
	axisLabels: [string, string, string];
	approximate?: boolean;
	observations: { label: string; value: number }[];
	caption: string;
	methodology: string;
}

export const testGrowthData: IComparisonData = {
	id: "test-growth",
	title: "The test suite grew with the work",
	unit: "Unit test files",
	maximum: 1800,
	axisLabels: ["0", "900", "1,800"],
	observations: [
		{ label: "Earlier snapshot", value: 113 },
		{ label: "Later snapshot", value: 1686 },
	],
	caption:
		"Two repository snapshots of the same app. A growing suite leaves more verification behind for the next change.",
	methodology:
		"Counts are unit test files, not individual tests, coverage percentages or a measure of test quality. File organisation can also affect the count.",
};

export const errorVolumeData: IComparisonData = {
	id: "error-volume",
	title: "Recorded error volume fell",
	unit: "Recorded error events",
	maximum: 400000,
	axisLabels: ["0", "200k", "400k"],
	approximate: true,
	observations: [
		{ label: "Earlier reporting window", value: 378937 },
		{ label: "Later reporting window", value: 154779 },
	],
	caption:
		"Approximate totals across two 30-day reporting windows, including all environments. Fixes and changes to reporting both contributed to the recorded volume.",
	methodology:
		"The earlier window was reconstructed from retained data and may omit its first hour; the later window contains 30 full days. Raw counts are not adjusted for traffic, sessions or environment mix. They are not a crash rate or proof that AI alone caused the change.",
};

export const developmentLoopData = {
	title: "Verification travels with the change",
	caption:
		"A practical workflow pattern. Each step produces something the next step can inspect, and production learning informs the next task.",
	steps: [
		{
			title: "Plan",
			output: "Expected behaviour and a focused task",
		},
		{
			title: "Implement and write tests",
			output: "A change with repeatable checks",
		},
		{
			title: "Verify",
			output: "Test results and checks against the task",
		},
		{
			title: "Capture device evidence",
			output: "Screenshots and a recording of the flow",
		},
		{
			title: "Review",
			output: "A human decision supported by evidence",
		},
		{
			title: "Deliver a test build",
			output: "An installable build for real-device feedback",
		},
		{
			title: "Observe and learn",
			output: "Production signals that shape the next task",
		},
	],
	returnLabel: "New learning returns to planning",
};
