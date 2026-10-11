import assert from "node:assert/strict";
import test from "node:test";
import { talks } from "../src/data/talks/talks.ts";
import { techlead2026Panels } from "../src/data/talks/techlead-2026-panels.ts";
import {
	techlead2026Panelists,
	techlead2026Talk,
} from "../src/data/talks/techlead-2026-talk.ts";

test("three panels share one linked conference appearance", () => {
	assert.equal(
		talks.filter((t) => t.event === "TechLead Conf London 2026").length,
		1,
	);
	assert.equal(techlead2026Talk.path, "/techlead-conf-london-2026");
	assert.equal(techlead2026Panels.length, 3);
	assert.equal(techlead2026Panels[0].role, "moderator-panelist");
	assert.deepEqual(
		techlead2026Panels.slice(1).map((p) => p.role),
		["panelist", "panelist"],
	);
	for (const panel of techlead2026Panels) {
		assert.equal(panel.date, "2026-10-23");
		assert.ok(techlead2026Panelists[panel.slug].length > 0);
	}
});
