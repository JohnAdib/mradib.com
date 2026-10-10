import type { ICategoricalChartData } from "./chart-types";
import {
	designComponentTotal,
	designDiffLimitPercent,
} from "./operational-snapshot";

const recorded = 29;

export const designVerificationData: ICategoricalChartData = {
	id: "design-verification",
	title: "Design comparison became a recorded verification step",
	unit: `Components in a ${designComponentTotal}-component inventory`,
	maximum: designComponentTotal,
	observations: [
		{ label: "Recorded design verification", value: recorded },
		{ label: "Other components", value: designComponentTotal - recorded },
	],
	caption: `At the snapshot, ${recorded} components had reached the workflow's recorded design-verification state after a comparison reported less than ${designDiffLimitPercent}% pixel difference.`,
	methodology: `The other ${designComponentTotal - recorded} were outside this recorded status. This is one design-comparison criterion, not a measure of all testing, accessibility or cross-platform coverage.`,
};
