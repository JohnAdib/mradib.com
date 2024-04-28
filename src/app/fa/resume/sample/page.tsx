/* eslint-disable react/no-unescaped-entities */

import { ArticleLayout } from '@/components/article/layout';
import { separator } from '@/lib/constants/en';
import { myNameFa } from '@/lib/constants/fa';
import { readingTime } from '@/lib/reading-time';
import { type Metadata } from 'next';
import coverImg from './opengraph-image.jpg';

const publishDate = '2024-04-08';
const publicTime = '02:53:24';
const publishTime = `${publishDate}T${publicTime}.000Z`;
const articleTitle = 'بهترین آموزش ساخت رزومه';
const articleDescription = 'قصد دارید رزومه بسازید و برای شغلی اپلای کنید؟ صفر تا صد ساخت رزومه رو اینجا بخونید تا یک رزومه حرفه‌ای بسازید. این بهترین و کامل‌ترین و جامع‌ترین آموزش ساخت رزومه در کهکشان است!';
const pageTitle = 'آموزش ساخت رزومه';
const pageDesc = 'وقتشه رزومه خفن خودت رو بسازی. آموزش صفر تا صد ساخت رزومه';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc + separator + myNameFa,
  openGraph: {
    type: 'article',
    publishedTime: publishTime,
  },
  twitter: {
    card: 'summary_large_image',
  },
};

function PageContent(): JSX.Element {
  return (
    <section>
      <p>Resume</p>

    </section>
  );
}

export default function Page() {

  const articleReadingTime = readingTime(<PageContent />);

  return (
    <>
      <ArticleLayout
        title={articleTitle}
        intro={articleDescription}
        coverImage={coverImg}
        date={publishDate}
        time={publicTime}
        readTimeMinutes={articleReadingTime}
      >
        <PageContent />
      </ArticleLayout>
    </>
  );
}
