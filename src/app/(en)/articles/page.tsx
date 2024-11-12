import { Card } from "@/components/card";
import { SimpleLayout } from "@/components/simple-layout";
import { formatDateTime } from "@/lib/datetime/format-date-time";
import clsx from "clsx";
import { type Metadata } from "next";
import { articlesList } from "../(articles)/articles-list";
import { IArticle } from "../(articles)/i-article-interface";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.",
};

export default async function ArticlesIndex() {
  return (
    <SimpleLayout
      title="My Articles"
      intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
    >
      <div
        className={clsx(
          "md:border-l md:border-zinc-100",
          "rtl:md:pr-6",
          "ltr:md:pl-6",
          "md:dark:border-zinc-700/40",
        )}
      >
        <div className="flex max-w-3xl flex-col space-y-16">
          {articlesList.map((article) => (
            <Article key={article.pagePath} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
}

function Article({ article }: { article: IArticle }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`${article.pagePath}`}>{article.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.datePublished}
          className="md:hidden"
          decorate
        >
          {formatDateTime({ datetime: article.datePublished })}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.datePublished}
        className="mt-1 hidden md:block"
      >
        {formatDateTime({ datetime: article.datePublished })}
      </Card.Eyebrow>
    </article>
  );
}
