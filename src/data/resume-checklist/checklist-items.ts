import type { IChecklistGroupDef, IChecklistItem } from "./checklist-interface";

/** Ordered groups. guideAnchor deep links into /resume (or /fa/resume). */
export const checklistGroups: IChecklistGroupDef[] = [
	{ id: "template", guideAnchor: "template" },
	{ id: "contact", guideAnchor: "contact" },
	{ id: "summary", guideAnchor: "summary" },
	{ id: "experience", guideAnchor: "experience" },
	{ id: "skills", guideAnchor: "skills" },
	{ id: "education", guideAnchor: "education" },
	{ id: "optional", guideAnchor: "optional" },
	{ id: "length", guideAnchor: "length" },
	{ id: "ats", guideAnchor: "ats" },
	{ id: "action-verbs", guideAnchor: "action-verbs" },
	{ id: "review", guideAnchor: "checklist" },
];

/**
 * The checklist. Points are weighted by impact and sum to 100, but the score is
 * computed as a share of the live total so adding items never breaks it.
 */
export const checklistItems: IChecklistItem[] = [
	{ slug: "fmt", groupId: "template", points: 5 },
	{ slug: "sect", groupId: "template", points: 4 },
	{ slug: "pdf", groupId: "template", points: 3 },
	{ slug: "consistency", groupId: "template", points: 3 },
	{ slug: "cont", groupId: "contact", points: 4 },
	{ slug: "email", groupId: "contact", points: 3 },
	{ slug: "links", groupId: "contact", points: 3 },
	{ slug: "filename", groupId: "contact", points: 2 },
	{ slug: "summ", groupId: "summary", points: 4 },
	{ slug: "buzzwords", groupId: "summary", points: 4 },
	{ slug: "exp", groupId: "experience", points: 5 },
	{ slug: "ach", groupId: "experience", points: 6 },
	{ slug: "hist", groupId: "experience", points: 4 },
	{ slug: "firstperson", groupId: "experience", points: 3 },
	{ slug: "dates", groupId: "experience", points: 4 },
	{ slug: "gaps", groupId: "experience", points: 3 },
	{ slug: "skill", groupId: "skills", points: 5 },
	{ slug: "edu", groupId: "education", points: 3 },
	{ slug: "opt", groupId: "optional", points: 3 },
	{ slug: "personal", groupId: "optional", points: 3 },
	{ slug: "len", groupId: "length", points: 3 },
	{ slug: "dense", groupId: "length", points: 4 },
	{ slug: "job", groupId: "ats", points: 6 },
	{ slug: "verb", groupId: "action-verbs", points: 4 },
	{ slug: "read", groupId: "review", points: 2 },
	{ slug: "gram", groupId: "review", points: 3 },
	{ slug: "peer", groupId: "review", points: 2 },
	{ slug: "references", groupId: "review", points: 2 },
];
