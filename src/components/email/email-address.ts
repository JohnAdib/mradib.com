/*
  The address is assembled at runtime from parts so the full string never
  appears in the static HTML that scrapers harvest. Gmail plus-tags mark
  which surface an address was taken from: filterable, traceable. The
  canonical untagged address lives in src/data/profile.ts for build-time
  consumers (llms.txt) that are meant to carry it.
*/
const user = ["Mr", "JohnAdib"].join(".");
const host = ["Gmail", "com"].join(".");

export type EmailTag = "site" | "copy" | "talk" | "footer";

export function buildEmail(tag?: EmailTag): string {
	return `${user}${tag ? `+${tag}` : ""}@${host}`;
}

export function buildMailto(tag?: EmailTag, subject?: string): string {
	const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";
	return `mailto:${buildEmail(tag)}${query}`;
}
