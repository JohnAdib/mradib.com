import assert from "node:assert/strict";
import { test } from "node:test";
import { chartMarkerPosition } from "./chart-marker-position.ts";

const marker = { month: "2026-04" };
const series = (dates) => ({
	maximum: 100,
	monthMarker: marker,
	observations: dates.map((date) => ({ date, value: 10 })),
});

test("joining marker aligns with the April bar rather than an invented day", () => {
	const monthly = series(
		Array.from(
			{ length: 8 },
			(_, index) => `2026-${String(index + 1).padStart(2, "0")}-01`,
		),
	);
	assert.equal(chartMarkerPosition(monthly, "bar"), 43.75);
	const snapshots = series([
		"2026-01-31",
		"2026-02-28",
		"2026-03-31",
		"2026-04-30",
		"2026-05-31",
		"2026-06-30",
		"2026-07-31",
		"2026-08-31",
		"2026-09-12",
		"2026-10-02",
	]);
	assert.equal(chartMarkerPosition(snapshots, "bar"), 35);
});

test("joining marker uses elapsed dates on the long delivery timeline", () => {
	const data = series([
		"2024-07-01",
		"2025-01-01",
		"2026-01-01",
		"2026-04-01",
		"2026-08-01",
	]);
	assert.ok(
		Math.abs(chartMarkerPosition(data, "timeline") - (639 / 761) * 100) < 1e-9,
	);
});

test("does not invent a marker when the joining month is outside the chart", () => {
	const data = series(["2026-07-07", "2026-10-03"]);
	assert.equal(chartMarkerPosition(data, "timeline"), null);
	assert.equal(
		chartMarkerPosition({ ...data, monthMarker: undefined }, "bar"),
		null,
	);
});
