/* eslint-disable react/no-unescaped-entities */

import { ArticleLayout } from '@/components/article/layout';
import { Pre } from '@/components/syntax-highlighter/pre';
import { separator } from '@/lib/constants/en';
import { myNameFa } from '@/lib/constants/fa';
import { readingTime } from '@/lib/reading-time';
import { pageResumeSuffix } from '@/lib/suffix';
import { type Metadata } from 'next';
import Image from 'next/image';
import coverImg from './opengraph-image.png';
import imgResumeEducationCover from './resume-education-cover.jpg';

const publishDate = '2024-04-21';
const publishTime = '20:14:24';
const datePublished = `${publishDate}T${publishTime}.000Z`;
const dateModified = '2024-05-12' + 'T' + '19:31:00' + '.000Z';
const articleTitle = 'بخش تحصیلات در رزومه';
const articleDescription = 'بخش رزومه که مربوط به تحصیلات شماست. چطور بنویسید؟ چه چیزهایی بنویسید؟';
const pageTitle = articleTitle + pageResumeSuffix;
const pageDesc = articleDescription;
const pagePath = '/fa/resume/education';
const keywords = ['رزومه کاری', 'رزومه', 'رزومه فارسی', 'رزومه انگلیسی'];

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
      <p>احتمالا با یک بخش ساده طرف هستیم ولی بسته به شرایط شما شاید کمی ظرافت نیاز داشته باشه!</p>
      <p>بهتره ابتدا تمام مواردی که ممکنه داشته باشیم رو لیست کنیم بعد بریم سراغ ترفندهایی که کمک میکنه برجسته‌تر بشید.</p>
      <figure>
        <Image
          src={imgResumeEducationCover}
          alt="نمونه نحوه نوشتن تحصیلات در رزومه"
        />
        <figcaption>نمونه نحوه نوشتن تحصیلات در رزومه</figcaption>
      </figure>

      <h2>عنوان مدرک تحصیلی</h2>
      <Pre language="plaintext">B.S. in Computer Software Engineering</Pre>

      <h2>اسم دانشگاه یا موسسه آموزشی</h2>
      <Pre language="plaintext">Azad University</Pre>

      <h2>سال‌های حضور یا سال فارغ‌التحصیلی یا پیش‌بینی اتمام</h2>
      <Pre language="plaintext">2008 - 2012</Pre>
      <p>اگه بازه تحصیلی بیش از حد معمول طول کشیده یا مایل به ارائه جزئیات نیستید می‌تونید فقط سال فارغ‌التحصیلی رو ذکر کنید. مثلا</p>
      <Pre language="plaintext">2014</Pre>
      <p>وقتی هنوز فارغ‌التحصیل نشدی و انتظار داری تا یه زمان خاص دانشگاه تموم بشه. مثلا</p>
      <Pre language="plaintext">Expected in 2025</Pre>

      <h2>اطلاعات اختیاری درباره تحصیلات</h2>
      <p>معمولا زمانی که سابقه کاری چندانی ندارید، برای پرکردن رزومه میتونید از موارد اختیاری استفاده کنید، ولی مثل همیشه مطمئن بشید که این اطلاعات ارزشی به رزومه شما اضافه می‌کنن. مثلا وقتی معدل برتر نبودید، چرا ذکرش می‌کنید!؟</p>
      <h3>معدل</h3>
      <p>فقط درصورتی که خیلی درس خون بودید و نمره معدل شما بیشتر از 3.5 بوده اون رو ذکر کنید.</p>
      <Pre language="plaintext">GPA: 3.9</Pre>
      <h3>محل دانشگاه</h3>
      <Pre language="plaintext">Tehran, Iran</Pre>
      <h3>افتخارات</h3>
      <Pre language="plaintext">One of the top students in the class</Pre>
      <h3>دستاوردهای آکادمیک</h3>
      <Pre language="plaintext">Published a research paper in the university journal</Pre>
      <h3>عناوین درس‌های مرتبط که پاس کردید</h3>
      <p>عناوین دروسی که پاس کردید رو بهتره تو رزومه نذارید مگر اینکه تازه‌کار باشید و هدف‌تون پرکردن رزومه باشه.</p>
      <Pre language="plaintext">Software Engineering, Database Management, Algorithms</Pre>
      <h3>برنامه تبادل برای دکتری</h3>
      <Pre language="plaintext">Exchange Program in Oslo, Norway</Pre>

      <h2>نکاتی در رابطه با بخش تحصیلات</h2>
      <ul>
        <li>همیشه آخرین مدرک تحصیلی رو بالاتر قرار بدید و به‌ترتیب به عقب برگردید.</li>
        <li>اگه مدرک دانشگاهی دارید، به‌هیچ عنوان نیازی نیست به مدرک دیپلم یا پیش‌دانشگاهی اشاره کنید.</li>
        <li>اگه تازه فارغ‌التحصیل شدید و تجربه کاری ندارید، می‌تونیید بخش تحصیلات رو در ابتدای رزومه بزارید.</li>
      </ul>

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
        urlPath={pagePath}
        keywords={keywords}
        coverImage={coverImg}
        datePublished={datePublished}
        dateModified={dateModified}
        readTimeMinutes={articleReadingTime}
      >
        <PageContent />
      </ArticleLayout>
    </>
  );
}
