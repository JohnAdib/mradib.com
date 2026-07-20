import type { IChecklistGroup, ITodo } from "@/components/todo/interface";
import type { LanguageLocale } from "@/lib/languages/locale";
import { groupTitlesEn, itemCopyEn } from "./checklist-copy-en";
import { groupTitlesFa, itemCopyFa } from "./checklist-copy-fa";
import type { IChecklistItemCopy } from "./checklist-interface";
import { checklistGroups, checklistItems } from "./checklist-items";

/**
 * Adapters that feed the resume guide's self-assessment widgets (the per
 * section checklists, the final summary, and the table of contents progress).
 * They map the shared data to the guide's ITodo shape so those components stay
 * untouched: id is the slug, and the label is the self-assessment question.
 */

export function guideStorageKey(locale: LanguageLocale): string {
	return locale === "fa-IR" ? "resume-checklist-fa" : "resume-checklist-en";
}

function copyFor(locale: LanguageLocale): Record<string, IChecklistItemCopy> {
	return locale === "fa-IR" ? itemCopyFa : itemCopyEn;
}

function toTodo(locale: LanguageLocale, groupId: string): ITodo[] {
	const copy = copyFor(locale);
	return checklistItems
		.filter((item) => item.groupId === groupId)
		.map((item) => ({ id: item.slug, item: copy[item.slug].question }));
}

export function guideItemsBySection(
	sectionId: string,
	locale: LanguageLocale,
): ITodo[] {
	return toTodo(locale, sectionId);
}

export function guideIdsBySection(): Record<string, string[]> {
	const map: Record<string, string[]> = {};
	for (const item of checklistItems) {
		const ids = map[item.groupId] ?? [];
		ids.push(item.slug);
		map[item.groupId] = ids;
	}
	return map;
}

export function guideGroups(locale: LanguageLocale): IChecklistGroup[] {
	const titles = locale === "fa-IR" ? groupTitlesFa : groupTitlesEn;
	return checklistGroups.map((group) => ({
		id: group.id,
		title: titles[group.id],
		href: group.id === "review" ? undefined : `#${group.guideAnchor}`,
		items: toTodo(locale, group.id),
	}));
}
