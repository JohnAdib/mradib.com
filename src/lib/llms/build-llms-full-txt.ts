import {
	sectionIdentity,
	sectionKeyFacts,
	sectionPages,
	sectionProfiles,
} from "@/lib/llms/llms-sections";
import {
	sectionAiDevelopment,
	sectionAiTools,
	sectionAllRecognition,
	sectionEvidence,
	sectionFullBiography,
	sectionPersian,
} from "@/lib/llms/llms-sections-extra";
import { sectionSiteStructure } from "@/lib/llms/llms-sections-routes";

export function buildLlmsFullTxt(): string {
	return `${[
		sectionIdentity(),
		sectionAiDevelopment(),
		sectionFullBiography(),
		sectionKeyFacts(),
		sectionAllRecognition(),
		sectionPages(),
		sectionSiteStructure(),
		sectionProfiles(),
		sectionEvidence(),
		sectionAiTools(),
		sectionPersian(),
	].join("\n\n")}\n`;
}
