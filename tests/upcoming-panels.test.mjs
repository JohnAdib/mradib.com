import assert from "node:assert/strict";
import test from "node:test";
import { qaBottleneckTalk } from "../src/data/talks/qa-bottleneck-talk.ts";
import { techlead2026Panels } from "../src/data/talks/techlead-2026-panels.ts";
import {
	groupUpcomingTalks,
	talkDateLabel,
} from "../src/lib/talks/group-upcoming.ts";

test("conference panels group together after the earlier meetup", () => {
	const groups = groupUpcomingTalks([...techlead2026Panels, qaBottleneckTalk]);
	assert.deepEqual(
		groups.map((g) => g.length),
		[1, 3],
	);
	assert.equal(groups[0][0].slug, qaBottleneckTalk.slug);
	assert.equal(groups[1][0].role, "moderator-panelist");
	assert.deepEqual(
		groups[1].slice(1).map((p) => p.role),
		["panelist", "panelist"],
	);
	assert.ok(groups[1].every((p) => p.date === "2026-10-23" && !p.path));
	assert.equal(talkDateLabel(groups[1][0].date), "23 October 2026");
	assert.equal(talkDateLabel(null), "Event details TBC");
});

test("panels on another date or with their own page remain separate", () => {
	const panel = techlead2026Panels[0];
	const groups = groupUpcomingTalks([
		panel,
		{ ...panel, slug: "next-day", date: "2026-10-24" },
		{ ...panel, slug: "own-page", path: "/own-page" },
	]);
	assert.deepEqual(
		groups.map((g) => g.length),
		[1, 1, 1],
	);
});
