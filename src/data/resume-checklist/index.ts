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

/** How much of an item's points each severity costs. Green 0, orange half, red all. */
export const SEVERITY_WEIGHT: Record<number, number> = { 0: 0, 1: 0.5, 2: 1 };

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

/** Score as the share of live points not lost to severity. 100 = all green. */
export function scoreForReview(review: Record<string, number>): number {
	let lost = 0;
	for (const item of checklistItems) {
		lost += item.points * (SEVERITY_WEIGHT[review[item.slug] ?? 0] ?? 0);
	}
	return Math.round((100 * (totalPoints - lost)) / totalPoints);
}

/** Score for a single group's items given the review map. */
export function scoreOfItems(
	items: IResolvedItem[],
	review: Record<string, number>,
): number {
	let total = 0;
	let lost = 0;
	for (const item of items) {
		total += item.points;
		lost += item.points * (SEVERITY_WEIGHT[review[item.slug] ?? 0] ?? 0);
	}
	return total === 0 ? 100 : Math.round((100 * (total - lost)) / total);
}
