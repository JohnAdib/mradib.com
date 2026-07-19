export interface ISiteRoute {
	path: string;
	/** ISO date (YYYY-MM-DD) the page last materially changed. */
	lastModified: string;
	/** Persian counterpart path, when the page has a paired translation. */
	faPath?: string;
}
