import type { IBreadcrumbItem } from "@/components/breadcrumb/interface";
import { hubRoute } from "@/data/guides/fundraising-kit";
import type { IGuide } from "@/data/guides/guide-bundle";
import { kitCopy } from "@/data/guides/kit-copy";

const kitCrumb = { position: 1, item: hubRoute, name: kitCopy.name };

/** The kit, then the guide itself. Built here so no page writes it by hand. */
export function guideBreadcrumb(guide: IGuide): IBreadcrumbItem[] {
	return [
		{ ...kitCrumb, current: false },
		{
			position: 2,
			item: guide.article.pagePath,
			current: true,
			name: guide.name,
		},
	];
}

/** The hub is a top-level page, so its crumb is the kit alone. */
export function hubBreadcrumb(): IBreadcrumbItem[] {
	return [{ ...kitCrumb, current: true }];
}
