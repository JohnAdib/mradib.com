import type { ITodo } from "@/components/todo/interface";
import {
	guideIdsBySection,
	guideItemsBySection,
	guideStorageKey,
} from "@/data/resume-checklist/guide";

// Thin locale bound adapter over the shared checklist in src/data/resume-checklist.
// The guide's section widgets and table of contents import from here unchanged.

export const resumeChecklistStorageKey = guideStorageKey("fa-IR");

export function checklistItemsBySection(sectionId: string): ITodo[] {
	return guideItemsBySection(sectionId, "fa-IR");
}

export const checklistIdsBySection = guideIdsBySection();
