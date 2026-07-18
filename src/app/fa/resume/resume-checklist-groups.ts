import type { IChecklistGroup } from "@/components/todo/interface";
import { checklistItemsBySection } from "./resume-checklist-data";
import { resumeSections } from "./resume-sections";

const checklistSections = resumeSections.filter(
	(section) => section.hasChecklist,
);

export const resumeChecklistGroups: IChecklistGroup[] = [
	...checklistSections.map((section) => ({
		id: section.id,
		title: section.title,
		href: `#${section.id}`,
		items: checklistItemsBySection(section.id),
	})),
	{
		id: "review",
		title: "بازبینی نهایی",
		items: checklistItemsBySection("review"),
	},
];
