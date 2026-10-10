// Data checks for the fundraising kit, no browser needed. They guard the
// rules every guide must follow before a page is built from it.
import assert from "node:assert/strict";
import { test } from "node:test";
import { acceleratorApplicationGuide } from "@/data/accelerator-application";
import { financialModelGuide } from "@/data/financial-model";
import { founderVideoGuide } from "@/data/founder-video";
import { fundraisingKit } from "@/data/guides/fundraising-kit";
import { hubRoute } from "@/data/guides/hub-route";
import { onePagerGuide } from "@/data/one-pager";
import { pitchDeckGuide } from "@/data/pitch-deck";
import { productDemoGuide } from "@/data/product-demo";
import { movedGuideRoutes } from "@/data/routes/moved-routes";
import { redirectRoutes } from "@/data/routes/redirect-routes";

const guides = [
	pitchDeckGuide,
	onePagerGuide,
	productDemoGuide,
	founderVideoGuide,
	financialModelGuide,
	acceleratorApplicationGuide,
];
const oneWord = /^[a-z]+$/;
const banned = [
	String.fromCharCode(0x2013),
	String.fromCharCode(0x2014),
	"Iran",
	"Tehran",
];

function strings(value, out = []) {
	if (typeof value === "string") out.push(value);
	else if (Array.isArray(value)) for (const item of value) strings(item, out);
	else if (value && typeof value === "object")
		for (const item of Object.values(value)) strings(item, out);
	return out;
}

test("the kit lists six guides with distinct paths, in the order the pages use", () => {
	const paths = fundraisingKit.map((entry) => entry.article.pagePath);
	assert.equal(paths.length, 6);
	assert.equal(new Set(paths).size, 6);
	assert.deepEqual(
		paths,
		guides.map((guide) => guide.article.pagePath),
	);
	const skills = guides.map((guide) => guide.aiText.skillName);
	assert.equal(new Set(skills).size, skills.length);
});

test("every guide lives under the hub with a lowercase, hyphenated slug", () => {
	for (const guide of guides) {
		const path = guide.article.pagePath;
		assert.ok(path.startsWith(`${hubRoute}/`), path);
		assert.match(path.slice(hubRoute.length + 1), /^[a-z]+(-[a-z]+)*$/);
	}
});

test("every old guide path redirects to a guide and stays out of the sitemap", () => {
	const paths = new Set(guides.map((guide) => guide.article.pagePath));
	assert.equal(movedGuideRoutes.length, guides.length);
	for (const route of movedGuideRoutes) {
		assert.ok(paths.has(route.to), `${route.to} is not a guide`);
		assert.ok(!paths.has(route.from), `${route.from} still serves a guide`);
		assert.ok(
			redirectRoutes.includes(route.from),
			`${route.from} is missing from redirectRoutes`,
		);
	}
});

for (const guide of guides) {
	const path = guide.article.pagePath;

	test(`${path}: anchors and step ids are one word and unique on the page`, () => {
		const anchors = Object.values(guide.anchors);
		const ids = guide.steps.map((step) => step.id);
		for (const id of [...anchors, ...ids]) {
			assert.match(id, oneWord, `${id} must be one lowercase word`);
		}
		assert.equal(
			new Set([...anchors, ...ids]).size,
			anchors.length + ids.length,
		);
	});

	test(`${path}: the shape holds`, () => {
		assert.ok(guide.steps.length >= 6);
		assert.equal(guide.hero.rules.length, 4);
		assert.equal(guide.faq.length, 4);
		assert.ok(guide.rules.length >= 3 && guide.rules.length <= 4);
		assert.ok(guide.optional.length >= 3 && guide.optional.length <= 5);
		assert.ok(guide.references.length >= 4);
		assert.ok(guide.article.pageDesc.length <= 160);
		for (const step of guide.steps) {
			assert.ok(step.include.length >= 2 && step.avoid.length >= 2, step.id);
			assert.ok(step.test.length > 0, step.id);
		}
		for (const rule of guide.rules) {
			if (rule.stepId) {
				assert.ok(
					guide.steps.some((step) => step.id === rule.stepId),
					`${rule.title} points at a missing step`,
				);
			}
		}
		for (const reference of guide.references) {
			assert.equal(new URL(reference.url).protocol, "https:");
		}
	});

	test(`${path}: no dashes or banned words in any string`, () => {
		for (const text of strings(guide)) {
			for (const needle of banned) {
				assert.ok(!text.includes(needle), `${needle} in: ${text.slice(0, 80)}`);
			}
		}
	});
}
