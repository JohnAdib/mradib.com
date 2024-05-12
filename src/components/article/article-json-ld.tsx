import { homepageUrl } from '@/lib/constants/url';
import { Article, WithContext } from 'schema-dts';
import { IArticleLayout } from './interface';

interface IArticleJSONLD {
  articleData: Partial<IArticleLayout>;
}

export const ArticleJsonLD: React.FC<IArticleJSONLD> = ({ articleData }) => {
  const { title, intro, coverImage, datePublished, dateModified } = articleData;

  const jsonLd: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: intro,
    image: [
      homepageUrl + coverImage?.src,
    ],
    datePublished: datePublished,
    dateModified: dateModified ?? datePublished,
    author: [
      {
        '@type': 'Person',
        name: 'جان ادیب',
        additionalName: 'مستر ادیب',
        alternateName: 'جواد ادیب',
        familyName: 'ادیب',
        disambiguatingDescription: 'جواد عوض زاده سابق',
        jobTitle: 'Senior Software Engineer',
        url: 'https://mradib.com/about',
      },
    ],
    publisher:
    {
      '@type': 'Person',
      name: 'MrAdib',
      alternateName: 'مستر ادیب',
      url: 'https://mradib.com',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
