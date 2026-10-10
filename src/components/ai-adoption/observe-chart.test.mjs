import assert from "node:assert/strict";
import test from "node:test";
import { observeChartEntrance } from "./observe-chart.ts";

function environment(reduced = false) {
	const node = { dataset: {} };
	const query = {
		matches: reduced,
		addEventListener(_, listener) {
			this.listener = listener;
		},
		removeEventListener() {
			this.listener = undefined;
		},
	};
	let callback;
	let disconnects = 0;
	globalThis.window = {
		matchMedia: () => query,
		IntersectionObserver: class {
			constructor(listener) {
				callback = listener;
			}
			observe() {}
			disconnect() {
				disconnects += 1;
			}
		},
	};
	return {
		node,
		query,
		enter: () => callback([{ isIntersecting: true }]),
		outside: () => callback([{ isIntersecting: false }]),
		disconnects: () => disconnects,
	};
}

test("chart waits for entry, runs once, and releases its observer", () => {
	const env = environment();
	const cleanup = observeChartEntrance(env.node);
	assert.equal(env.node.dataset.chartMotion, "pending");
	env.outside();
	assert.equal(env.node.dataset.chartMotion, "pending");
	env.enter();
	assert.equal(env.node.dataset.chartMotion, "entered");
	assert.equal(env.disconnects(), 1);
	env.enter();
	assert.equal(env.disconnects(), 1);
	cleanup();
	assert.equal(env.query.listener, undefined);
});

test("reduced motion leaves final SSR charts visible and preference changes cancel pending motion", () => {
	const reduced = environment(true);
	observeChartEntrance(reduced.node);
	assert.equal(reduced.node.dataset.chartMotion, undefined);
	const env = environment();
	observeChartEntrance(env.node);
	env.query.matches = true;
	env.query.listener();
	assert.equal(env.node.dataset.chartMotion, undefined);
	assert.equal(env.disconnects(), 1);
});
