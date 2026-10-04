import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import {
	companyMarkers,
	hasCompanyData,
	loadedJavaScript,
} from "../scripts/lib/article-privacy.mjs";

const markers = companyMarkers({
	name: "Example Employer",
	url: "https://www.example-employer.test/about",
});

test("detects employer identity in escaped browser payloads", () => {
	for (const content of [
		'{name:"EXAMPLE EMPLOYER"}',
		'{name:"\\u0045xample Employer"}',
		'{url:"https:\\/\\/example-employer.test"}',
		'{name:"\\x45xample Employer"}',
	]) {
		assert.equal(hasCompanyData(content, markers), true);
	}
	assert.equal(hasCompanyData('name:"Neutral Author"', markers), false);
});

test("follows and deduplicates the page's loaded JavaScript paths", () => {
	const out = mkdtempSync(join(tmpdir(), "article-privacy-"));
	try {
		const chunk = join(out, "_next/static/chunks/MixedCase.js");
		mkdirSync(join(out, "_next/static/chunks"), { recursive: true });
		writeFileSync(chunk, '{name:"Example Employer"}');
		const chunks = loadedJavaScript(
			[
				'<script src="/_next/static/chunks/MixedCase.js"></script>',
				'"/_next/static/chunks/MixedCase.js"',
				'<script src="/unrelated.js"></script>',
			],
			out,
		);
		assert.equal(chunks.length, 1);
		assert.equal(chunks[0].file, chunk);
		assert.equal(hasCompanyData(chunks[0].content, markers), true);
	} finally {
		rmSync(out, { recursive: true });
	}
});
