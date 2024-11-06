import { IBreadcrumbItem } from "@/components/breadcrumb/interface";

export const breadcrumb: IBreadcrumbItem[] = [
  {
    position: 1,
    item: "/fa",
    current: false,
    name: "فارسی",
  },
  {
    position: 2,
    current: false,
    item: "/fa/resume",
    name: "رزومه",
  },
  {
    position: 3,
    current: true,
    item: "/fa/resume/template",
    name: "قالب رزومه",
  },
];
