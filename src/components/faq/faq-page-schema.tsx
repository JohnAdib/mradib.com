import { IFaqQA } from './faq-interface';

interface FAQProps {
  faqData: IFaqQA[];
}

export const FaqJsonLD: React.FC<FAQProps> = ({ faqData }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
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
    <script type="application/ld+json">
      {JSON.stringify(structuredData, null, 2)}
    </script>
  );
};
