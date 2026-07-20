import type { LanguageLocale } from "@/lib/languages/locale";
import { groupTitlesEn, itemCopyEn } from "./checklist-copy-en";
import { groupTitlesFa, itemCopyFa } from "./checklist-copy-fa";
import type {
	ChecklistGroupId,
	IChecklistItemCopy,
} from "./checklist-interface";
import { checklistGroups, checklistItems } from "./checklist-items";

export type { ChecklistGroupId } from "./checklist-interface";

export interface IResolvedItem extends IChecklistItemCopy {
	slug: string;
	groupId: ChecklistGroupId;
	points: number;
}

export interface IResolvedGroup {
	id: ChecklistGroupId;
	title: string;
	/** Deep link into the matching resume guide section, locale aware. */
	guideHref: string;
	points: number;
	items: IResolvedItem[];
}

export const totalPoints = checklistItems.reduce(
	(sum, item) => sum + item.points,
	0,
);

/** How much of an item's points each grade costs. Good/great 0, needs-work half,
 * problem all. N/A (code 4) is not here; it is excluded from the score entirely. */
export const GRADE_WEIGHT: Record<number, number> = {
	0: 0,
	1: 0.5,
	2: 1,
	3: 0,
};

function copyFor(locale: LanguageLocale): {
	items: Record<string, IChecklistItemCopy>;
	titles: Record<ChecklistGroupId, string>;
} {
	return locale === "fa-IR"
		? { items: itemCopyFa, titles: groupTitlesFa }
		: { items: itemCopyEn, titles: groupTitlesEn };
}

function guideBase(locale: LanguageLocale): string {
	return locale === "fa-IR" ? "/fa/resume" : "/resume";
}

/** Every group with localized copy and items, in display order. */
export function groupsFor(locale: LanguageLocale): IResolvedGroup[] {
	const { items: copy, titles } = copyFor(locale);
	const base = guideBase(locale);
	return checklistGroups.map((group) => {
		const items = checklistItems
			.filter((item) => item.groupId === group.id)
			.map((item) => ({
				slug: item.slug,
				groupId: item.groupId,
				points: item.points,
				...copy[item.slug],
			}));
		const points = items.reduce((sum, item) => sum + item.points, 0);
		return {
			id: group.id,
			title: titles[group.id],
			guideHref: `${base}#${group.guideAnchor}`,
			points,
			items,
		};
	});
}

/** One item resolved with localized copy, or undefined for a stale slug. */
export function getItem(
	slug: string,
	locale: LanguageLocale,
): IResolvedItem | undefined {
	const item = checklistItems.find((entry) => entry.slug === slug);
	const text = copyFor(locale).items[slug];
	if (!item || !text) {
		return undefined;
	}
	return {
		slug: item.slug,
		groupId: item.groupId,
		points: item.points,
		...text,
	};
}

function scoreOver(
	items: { slug: string; points: number }[],
	review: Record<string, number>,
): number {
	let total = 0;
	let lost = 0;
	for (const item of items) {
		const code = review[item.slug] ?? 0;
		if (code === 4) {
			continue; // N/A: excluded from the score entirely.
		}
		total += item.points;
		lost += item.points * (GRADE_WEIGHT[code] ?? 0);
	}
	return total === 0 ? 100 : Math.round((100 * (total - lost)) / total);
}

/** Overall score over the applicable items (N/A excluded), less each deduction. */
export function scoreForReview(review: Record<string, number>): number {
	return scoreOver(checklistItems, review);
}

/** Score for one group's items given the review map. */
export function scoreOfItems(
	items: IResolvedItem[],
	review: Record<string, number>,
): number {
	return scoreOver(items, review);
}
