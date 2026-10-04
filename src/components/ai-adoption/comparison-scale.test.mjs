import assert from "node:assert/strict";
import { test } from "node:test";
import { barPercent } from "./comparison-scale.ts";

test("comparison bars use a shared zero baseline and preserve relative magnitude", () => {
	assert.equal(barPercent(0, 1800), 0);
	assert.equal(barPercent(900, 1800), 50);
	assert.equal(barPercent(1800, 1800), 100);
	const ratio = barPercent(113, 1800) / barPercent(1686, 1800);
	assert.ok(Math.abs(ratio - 113 / 1686) < 1e-12);
});

test("invalid observations cannot silently produce misleading bar widths", () => {
	for (const [value, maximum] of [
		[-1, 100],
		[101, 100],
		[1, 0],
		[Number.NaN, 100],
		[1, Number.POSITIVE_INFINITY],
	]) {
		assert.throws(() => barPercent(value, maximum), RangeError);
	}
});
