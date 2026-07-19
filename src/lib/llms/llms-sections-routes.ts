import { routesEn, routesFa } from "@/data/routes";
import { homepageUrl } from "@/lib/constants/url";

// Full URL map derived from the routes data, so agents can see every page,
// including the Persian pages and the action-verbs lists, without crawling.
export function sectionSiteStructure(): string {
	const enLines = routesEn.map((route) => {
		const fa = route.faPath ? ` (Persian: ${homepageUrl}${route.faPath})` : "";
		return `- ${homepageUrl}${route.path}${fa}`;
	});
	const faLines = routesFa.map((route) => `- ${homepageUrl}${route.path}`);
	return [
		"## Site structure",
		"",
		"English pages:",
		...enLines,
		"",
		"Persian pages:",
		...faLines,
	].join("\n");
}
