// Content guardrails over emitted .html/.txt/.xml: no em/en dashes in visible
// text, no raw email leak, valid JSON-LD, and no banned geography strings.
import { readFileSync } from "node:fs";
import { basename } from "node:path";
import { filesByExt, relOut } from "./lib/walk-out.mjs";

const EM = String.fromCodePoint(0x2014);
const EN = String.fromCodePoint(0x2013);
// Only John's real address patterns; sample emails in guides are fine.
const EMAIL = /(mr\.?john\.?adib|john\.?adib|mr\.john)[\w.+-]*@/i;
const errors = [];
const fail = (name, msg) => errors.push(`${name}: ${msg}`);

// Dashes in .html only fail outside <script>/<style> (third-party minified JS
// may contain them legitimately); .txt and .xml are checked in full.
function stripCode(html) {
	return html
		.replace(/<script[\s\S]*?<\/script>/gi, "")
		.replace(/<style[\s\S]*?<\/style>/gi, "");
}

function checkDashes(name, text) {
	if (text.includes(EM)) fail(name, "contains em dash (U+2014)");
	if (text.includes(EN)) fail(name, "contains en dash (U+2013)");
}

function checkEmail(name, base, content) {
	if (base === "llms.txt" || base === "llms-full.txt") return;
	// John's mail client signature; showing the address is its purpose.
	if (name === "email/signature.html") return;
	if (EMAIL.test(content)) fail(name, "raw personal email in output");
}

function checkGeo(name, content) {
	if (content.includes("Tehran")) fail(name, "banned string 'Tehran'");
	if (content.includes("Iran")) fail(name, "banned string 'Iran'");
}

function checkJsonLd(name, html) {
	for (const m of html.matchAll(
		/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
	)) {
		let data;
		try {
			data = JSON.parse(m[1]);
		} catch {
			fail(name, "JSON-LD block does not parse");
			continue;
		}
		const nodes = Array.isArray(data) ? data : [data];
		for (const node of nodes) {
			if (typeof node !== "object" || node === null) {
				fail(name, "JSON-LD is not an object");
				continue;
			}
			if (!("@context" in node)) fail(name, "JSON-LD missing @context");
			if (!("@type" in node) && !("@graph" in node))
				fail(name, "JSON-LD missing @type");
		}
	}
}

for (const file of filesByExt([".html"])) {
	const name = relOut(file);
	const html = readFileSync(file, "utf8");
	checkDashes(name, stripCode(html));
	checkEmail(name, basename(file), html);
	checkGeo(name, html);
	checkJsonLd(name, html);
}

for (const file of filesByExt([".txt", ".xml"])) {
	const name = relOut(file);
	const content = readFileSync(file, "utf8");
	checkDashes(name, content);
	checkEmail(name, basename(file), content);
	checkGeo(name, content);
}

if (errors.length) {
	console.error(`Constraint verification FAILED (${errors.length} issues):`);
	for (const e of errors) console.error(`  ${e}`);
	process.exit(1);
}
console.log("Constraint verification OK");
