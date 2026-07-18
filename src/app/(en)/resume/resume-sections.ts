import type { ITocSection } from "@/components/toc/interface";

export const resumeSections = [
	{ id: "template", title: "Resume Template", hasChecklist: true },
	{ id: "contact", title: "Contact Information", hasChecklist: true },
	{ id: "summary", title: "Summary Section", hasChecklist: true },
	{ id: "experience", title: "Work Experience", hasChecklist: true },
	{ id: "skills", title: "Skills", hasChecklist: true },
	{ id: "education", title: "Education", hasChecklist: true },
	{ id: "optional", title: "Optional Sections", hasChecklist: true },
	{ id: "length", title: "Resume Length", hasChecklist: true },
	{ id: "ats", title: "ATS Applicant Tracking System", hasChecklist: true },
	{ id: "action-verbs", title: "Action Verbs", hasChecklist: true },
	{ id: "checklist", title: "Final Checklist", hasChecklist: false },
	{ id: "references", title: "References", hasChecklist: false },
	{ id: "cover-letter", title: "Cover Letter", hasChecklist: false },
] as const;

export type ResumeSectionId = (typeof resumeSections)[number]["id"];

export interface IResumeSection {
	id: ResumeSectionId;
	title: string;
	hasChecklist: boolean;
}

export const tocSections: ITocSection[] = resumeSections.map((section) => ({
	id: section.id,
	title: section.title,
}));
