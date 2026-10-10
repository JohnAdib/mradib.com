import { fundraisingKit, type IKitEntry } from "@/data/guides/fundraising-kit";
import type { IGuide } from "@/data/guides/guide-bundle";

export interface IKitPosition {
	/** Zero-based, or -1 when the guide is not in the kit. */
	index: number;
	total: number;
	prev?: IKitEntry;
	next?: IKitEntry;
}

/** Where a guide sits in the kit, matched by its article path. */
export function kitPosition(guide: IGuide): IKitPosition {
	const index = fundraisingKit.findIndex(
		(entry) => entry.article.pagePath === guide.article.pagePath,
	);
	return {
		index,
		total: fundraisingKit.length,
		prev: index > 0 ? fundraisingKit[index - 1] : undefined,
		next: index >= 0 ? fundraisingKit[index + 1] : undefined,
	};
}
