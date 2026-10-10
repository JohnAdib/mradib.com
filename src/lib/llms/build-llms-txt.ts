import {
	sectionIdentity,
	sectionKeyFacts,
	sectionPages,
	sectionProfiles,
} from "@/lib/llms/llms-sections";
import {
	sectionAiDevelopment,
	sectionAiTools,
	sectionEvidence,
	sectionPersian,
} from "@/lib/llms/llms-sections-extra";

export function buildLlmsTxt(): string {
	return `${[
		sectionIdentity(),
		sectionAiDevelopment(),
		sectionKeyFacts(),
		sectionPages(),
		sectionProfiles(),
		sectionEvidence(),
		sectionAiTools(),
		sectionPersian(),
	].join("\n\n")}\n`;
}
