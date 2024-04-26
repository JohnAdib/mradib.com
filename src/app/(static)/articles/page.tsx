import { type Metadata } from 'next';

import { SimpleLayout } from '@/components/simple-layout';

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
};

export default async function ArticlesIndex() {
  return (
    <SimpleLayout
      title="Writing on software design, company building, and the aerospace industry."
      intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pr-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
        </div>
      </div>
    </SimpleLayout>
  );
}
