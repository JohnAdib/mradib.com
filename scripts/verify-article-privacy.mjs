// Keep the anonymous article's HTML, Flight payload and loaded JS anonymous.
import { existsSync, readFileSync } from "node:fs";
import { relative, resolve, sep } from "node:path";
import { articleAiAdoption } from "../src/data/articles/ai-adoption.ts";
import { profile } from "../src/data/profile.ts";
import {
	companyMarkers,
	hasCompanyData,
	loadedJavaScript,
} from "./lib/article-privacy.mjs";
import { filesByExt, OUT_ROOT } from "./lib/walk-out.mjs";

const route = process.argv[2] ?? articleAiAdoption.pagePath;
const stem = resolve(OUT_ROOT, route.replace(/^\//, ""));
if (!stem.startsWith(`${OUT_ROOT}${sep}`)) {
	console.error("Article privacy verification FAILED: invalid route");
	process.exit(1);
}
const htmlFile = [`${stem}.html`, `${stem}/index.html`].find(existsSync);
if (!htmlFile) {
	console.error(
		"Article privacy verification FAILED: exported article missing",
	);
	process.exit(1);
}
const payloadFiles = filesByExt([".html", ".txt"]).filter(
	(file) =>
		file === htmlFile ||
		file === `${stem}.txt` ||
		file.startsWith(`${stem}${sep}`),
);
const payloads = payloadFiles.map((file) => ({
	file,
	content: readFileSync(file, "utf8"),
}));
const chunks = loadedJavaScript(
	payloads.map(({ content }) => content),
	OUT_ROOT,
);
const markers = companyMarkers(profile.company);
const failures = [...payloads, ...chunks].filter(({ content }) =>
	hasCompanyData(content, markers),
);
if (!chunks.length || failures.length) {
	console.error("Article privacy verification FAILED");
	if (!chunks.length) console.error("  No loaded JavaScript was inspected");
	for (const { file } of failures)
		console.error(`  ${relative(OUT_ROOT, file)}: contains company data`);
	process.exit(1);
}
console.log(
	`Article privacy verification OK (${payloads.length} page payloads, ${chunks.length} loaded JS files)`,
);
