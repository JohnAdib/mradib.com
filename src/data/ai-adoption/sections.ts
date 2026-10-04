import { feedbackSections } from "./feedback";
import { openingSections } from "./opening";
import { skillSection } from "./skill-section";
import type { ArticleSectionData } from "./types";
import { verificationSections } from "./verification";

export type { ArticleSectionData } from "./types";

export const articleSections: ArticleSectionData[] = [
	...openingSections.flatMap((section) =>
		section.kind === "loop" ? [skillSection, section] : [section],
	),
	...verificationSections,
	...feedbackSections,
];
