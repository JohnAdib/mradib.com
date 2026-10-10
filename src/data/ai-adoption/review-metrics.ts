import type { ICategoricalChartData } from "./chart-types";
import { reviewSamplePrs } from "./operational-snapshot";

const observations = [
	{ label: "AI reviewers", value: 360 },
	{ label: "Other reviewers", value: 275 },
];
const total = observations.reduce((sum, point) => sum + point.value, 0);

export const reviewActivityData: ICategoricalChartData = {
	id: "review-activity",
	title: "AI reviewers added another review pass",
	unit: `Inline comments across ${reviewSamplePrs} merged PRs`,
	maximum: 400,
	observations,
	caption: `AI reviewers wrote ${observations[0].value} of the sample's ${total} inline comments, about ${Math.round((observations[0].value / total) * 100)}%. This sample includes work beyond the mobile application.`,
	methodology:
		"Comment counts measure review activity. They do not establish comment correctness, bugs prevented or the share of code written by AI.",
};
