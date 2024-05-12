/* eslint-disable react/no-unescaped-entities */

import { ArticleLayout } from '@/components/article/layout';
import { Msg } from '@/components/msg/msg';
import { separator } from '@/lib/constants/en';
import { myNameFa } from '@/lib/constants/fa';
import { readingTime } from '@/lib/reading-time';
import { pageResumeSuffix } from '@/lib/suffix';
import { type Metadata } from 'next';
import Image from 'next/image';
import imgVerbMetricTask from './_img/resume-action-verb-metric-task.jpg';
import imgVerbTaskMetric from './_img/resume-action-verb-task-metric.jpg';
import { ListActionVerbs } from './list/html-section';
import coverImg from './opengraph-image.jpg';

const publishDate = '2024-04-08';
const publishTime = '02:53:24';
const datePublished = `${publishDate}T${publishTime}.000Z`;
const dateModified = '2024-05-12' + 'T' + '19:31:00' + '.000Z';
const articleTitle = 'افعال مناسب برای دستاوردهای شما در رزومه';
const articleDescription = 'هر دستاورد در رزومه باید با یک فعل اکشن شروع شود. لیستی ارزشمند و کاربردی از افعال اکشن مناسب برای استفاده در بخش دستاوردهای رزومه. سعی کنید از هر فعل بیش از ۲ بار استفاده نکنید.';
const pageTitle = 'افعال مناسب برای دستاوردها در رزومه' + pageResumeSuffix;
const pageDesc = 'لیستی ارزشمند و کاربردی از افعال اکشن مناسب برای استفاده در بخش دستاوردها. فعل مناسب برای شروع رزومه نویسی' + ' | ' + 'Resume Action Verb';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc + separator + myNameFa,
  openGraph: {
    type: 'article',
    publishedTime: datePublished,
  },
  twitter: {
    card: 'summary_large_image',
  },
};

function PageContent(): JSX.Element {
  return (
    <section>
      <p>برای نگارش رزومه و نوشتن دستاوردها توصیه میشه که جمله رو با افعال حرکتی یا افعال کنشی یا افعال اکشن Action Verb شروع کنید. لیست زیر مجموعه‌ای از افعال مناسب است که توسط مدیران استخدام شرکت‌های بزرگ تهیه شده و برای استفاده در رزومه قابل استفاده است.</p>

      <h2>چگونه دستاوردهای خود را در رزومه بنویسیم؟</h2>
      <p>ما میتونیم از دو مدل برای نوشتن هر بولت پوینت دستاورد در رزومه استفاده کنیم.</p>
      <Msg severity='success'>هر دو روش به یک اندازه موثر هستند.</Msg>

      <p>توجه کنید که چطور باید با یک action verb شروع کنید. در ادامه وظیفه یا پروژه را مختصر شرح دهید و جمله را با اثری که شما داشته‌اید به اتمام برسانید.</p>

      <figure>
        <Image src={imgVerbTaskMetric} alt="resume-action-verb-task-metric"/>
        <figcaption dir="ltr">1. Metric at the end. Action Verb + Task or Project + Metric or Result</figcaption>
      </figure>

      <p>اینجا مدل دوم است که باز هم با action verb شروع میکنید، سپس تاثیر خودتون رو ذکر میکنید و در انتها وظیفه یا پروژه یا روش انجام رو مختصر توضیح میدید. در این مثال، کاهش تماس‌های پشتیبانی نتیجه بوده است.</p>
      <figure>
        <Image src={imgVerbMetricTask} alt="resume-action-verb-metric-task"/>
        <figcaption dir="ltr">2. Metric in the middle. Action Verb + Metric or Result + Task or Project</figcaption>
      </figure>

      <p>در ادامه لیست کاملی از فعل‌های اکشن مناسب برای قرار دادن در رزومه رو میتونید ببینید.</p>
      <Msg severity='error'>از هر فعل بیش از ۲ بار استفاده نکنید.</Msg>

      <ListActionVerbs />

      <Msg severity='info'>توصیه میکنم این صفحه رو جایی ذخیره کنید چون برای هر دستاورد در رزومه خودتون نیاز به فعل متفاوتی دارید.</Msg>
      <Msg severity='error'>میدونم سخته ولی از هر فعل بیشتر از دوبار در کل رزومه استفاده نکنید!</Msg>

    </section>
  );
}

export default function Page() {

  const articleReadingTime = readingTime(<PageContent />);

  return (
    <ArticleLayout
      title={articleTitle}
      intro={articleDescription}
      coverImage={coverImg}
      datePublished={datePublished}
      dateModified={dateModified}
      readTimeMinutes={articleReadingTime}
    >
      <PageContent />
    </ArticleLayout>
  );
}
