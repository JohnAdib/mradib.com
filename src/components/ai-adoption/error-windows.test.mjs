import assert from "node:assert/strict";
import { test } from "node:test";
import {
	errorHistoryData,
	errorWindowSummary,
	recordedErrorDays,
} from "@/data/ai-adoption/metrics";

test("dated window totals reconcile to retained daily observations, including the partial boundary", () => {
	assert.deepEqual(
		errorWindowSummary.map((window) => window.value),
		[378937, 154779],
	);
	for (const window of errorWindowSummary) {
		const observations = recordedErrorDays.filter(
			(point) => point.date >= window.from && point.date <= window.through,
		);
		assert.equal(observations.length, 30);
	}
	assert.equal(errorWindowSummary[0].completePeriod, false);
	assert.equal(errorWindowSummary[1].completePeriod, true);
});

test("the displayed daily history contains complete days rather than a misleading partial-day endpoint", () => {
	const observations = errorHistoryData.observations;
	assert.equal(observations.length, 89);
	assert.equal(observations[0].date, "2026-07-07");
	assert.equal(observations[observations.length - 1].date, "2026-10-03");
	assert.ok(!observations.some((point) => point.date === "2026-10-04"));
});
