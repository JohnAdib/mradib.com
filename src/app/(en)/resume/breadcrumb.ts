import type { IBreadcrumbItem } from "@/components/breadcrumb/interface";

export const breadcrumb: IBreadcrumbItem[] = [
	{
		position: 1,
		item: "/articles",
		current: false,
		name: "Articles",
	},
	{
		position: 2,
		current: true,
		item: "/resume",
		name: "Resume",
	},
];
