import { deliveryHistoryData } from "./delivery-history-metrics";
import {
	errorHistoryData,
	flowHistoryData,
	monthlyActivityData,
	monthlyTicketData,
	unitTestHistoryData,
} from "./metrics";
import {
	ciOutcomesData,
	designVerificationData,
	flowCompositionData,
	platformJobsData,
	reviewActivityData,
} from "./operational-metrics";
import { articleResources } from "./resources";
import { articleSections } from "./sections";
import { aiDevelopmentSkills } from "./skills";
import { developmentLoopData } from "./visuals";

const charts = [
	deliveryHistoryData,
	monthlyActivityData,
	monthlyTicketData,
	unitTestHistoryData,
	flowHistoryData,
	errorHistoryData,
	ciOutcomesData,
	flowCompositionData,
	platformJobsData,
	designVerificationData,
	reviewActivityData,
];

const readingText = [
	...articleSections.flatMap((section) => [
		section.title,
		...section.paragraphs,
		...(section.bullets ?? []),
	]),
	...charts.flatMap((chart) => [
		chart.title,
		chart.unit,
		chart.caption,
		chart.methodology,
		chart.monthMarker?.label ?? "",
		chart.monthMarker?.description ?? "",
	]),
	...aiDevelopmentSkills.flatMap((skill) => [
		skill.name,
		skill.phase,
		skill.responsibility,
		skill.output,
	]),
	developmentLoopData.caption,
	...developmentLoopData.steps.flatMap((step) => [step.title, step.output]),
	...articleResources.flatMap((resource) => [
		resource.title,
		resource.description,
	]),
].join(" ");

export const articleWordCount = readingText.trim().split(/\s+/).length;
