import { BreadcrumbList, WithContext } from 'schema-dts';
import { IBreadcrumb } from './interface';

export const BreadcrumbJsonLD: React.FC<IBreadcrumb> = ({ list }) => {
  if (!list) {
    return null;
  }

  const jsonLd: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: list?.map(({ position, name, item }) => ({
      '@type': 'ListItem',
      position: position,
      name: name,
      item: item,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
