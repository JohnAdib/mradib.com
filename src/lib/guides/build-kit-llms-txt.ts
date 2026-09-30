import { fundraisingKit } from "@/data/guides/fundraising-kit";
import { guideAiLabels } from "@/data/guides/guide-labels";
import { hubCopy } from "@/data/guides/hub-copy";
import { hubRoute } from "@/data/guides/hub-route";
import { homepageUrl } from "@/lib/constants/url";

/** An index of the kit's frameworks, so one link hands an AI the whole kit. */
export function buildKitLlmsTxt(): string {
	const header = [
		`# ${hubCopy.aiText.title}`,
		"",
		`> ${hubCopy.aiText.summary}`,
		"",
		`${guideAiLabels.humanHub}: ${homepageUrl}${hubRoute}`,
	].join("\n");
	const entries = fundraisingKit.map((entry, index) => {
		const url = `${homepageUrl}${entry.article.pagePath}`;
		return [
			`## ${index + 1}. ${entry.name}`,
			entry.article.description,
			`${guideAiLabels.humanGuide}: ${url}`,
			`${guideAiLabels.framework}: ${url}/llms.txt`,
			`${guideAiLabels.skill}: ${url}/skill.md`,
		].join("\n");
	});
	return `${[header, ...entries].join("\n\n")}\n`;
}
