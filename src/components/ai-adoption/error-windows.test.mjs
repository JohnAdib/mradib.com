import assert from "node:assert/strict";
import { test } from "node:test";
import {
	errorHistoryData,
	errorWindowSummary,
	recordedErrorDays,
} from "@/data/ai-adoption/metrics";

test("equal, complete 30-day windows reconcile to daily observations before October", () => {
	assert.deepEqual(
		errorWindowSummary.map((window) => window.value),
		[364417, 152809],
	);
	for (const window of errorWindowSummary) {
		const observations = recordedErrorDays.filter(
			(point) => point.date >= window.from && point.date <= window.through,
		);
		assert.equal(observations.length, 30);
		assert.ok(observations.every((point) => point.completePeriod));
		assert.ok(window.through <= "2026-09-30");
	}
	assert.equal(errorWindowSummary[0].completePeriod, true);
	assert.equal(errorWindowSummary[1].completePeriod, true);
});

test("the displayed daily history contains complete days rather than a misleading partial-day endpoint", () => {
	const observations = errorHistoryData.observations;
	assert.equal(observations.length, 86);
	assert.equal(observations[0].date, "2026-07-07");
	assert.equal(observations[observations.length - 1].date, "2026-09-30");
	assert.ok(!observations.some((point) => point.date >= "2026-10-01"));
});
