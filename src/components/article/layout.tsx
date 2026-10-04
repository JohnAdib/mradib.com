import "server-only";

import { Container } from "@/components/container";
import { Prose } from "@/components/prose";
import Faq from "../faq/faq";
import type { FaqLanguage } from "../faq/faq-interface";
import { NavNextPrev } from "../nav-next-prev/nav-next-prev";
import { ArticleJsonLD } from "./article-json-ld";
import { ArticleBackButton } from "./back-button";
import { ArticleHeader } from "./header";
import type { IArticleLayout } from "./interface";

export function ArticleLayout({
	title,
	intro,
	coverImage,
	urlPath,
	keywords,
	datePublished,
	dateModified,
	readTimeMinutes,
	neutralAuthor,
	faq,
	breadcrumb,
	nextPrev,
	lang,
	aside,
	children,
}: IArticleLayout) {
	const myLanguage: FaqLanguage = (lang.split("-")[0] || "en") as FaqLanguage;

	return (
		<Container className="mt-8 md:mt-12 lg:mt-16">
			<div className="articleBox xl:relative">
				<div className="mx-auto max-w-2xl">
					<ArticleBackButton />
					<article>
						<ArticleHeader
							title={title}
							intro={intro}
							coverImage={coverImage}
							breadcrumb={breadcrumb}
							datePublished={datePublished}
							readTimeMinutes={readTimeMinutes}
							lang={lang}
						/>
						<Prose>{children}</Prose>
					</article>
					<NavNextPrev next={nextPrev?.next} prev={nextPrev?.prev} />
				</div>
				{aside ? (
					<aside className="hidden xl:block absolute inset-y-0 end-0 w-48">
						<div className="sticky top-24 ps-12">{aside}</div>
					</aside>
				) : null}
				<ArticleJsonLD
					headline={title}
					name={title}
					description={intro}
					coverImage={coverImage}
					urlPath={urlPath}
					keywords={keywords}
					datePublished={datePublished}
					dateModified={dateModified}
					neutralAuthor={neutralAuthor}
				/>
			</div>
			<Faq list={faq} language={myLanguage} />
		</Container>
	);
}
