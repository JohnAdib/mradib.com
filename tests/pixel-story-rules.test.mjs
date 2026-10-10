import assert from "node:assert/strict";
import { test } from "node:test";
import {
	levelForScore,
	POINTS_PER_LEVEL,
} from "../src/app/(experience)/lab/pixel-story/game-rules.ts";

test("the next level unlocks only after fifteen collected coins", () => {
	assert.equal(POINTS_PER_LEVEL, 15);
	assert.equal(levelForScore(0), 1);
	assert.equal(levelForScore(14), 1);
	assert.equal(levelForScore(15), 2);
	assert.equal(levelForScore(29), 2);
	assert.equal(levelForScore(30), 3);
});
