import { FAQPage, WithContext } from 'schema-dts';
import { IFaqQA } from './faq-interface';

interface FAQProps {
  faqData: IFaqQA[];
}

export const FaqJsonLD: React.FC<FAQProps> = ({
  faqData
}: FAQProps
) => {
  const jsonLd: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: 'سوالات متداول',
    mainEntity: faqData.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
