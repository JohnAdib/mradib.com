import type { IBreadcrumbItem } from "@/components/breadcrumb/interface";
import type { IGuide } from "@/data/guides/guide-bundle";
import { guideUiLabels } from "@/data/guides/guide-labels";

/** Articles, then the guide itself. Built here so no page writes it by hand. */
export function guideBreadcrumb(guide: IGuide): IBreadcrumbItem[] {
	return [
		{
			position: 1,
			item: "/articles",
			current: false,
			name: guideUiLabels.articles,
		},
		{
			position: 2,
			item: guide.article.pagePath,
			current: true,
			name: guide.name,
		},
	];
}
