import { type Metadata } from 'next';

import { SimpleLayout } from '@/components/simple-layout';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photography by MrAdib.',
};

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Gallery"
      intro="Photography by John Adib. I will be adding photos soon."
    />
  );
}
