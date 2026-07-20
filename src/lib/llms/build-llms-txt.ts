import {
	sectionIdentity,
	sectionKeyFacts,
	sectionPages,
	sectionProfiles,
} from "@/lib/llms/llms-sections";
import {
	sectionEvidence,
	sectionPersian,
	sectionResumeAiTools,
} from "@/lib/llms/llms-sections-extra";

export function buildLlmsTxt(): string {
	return `${[
		sectionIdentity(),
		sectionKeyFacts(),
		sectionPages(),
		sectionProfiles(),
		sectionEvidence(),
		sectionResumeAiTools(),
		sectionPersian(),
	].join("\n\n")}\n`;
}
