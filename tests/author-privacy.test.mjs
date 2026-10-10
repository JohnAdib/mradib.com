import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { test } from "node:test";
import { pathToFileURL } from "node:url";
import ts from "typescript";
import { profile } from "@/data/profile";

const require = createRequire(import.meta.url);
const source = await readFile(
	new URL("../src/components/json-ld/person-json-ld.tsx", import.meta.url),
	"utf8",
);
const compiled = ts.transpileModule(source, {
	compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.ESNext },
}).outputText;
const moduleUrl = `data:text/javascript;base64,${Buffer.from(
	compiled.replaceAll(
		'"react/jsx-runtime"',
		JSON.stringify(pathToFileURL(require.resolve("react/jsx-runtime")).href),
	),
).toString("base64")}`;
const { PersonJsonLd } = await import(moduleUrl);

function schema(props) {
	const script = PersonJsonLd(props);
	return JSON.parse(script.props.dangerouslySetInnerHTML.__html);
}

test("neutral author schema excludes the employer and employer biography", () => {
	const author = schema({ neutralAuthor: true });
	assert.equal(author.name, profile.name);
	assert.equal(author.description, profile.oneLiner);
	assert.ok(!Object.hasOwn(author, "worksFor"));
	assert.ok(!JSON.stringify(author).includes(profile.company.name));
	assert.ok(!JSON.stringify(author).includes(profile.company.url));
});

test("existing routes retain the original author biography and employer", () => {
	const author = schema();
	assert.equal(author.description, profile.shortBio);
	assert.equal(author.worksFor.name, profile.company.name);
	assert.equal(author.worksFor.url, profile.company.url);
});
