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
 * The checklist. Points are weighted by impact and sum to 100 today, but the
 * score is computed as a share of the live total so new items never break it.
 */
export const checklistItems: IChecklistItem[] = [
	{ slug: "fmt", groupId: "template", points: 7 },
	{ slug: "sect", groupId: "template", points: 6 },
	{ slug: "cont", groupId: "contact", points: 5 },
	{ slug: "email", groupId: "contact", points: 4 },
	{ slug: "summ", groupId: "summary", points: 6 },
	{ slug: "exp", groupId: "experience", points: 8 },
	{ slug: "ach", groupId: "experience", points: 9 },
	{ slug: "hist", groupId: "experience", points: 6 },
	{ slug: "skill", groupId: "skills", points: 7 },
	{ slug: "edu", groupId: "education", points: 5 },
	{ slug: "opt", groupId: "optional", points: 4 },
	{ slug: "len", groupId: "length", points: 6 },
	{ slug: "job", groupId: "ats", points: 8 },
	{ slug: "verb", groupId: "action-verbs", points: 6 },
	{ slug: "read", groupId: "review", points: 4 },
	{ slug: "gram", groupId: "review", points: 5 },
	{ slug: "peer", groupId: "review", points: 4 },
];
