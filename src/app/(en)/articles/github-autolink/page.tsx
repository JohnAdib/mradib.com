import { ArticleLayout } from '@/components/article/layout';
import { type Metadata } from 'next';

interface IArticle {
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
  keywords: string[];
}

export const article: IArticle = {
  author: 'John Adib',
  publishDate: '2024-07-12',
  publishTime: '14:28:00',
  datePublished: '',
  dateModified: '',
  title: 'GitHub Autolink',
  description:
    'Automatically linkify references to GitHub issues, PRs, commits, and users.',
  pageTitle: 'GitHub Autolink',
  pageDesc:
    'Automatically linkify references to GitHub issues, PRs, commits, and users.',
  pagePath: '/en/articles/github-autolink',
  keywords: [
    'GitHub',
    'autolink',
  ],
};

// set publish date and time
article.datePublished = article.publishDate + 'T' + article.publishTime + '.000Z';
article.dateModified = '2024-05-12' + 'T' + '19:04:00' + '.000Z';

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
};

export default function Page() {
  return (
    <>
      <ArticleLayout
        title={article.title}
        intro={article.description}
        datePublished={article.date}
        lang='en-US'
      >
      The article
      </ArticleLayout>
    </>
  );
}
