import type { IBreadcrumbItem } from "@/components/breadcrumb/interface";

export const breadcrumb: IBreadcrumbItem[] = [
	{
		position: 1,
		item: "/fa",
		current: false,
		name: "فارسی",
	},
	{
		position: 2,
		current: true,
		item: "/fa/resume",
		name: "رزومه",
	},
];
