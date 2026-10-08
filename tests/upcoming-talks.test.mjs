import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { test } from "node:test";
import { ogCardsTalks } from "@/data/og/og-cards-talks";
import { qaBottleneckTalk } from "@/data/talks/qa-bottleneck-talk";
import { talks } from "@/data/talks/talks";
import { buildPreviousTalksText } from "@/lib/talks/build-previous-talks-text";
import { getTalkResources } from "@/lib/talks/get-talk-resources";

test("an undated talk never becomes a previous speaking appearance", () => {
	const text = buildPreviousTalksText(talks);
	assert.ok(!text.includes(qaBottleneckTalk.title));
	assert.ok(text.includes("The Compound Effect of Guardrails"));
	assert.ok(!text.includes("Invalid Date"));
	const datedUpcoming = { ...qaBottleneckTalk, date: "2027-01-01" };
	assert.ok(
		!buildPreviousTalksText([datedUpcoming]).includes(qaBottleneckTalk.title),
	);
});

test("confirmed event facts stay consistent with the scheduled meetup", () => {
	assert.equal(qaBottleneckTalk.event, "React Native London Meetup");
	assert.equal(qaBottleneckTalk.date, "2026-10-22");
	assert.equal(qaBottleneckTalk.host, "Funding Circle");
	assert.equal(
		qaBottleneckTalk.venue,
		"Funding Circle, 71 Queen Victoria Street",
	);
	assert.equal(qaBottleneckTalk.city, "London");
	const card = ogCardsTalks.find(
		(card) => card.route === qaBottleneckTalk.path,
	);
	assert.ok(card);
	assert.ok(!JSON.stringify(card).includes("null"));
	assert.ok(!JSON.stringify(card).includes("Invalid Date"));
});

test("the PDF is the only downloadable deck resource", () => {
	const resources = getTalkResources(qaBottleneckTalk);
	assert.deepEqual(
		resources
			.filter((resource) => resource.kind === "slides")
			.map((resource) => resource.url),
		[qaBottleneckTalk.slidesPdf],
	);
	assert.ok(existsSync(`public${qaBottleneckTalk.slidesPdf}`));
	assert.ok(existsSync("resources/talks/beyond-the-qa-bottleneck.pptx"));
	assert.ok(!existsSync("public/talks/beyond-the-qa-bottleneck.pptx"));
});
