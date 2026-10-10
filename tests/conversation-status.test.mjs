import assert from "node:assert/strict";
import test from "node:test";
import { conversations } from "../src/data/conversations.ts";
import {
	conversationStatus,
	orderConversations,
} from "../src/lib/conversations/session-status.ts";

test("session status changes at its scheduled end without claiming a recording", () => {
	const session = conversations[1];
	const end = Date.parse(session.endsAt);
	assert.equal(conversationStatus(session, end - 1), "Upcoming");
	assert.equal(conversationStatus(session, end), "Past session");
	assert.equal(
		conversationStatus(session, Date.parse("2026-11-01")),
		"Past session",
	);
	assert.equal(conversationStatus(conversations[0], end), "Recording");
	assert.equal(conversationStatus(session, null), null);
});

test("upcoming sessions sort first, then past sessions newest first", () => {
	const ids = (date) =>
		orderConversations(conversations, Date.parse(date)).map((s) => s.id);
	assert.deepEqual(ids("2026-10-11"), [
		"uk-startup-hiring",
		"engineering-rejections",
		"getting-hired-in-tech",
	]);
	assert.deepEqual(ids("2026-10-17"), [
		"engineering-rejections",
		"uk-startup-hiring",
		"getting-hired-in-tech",
	]);
	assert.deepEqual(ids("2026-11-01"), [
		"engineering-rejections",
		"uk-startup-hiring",
		"getting-hired-in-tech",
	]);
});
