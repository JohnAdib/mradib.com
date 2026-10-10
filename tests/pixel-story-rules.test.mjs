import assert from "node:assert/strict";
import { test } from "node:test";
import {
	levelForScore,
	POINTS_PER_LEVEL,
} from "../src/app/(experience)/lab/pixel-story/game-rules.ts";

test("the next level unlocks only after five collected coins", () => {
	assert.equal(POINTS_PER_LEVEL, 5);
	assert.equal(levelForScore(0), 1);
	assert.equal(levelForScore(4), 1);
	assert.equal(levelForScore(5), 2);
	assert.equal(levelForScore(9), 2);
	assert.equal(levelForScore(10), 3);
});
