import { joiningMonthMarker } from "./chart-annotations";
import type { ITimeSeriesData } from "./chart-types";
import { verificationCheckpoints } from "./verification-checkpoints";

const checkpointLabel = (date: string) =>
	new Intl.DateTimeFormat("en-GB", {
		day: "numeric",
		month: "short",
		timeZone: "UTC",
	}).format(new Date(`${date}T00:00:00Z`));

const first = verificationCheckpoints[0];
const april = verificationCheckpoints[3];
const may = verificationCheckpoints[4];
const last = verificationCheckpoints[verificationCheckpoints.length - 1];

export const unitTestHistoryData: ITimeSeriesData = {
	id: "test-growth",
	monthMarker: joiningMonthMarker,
	title: "Unit test files, January to September 2026",
	unit: "Files in the same mobile application",
	maximum: 1800,
	observations: verificationCheckpoints.map((point) => ({
		date: point.date,
		label: checkpointLabel(point.date),
		value: point.unitTestFiles,
	})),
	axisDates: ["2026-01-31", "2026-06-30", "2026-09-30"],
	labelDates: ["2026-01-31", "2026-04-30", "2026-08-31", "2026-09-30"],
	caption: `The inventory grew from ${first.unitTestFiles} files at the January checkpoint to ${last.unitTestFiles.toLocaleString("en-GB")} at the end of September. The April checkpoint had ${april.unitTestFiles} files.`,
	methodology:
		"Bars show month-end snapshots through September across a repository move. File counts are not individual tests, coverage or test quality.",
};

export const flowHistoryData: ITimeSeriesData = {
	id: "flow-growth",
	monthMarker: joiningMonthMarker,
	title: "UI flow files, January to September 2026",
	unit: "Maestro YAML files in the same application",
	maximum: 250,
	observations: verificationCheckpoints.map((point) => ({
		date: point.date,
		label: checkpointLabel(point.date),
		value: point.uiFlowFiles,
	})),
	axisDates: ["2026-01-31", "2026-05-31", "2026-09-30"],
	labelDates: ["2026-01-31", "2026-04-30", "2026-05-31", "2026-09-30"],
	caption: `The first four checkpoints held at ${first.uiFlowFiles} files. The May snapshot had ${may.uiFlowFiles}, and the September month-end snapshot had ${last.uiFlowFiles}.`,
	methodology:
		"Bars show actual checkpoints. This inventory includes leaf flows, shared subflows, suite aggregates and other YAML files. It is not a count of distinct journeys, runnable tests or coverage on every platform.",
};
