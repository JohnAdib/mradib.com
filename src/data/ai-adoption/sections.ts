import { feedbackSections } from "./feedback";
import { openingSections } from "./opening";
import type { ArticleSectionData } from "./types";
import { verificationSections } from "./verification";

export type { ArticleSectionData } from "./types";

export const articleSections: ArticleSectionData[] = [
	...openingSections,
	...verificationSections,
	...feedbackSections,
];
