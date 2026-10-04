import assert from "node:assert/strict";
import { test } from "node:test";
import { timelinePositions } from "./timeline-scale.ts";

test("timeline spacing follows elapsed days rather than equidistant snapshots", () => {
	const points = timelinePositions(
		[
			{ date: "2026-01-01", value: 0 },
			{ date: "2026-01-02", value: 50 },
			{ date: "2026-01-11", value: 100 },
		],
		100,
	);
	assert.deepEqual(points, [
		{ x: 0, y: 100 },
		{ x: 10, y: 50 },
		{ x: 100, y: 0 },
	]);
});

test("timeline rejects ambiguous dates and reversed or duplicate chronology", () => {
	for (const dates of [
		["2026-02-31", "2026-03-01"],
		["2026-01-02", "2026-01-01"],
		["2026-01-01", "2026-01-01"],
	]) {
		assert.throws(
			() =>
				timelinePositions(
					dates.map((date) => ({ date, value: 10 })),
					100,
				),
			RangeError,
		);
	}
	assert.throws(() => timelinePositions([], 100), RangeError);
});
