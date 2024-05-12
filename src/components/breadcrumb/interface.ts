export interface IBreadcrumbItem {
  position: number;
  name: string;
  item: string;
  current: boolean;
}

export interface IBreadcrumb {
  list?: IBreadcrumbItem[];
}