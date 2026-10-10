import clsx from "clsx";
import Image from "next/image";
import { formatDateTime } from "@/lib/datetime/format-date-time";
import { Breadcrumb } from "../breadcrumb/breadcrumb";
import type { IArticleLayout } from "./interface";
import { ArticleReadTime } from "./read-time";

type ArticleHeaderProps = Pick<
	IArticleLayout,
	| "title"
	| "intro"
	| "coverImage"
	| "breadcrumb"
	| "datePublished"
	| "readTimeMinutes"
	| "lang"
>;

export function ArticleHeader({
	title,
	intro,
	coverImage,
	breadcrumb,
	datePublished,
	readTimeMinutes,
	lang,
}: ArticleHeaderProps) {
	return (
		<header className="flex flex-col gap-4">
			<Breadcrumb list={breadcrumb} />
			<h1
				className={clsx(
					"text-balance",
					"text-3xl sm:text-4xl md:text-5xl",
					"font-black",
					"tracking-tight",
					"text-accent-950",
					"dark:text-zinc-100",
				)}
			>
				{title}
			</h1>
			<p className="text-pretty text-sm md:text-base leading-relaxed">
				{intro}
			</p>
			{coverImage && (
				<Image
					src={coverImage}
					alt={title}
					priority
					className="rounded-xl md:rounded-3xl select-none touch-none max-md:pointer-events-none transition hover:brightness-110"
				/>
			)}
			<div className="infoBox flex justify-between text-sm select-none">
				<time
					dateTime={datePublished}
					title={`Published on ${datePublished}`}
					className="flex items-center text-zinc-500 dark:text-zinc-400"
				>
					<span>
						{formatDateTime({ datetime: datePublished, locale: lang })}
					</span>
				</time>{" "}
				<ArticleReadTime minutes={readTimeMinutes} lang={lang} />
			</div>
		</header>
	);
}
