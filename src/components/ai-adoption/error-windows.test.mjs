import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import {
	errorHistoryData,
	errorWindowSummary,
	recordedErrorDays,
} from "@/data/ai-adoption/metrics";

test("equal, complete 30-day windows reconcile to daily observations through the latest complete October day", () => {
	assert.deepEqual(
		errorWindowSummary.map((window) => window.value),
		[364417, 127531],
	);
	for (const window of errorWindowSummary) {
		const observations = recordedErrorDays.filter(
			(point) => point.date >= window.from && point.date <= window.through,
		);
		assert.equal(observations.length, 30);
		assert.ok(observations.every((point) => point.completePeriod));
		assert.ok(window.through <= "2026-10-21");
	}
	assert.equal(errorWindowSummary[0].completePeriod, true);
	assert.equal(errorWindowSummary[1].completePeriod, true);
});

test("the displayed daily history contains complete days rather than a misleading partial-day endpoint", () => {
	const observations = errorHistoryData.observations;
	assert.equal(observations.length, 107);
	assert.equal(observations[0].date, "2026-07-07");
	assert.equal(observations[observations.length - 1].date, "2026-10-21");
	assert.ok(!observations.some((point) => point.date >= "2026-10-22"));
});

test("presentation source and article use exactly the same daily observations", () => {
	const metrics = JSON.parse(
		readFileSync(
			new URL(
				"../../../resources/talks/qa-bottleneck-source/metrics.json",
				import.meta.url,
			),
			"utf8",
		),
	);
	assert.deepEqual(
		metrics.errors,
		errorHistoryData.observations.map(({ date, value }) => ({ date, value })),
	);
});
