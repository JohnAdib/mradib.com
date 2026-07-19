import Link from "next/link";
import type { IArticle } from "@/data/articles/article-interface";
import { formatDateTime } from "@/lib/datetime/format-date-time";

export function ArticleFeature({ article }: { article: IArticle }) {
	return (
		<article className="group border-t border-zinc-900/10 py-12 sm:py-16 dark:border-zinc-700/40">
			<time
				dateTime={article.datePublished}
				className="text-sm font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400"
			>
				{formatDateTime({ datetime: article.datePublished })}
			</time>
			<h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-zinc-800 transition-colors group-hover:text-accent-700 sm:text-4xl dark:text-zinc-100 dark:group-hover:text-accent-400">
				<Link href={article.pagePath}>{article.title}</Link>
			</h2>
			<p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
				{article.description}
			</p>
			<Link
				href={article.pagePath}
				className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent-700 dark:text-accent-400"
			>
				Read article
				<span aria-hidden="true">→</span>
			</Link>
		</article>
	);
}
