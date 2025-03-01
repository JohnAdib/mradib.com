import type { LanguageLocale } from "@/lib/languages/locale";
import type { StaticImageData } from "next/image";
import type { IBreadcrumbItem } from "../breadcrumb/interface";
import type { IFaqQA } from "../faq/faq-interface";
import type { INavNextPrev } from "../nav-next-prev/interface";

export interface IArticleLayout {
	title: string;
	intro: string;
	urlPath: string;
	keywords: string[];
	coverImage: StaticImageData;
	datePublished: string;
	dateModified: string;
	readTimeMinutes?: number;
	faq?: IFaqQA[];
	breadcrumb?: IBreadcrumbItem[];
	nextPrev?: INavNextPrev;
	lang: LanguageLocale;
	children: React.ReactNode;
}
