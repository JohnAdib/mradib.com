import {
	sectionIdentity,
	sectionKeyFacts,
	sectionPages,
	sectionProfiles,
} from "@/lib/llms/llms-sections";
import {
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
