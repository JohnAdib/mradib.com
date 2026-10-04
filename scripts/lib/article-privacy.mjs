import { readFileSync } from "node:fs";
import { resolve, sep } from "node:path";

// Inspect the bytes browsers receive, including escaped strings in Flight/JS.
export function readableOutput(content) {
	return content
		.replace(/\\u([\da-f]{4})/gi, (_, hex) =>
			String.fromCharCode(Number.parseInt(hex, 16)),
		)
		.replace(/\\x([\da-f]{2})/gi, (_, hex) =>
			String.fromCharCode(Number.parseInt(hex, 16)),
		)
		.replace(/\\\//g, "/")
		.replace(/&(?:amp|#38);/g, "&");
}

export function companyMarkers(company) {
	const host = new URL(company.url).hostname.replace(/^www\./, "");
	return [company.name, host].map((value) => value.toLowerCase());
}

export function hasCompanyData(content, markers) {
	const readable = readableOutput(content).toLowerCase();
	return markers.some((marker) => readable.includes(marker));
}

export function loadedJavaScript(contents, outRoot) {
	const files = new Set();
	for (const content of contents) {
		const readable = readableOutput(content);
		for (const match of readable.matchAll(
			/\/_next\/static\/chunks\/[\w.-]+\.js\b/g,
		)) {
			const file = resolve(outRoot, match[0].slice(1));
			if (!file.startsWith(`${resolve(outRoot)}${sep}`))
				throw new Error("Invalid exported JavaScript path");
			files.add(file);
		}
	}
	return [...files].map((file) => ({
		file,
		content: readFileSync(file, "utf8"),
	}));
}
