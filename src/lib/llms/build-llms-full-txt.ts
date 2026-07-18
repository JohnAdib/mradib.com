import {
	sectionIdentity,
	sectionKeyFacts,
	sectionPages,
	sectionProfiles,
} from "@/lib/llms/llms-sections";
import {
	sectionAllRecognition,
	sectionEvidence,
	sectionFullBiography,
	sectionPersian,
} from "@/lib/llms/llms-sections-extra";

export function buildLlmsFullTxt(): string {
	return `${[
		sectionIdentity(),
		sectionFullBiography(),
		sectionKeyFacts(),
		sectionAllRecognition(),
		sectionPages(),
		sectionProfiles(),
		sectionEvidence(),
		sectionPersian(),
	].join("\n\n")}\n`;
}
