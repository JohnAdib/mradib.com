import type { ITodo } from "@/components/todo/interface";
import type { ResumeSectionId } from "./resume-sections";

export type ChecklistSectionId = ResumeSectionId | "review";

export interface IResumeChecklistItem extends ITodo {
	sectionId: ChecklistSectionId;
}

export const resumeChecklistStorageKey = "resume-checklist-en";

export const resumeChecklistItems: IResumeChecklistItem[] = [
	{
		id: "resume-format",
		item: "Did you use a suitable format for your resume?",
		sectionId: "template",
	},
	{
		id: "essential-sections",
		item: "Did you include all the essential sections in your resume?",
		sectionId: "template",
	},
	{
		id: "contact-info",
		item: "Does the contact section include all the essential details?",
		sectionId: "contact",
	},
	{
		id: "professional-email",
		item: "Are you using a professional email address, like name.family@gmail.com?",
		sectionId: "contact",
	},
	{
		id: "summary-length",
		item: "Did you keep the summary to two or three lines at most?",
		sectionId: "summary",
	},
	{
		id: "relevant-experience",
		item: "Did you list only the most relevant work experience?",
		sectionId: "experience",
	},
	{
		id: "achievements",
		item: "Did you list your achievements instead of your responsibilities?",
		sectionId: "experience",
	},
	{
		id: "work-history",
		item: "Did you include the right amount of work history?",
		sectionId: "experience",
	},
	{
		id: "relevant-skills",
		item: "Did you list the skills that match the role you are applying for?",
		sectionId: "skills",
	},
	{
		id: "education",
		item: "Did you include your education in the resume?",
		sectionId: "education",
	},
	{
		id: "important-sections",
		item: "Did you add the other important sections to your resume?",
		sectionId: "optional",
	},
	{
		id: "page-length",
		item: "Is your resume one to two pages long?",
		sectionId: "length",
	},
	{
		id: "job-tailored",
		item: "Did you tailor your resume to the needs of the job posting?",
		sectionId: "ats",
	},
	{
		id: "action-verbs-used",
		item: "Did you start your achievements with action verbs and avoid repeating the same one?",
		sectionId: "action-verbs",
	},
	{
		id: "self-review",
		item: "Did you read through your whole resume yourself?",
		sectionId: "review",
	},
	{
		id: "grammar-check",
		item: "Did you run the text through Grammarly to catch spelling and grammar mistakes?",
		sectionId: "review",
	},
	{
		id: "peer-review",
		item: "Did you share the resume with a few friends and ask for their feedback?",
		sectionId: "review",
	},
];

export function checklistItemsBySection(
	sectionId: ChecklistSectionId,
): ITodo[] {
	return resumeChecklistItems.filter((item) => item.sectionId === sectionId);
}

function buildChecklistIdsBySection(): Record<string, string[]> {
	const map: Record<string, string[]> = {};
	for (const item of resumeChecklistItems) {
		const ids = map[item.sectionId] ?? [];
		ids.push(item.id);
		map[item.sectionId] = ids;
	}
	return map;
}

export const checklistIdsBySection: Record<string, string[]> =
	buildChecklistIdsBySection();
