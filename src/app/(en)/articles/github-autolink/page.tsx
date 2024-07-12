import { ArticleLayout } from '@/components/article/layout';
import { type Metadata } from 'next';

export const article = {
  author: 'John Adib',
  date: '2024-07-12',
  title: 'GitHub Autolink',
  description:
    'Automatically linkify references to GitHub issues, PRs, commits, and users.',
};

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
};

export default function Page() {
  return (
    <>
      {/*
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
        children: React.ReactNode;
      */}

      <ArticleLayout
        title={article.title}
        intro={article.description}
        datePublished={article.date}
        locale='en-US'
      >

      </ArticleLayout>
    </>
  );
}
