import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import {
	monthlyActivityData,
	monthlyPrHistory,
	monthlyTicketData,
	recordedErrorDays,
	verificationCheckpoints,
} from "../src/data/ai-adoption/metrics.ts";

const directory = new URL("../public/data/", import.meta.url);
await mkdir(directory, { recursive: true });
const datasets = [
	{
		name: "ai-development-merged-pr-history.csv",
		rows: [
			["month", "merged_prs"],
			...monthlyPrHistory.map((point) => [point.date.slice(0, 7), point.value]),
		],
	},
	{
		name: "ai-development-monthly-2026.csv",
		rows: [
			["month", "merged_prs", "distinct_recorded_tickets"],
			...monthlyActivityData.observations.map((point) => {
				const ticket = monthlyTicketData.observations.find(
					(item) => item.date === point.date,
				);
				if (!ticket) throw new Error(`Missing ticket count for ${point.date}`);
				return [point.date.slice(0, 7), point.value, ticket.value];
			}),
		],
	},
	{
		name: "ai-development-verification-2026.csv",
		rows: [
			["checkpoint_date", "unit_test_files", "maestro_yaml_files"],
			...verificationCheckpoints.map((point) => [
				point.date,
				point.unitTestFiles,
				point.uiFlowFiles,
			]),
		],
	},
	{
		name: "ai-development-recorded-errors-2026.csv",
		rows: [
			["date", "recorded_error_events", "complete_day", "environment_scope"],
			...recordedErrorDays.map((point) => [
				point.date,
				point.value,
				point.completePeriod,
				"all",
			]),
		],
	},
];
for (const dataset of datasets) {
	const target = new URL(dataset.name, directory);
	await writeFile(
		target,
		`${dataset.rows.map((row) => row.join(",")).join("\n")}\n`,
	);
	console.log(fileURLToPath(target));
}
