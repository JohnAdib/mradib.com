export interface IArticle {
	author: string;
	publishDate: string;
	publishTime: string;
	datePublished: string;
	dateModified: string;
	title: string;
	description: string;
	pageTitle: string;
	pageDesc: string;
	pagePath: string;
	/** Persian counterpart path, when the article has one. Drives sitemap pairing and i18n alternates. */
	faPath?: string;
	keywords: string[];
	inLanguage?: string;
	pdfUrl?: string;
}
