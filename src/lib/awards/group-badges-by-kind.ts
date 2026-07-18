import type { AdplistBadgeKind, IAdplistBadge } from "@/data/awards";

export interface IBadgeKindGroup {
	kind: AdplistBadgeKind;
	badges: IAdplistBadge[];
}

/** Rarest first: Super Mentor (top 0.1%, quarterly) and Top 10 Front-End (a literal top-10) lead, Top 1% closes as the consistency story. */
const kindOrder: AdplistBadgeKind[] = ["superMentor", "top10Frontend", "top1"];

/** Groups badges by kind, in a fixed order, newest badge first within each group. */
export function groupBadgesByKind(badges: IAdplistBadge[]): IBadgeKindGroup[] {
	return kindOrder.map((kind) => ({
		kind,
		badges: badges
			.filter((badge) => badge.kind === kind)
			.sort((a, b) => b.date.localeCompare(a.date)),
	}));
}
