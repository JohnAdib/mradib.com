import { IArticleLayout } from './interface';

interface IArticleJSONLD {
  articleData: IArticleLayout;
}

interface IArticlestructuredData {
  '@context': string;
  '@type': string;
  headline: string;
  image: string[];
  datePublished: string;
  dateModified?: string;
  author: {
    '@type': string;
    name: string;
    additionalName: string;
    alternateName: string;
    familyName: string;
    disambiguatingDescription?: string;
    jobTitle?: string;
    url?: string;
  }[];
  publisher: {
    name: string;
    url: string;
  };
}

export const ArticleJsonLD: React.FC<IArticleJSONLD> = ({ articleData }) => {
  const { title, coverImage, datePublished, dateModified } = articleData;

  const structuredData: IArticlestructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    image: [
      coverImage.src,
    ],
    datePublished: datePublished,
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
      name: 'MrAdib.com',
      url: 'https://mradib.com',
    },
  };

  if (dateModified) {
    structuredData.dateModified = dateModified;
  }

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData, null, 2)}
    </script>
  );
};
