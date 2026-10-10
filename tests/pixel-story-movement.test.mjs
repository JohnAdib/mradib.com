import assert from "node:assert/strict";
import { test } from "node:test";
import {
	initialGameState,
	stepGame,
} from "../src/app/(experience)/lab/pixel-story/game-state.ts";

test("the character covers more ground when moving", () => {
	const state = initialGameState();
	stepGame(
		state,
		{ left: false, right: true, crouch: false, jump: false },
		0.05,
	);
	assert.ok(state.x >= 7.5);
});
