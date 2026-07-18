import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { articlesMeta } from "@/data/articles/articles-meta";
import { urlSocial } from "@/lib/constants/url-social";
import { formatDateTime } from "@/lib/datetime/format-date-time";
import { SectionHeader } from "./section-header";

export function HomeWriting() {
	const latest = articlesMeta.slice(0, 3);

	return (
		<Container className="mt-20 sm:mt-28">
			<SectionHeader title="Writing" href="/articles" linkText="All articles" />
			<div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-3">
				{latest.map((article) => (
					<Card as="article" key={article.pagePath}>
						<Card.Eyebrow decorate as="time" dateTime={article.datePublished}>
							{formatDateTime({ datetime: article.datePublished })}
						</Card.Eyebrow>
						<Card.Title href={article.pagePath}>{article.title}</Card.Title>
						<Card.Description>{article.description}</Card.Description>
						<Card.Cta>Read article</Card.Cta>
					</Card>
				))}
			</div>
			<p className="mt-10 text-sm text-zinc-600 dark:text-zinc-400">
				I'm also a long-time open-source contributor —{" "}
				<a
					href={urlSocial.github}
					target="_blank"
					rel="noopener noreferrer"
					className="font-medium text-accent-700 transition hover:text-accent-600 dark:text-accent-400"
				>
					find my work on GitHub →
				</a>
			</p>
		</Container>
	);
}
