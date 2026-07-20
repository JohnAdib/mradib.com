/**
 * The resume checklist, one source for the self-assessment guide and the
 * shareable scorecard. Structure (slug, group, points) is locale invariant;
 * the words live in the per-locale copy maps so no fact is stated twice.
 */

/** Ordered scoring groups. Ids double as resume guide section anchors. */
export type ChecklistGroupId =
	| "template"
	| "contact"
	| "summary"
	| "experience"
	| "skills"
	| "education"
	| "optional"
	| "length"
	| "ats"
	| "action-verbs"
	| "review";

/** Locale invariant shape of one checklist item. */
export interface IChecklistItem {
	/** Short, stable, URL safe id. Lives in share links; never renumber it. */
	slug: string;
	groupId: ChecklistGroupId;
	/** Weight toward the 100 point score. */
	points: number;
}

/** Localized copy for one item, keyed by slug. */
export interface IChecklistItemCopy {
	/** Self-assessment question, shown on the resume guide. */
	question: string;
	/** Short topic label for the scorecard. */
	title: string;
	/** What is wrong, shown when the item is flagged as an issue. */
	problem: string;
	/** How to fix it, one plain sentence. */
	fix: string;
}

/** Ordered group with the guide section it deep links into. */
export interface IChecklistGroupDef {
	id: ChecklistGroupId;
	guideAnchor: string;
}
