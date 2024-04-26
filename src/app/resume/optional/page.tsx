/* eslint-disable react/no-unescaped-entities */

import { ArticleLayout } from '@/components/article/layout';
import { readingTime } from '@/lib/reading-time';
import { myNameFa, separator } from '@/lib/root-metadata';
import { pageResumeSuffix } from '@/lib/suffix';
import { type Metadata } from 'next';
import Image from 'next/image';
import imgResumeOptionalHobbies from './_img/resume-optional-hobbies.png';
import coverImg from './opengraph-image.png';

const publishDate = '2024-04-21';
const publicTime = '01:27:24';
const publishTime = `${publishDate}T${publicTime}.000Z`;
const articleTitle = 'بخش‌های اختیاری در رزومه';
const articleDescription = 'اگه توی رزومه‌تون فضای خالی دارید و میخواین با یه اطلاعات بدردبخور پر کنید، میتونید از بخش اختیاری‌ها ایده بگیرید مثل زبان، فعالیت‌های داوطلبانه، مقالات، گواهینامه‌ها و ...';
const pageTitle = articleTitle + pageResumeSuffix;
const pageDesc = articleDescription;

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
      <p>بخش‌هایی که پیش از این مطرح کردیم همگی الزامی بودند. اگه اون‌ها رو درست پیاده کرده باشید، مطمئن باشید برای هر شغلی که درخواست بدید اون رو بدست خواهید آورد. با این حال بخش‌های زیر می‌تونه به شما کمک کنه که رزومه پربارتری داشته باشید.        </p>
      <p>نکته مهم این هست که یادتون باشه شما ۶ ثانیه وقت دارید. پس اگه اون بخش ارزشش رو داره به رزومه اضافه کنید و اگه ارزشش رو نداره ازش رد بشید.</p>

      <h2>زبان</h2>
      <p>آیا دو زبانه هستید؟ یا حتی بهتر! چند زبانه هستید؟ خوبه که بخش زبان رو به رزومه خودتون اضافه کنید.</p>
      <p>هرچند در این مورد خاص ما ایرانی‌ها، زبان فارسی رو که بلدیم و معمولا برای شغل‌های بین‌المللی، زبان انگلیسی رو باید روان صحبت کنیم. پس همه ما، حداقل دو زبان رو میدونیم. اگر شغلی نیاز به زبان خاص، مثلا آلمانی داشته باشه و شما هم بلد باشید، طبیعیه که ذکر کردنش در این بخش الزامی میشه و بحثی توش نیست. اما زمانی که شغل به انگلیسی هست و رزومه هم به انگلیسی، زبان فارسی چه کمکی میتونه بکنه؟ چه ارزشی به رزومه شما اضافه میکنه؟ اگه به‌نظرتون مهم نیست میتونید این بخش رو حذف کنید.</p>
      <p>توجه کنید که مثلا اگر ترکی یا همون زبان آذربایجانی Azerbaijani بلد هستید، پس شما سه‌زبانه‌اید و به‌نظرم حالا شرایط فرق کرده و بهتره این بخش رو بزارید.</p>
      <p>برای بخش زبان کافی است خیلی ساده اسم زبان رو ذکر کنید و سطح خودتون رو درباره اون زبان هم جلوش بنویسید.</p>
      <p>به ترتیب، زبان مادری، روان، مسلط و کافی برای تعامل در محیط کاری، متوسط و ساده</p>
      <ul dir='ltr'>
        <li>Native</li>
        <li>Fluent</li>
        <li>Proficient</li>
        <li>Intermediate</li>
        <li>Basic</li>
      </ul>
      <p>توجه داشته باشید که شما نباید در مورد مهارت زبانی خودتون دروغ بگید. شما هیچ‌وقت نمی‌دونید، شاید مصاحبه‌کننده شما به اون زبان مسلط باشه یا حتی زبان مادری اون شخص باشه!</p>

      <h2>تجربه داوطلبانه</h2>
      <p>اگه از اون دسته از افرادی هستید که تو اوقات فراغت خودتون به بقیه کمک می‌کنید و درقبال اون هیچ انتظاری ندارید، احتمالش وجود داره که شما از اون دسته از کارمندان هستید که بعضی چیزها براتون بیشتر از پول ارزش داره. می‌تونه این تصور رو ایجاد کنه که شما احتمالا کارمند فداکار و وفاداری هستید.</p>
      <p>چندین مطالعه نشون داده که با اضافه کردن بخش تجارت داوطبانه، شانس شما برای استخدام بیشتر میشه. مخصوصا وقتی دانشجویی هستید که هیچ تجربه‌ای ندارید، تجربه داوطلبانه میتونه بهتون کمک ویژه‌ای کنه.</p>

      <h2>سرگرمی و علایق</h2>
      <p>ادویه دوست دارین؟ این بخش با اینکه نمی‌تونه خیلی خاص باشه ولی در عین حال می‌تونه به شما کمک کنه که شخصیت خودتون رو نمایش بدید. شاید استخدام‌کننده یک سرگرمی مشترک با شما داشته باشه و بخاطر همین از شما خوشش بیاد! اگه توی رزومه خودتون هنوز جای خالی دارید، توصیه میشه از این بخش دریغ نکنید.</p>

      <figure>
        <Image
          src={imgResumeOptionalHobbies}
          alt="جای خالی را با سرگرمی‌ها و علایق پر کنید!"
        />
        <figcaption>جای خالی را با سرگرمی‌ها و علایق پر کنید!</figcaption>
      </figure>

      <h2>گواهینامه‌ها و جوایز</h2>
      <p>آیا شما جایزه‌ای دارید که شما رو تو زمینه کاری منحصربه‌فرد می‌کنه؟ یا گواهینامه‌ای دارید که تخصص شما رو نشون میده؟ اگه به موقعیت شغلی که میخواین براش اقدام کنید مرتبط هست، می‌تونید اون رو به رزومه خودتون اضافه کنید.</p>
      <p>مثلا فرض کنیم شما یک متخصص فضای ابری هستید. داشتن گواهی‌نامه‌هایی مثل Azure Solutions Architect Expert می‌تونه مهارت شما رو اثبات کنه.</p>

      <h2>مقالات</h2>
      <p>آیا شما برخی اوقات برای سایت‌ها و مجلات می‌نویسید؟ یا سوابق علمی برجسته یا مثلا مقاله ISI دارید؟</p>
      <p>اگه اثر منتشر شده آنلاین یا مثلا مجله دانشگاهی مرتبط دارید ممکنه بخواین اون رو به رزومه خودتون اضافه کنید. البته یادتون نره که آدرسی برای دسترسی به اون اثر ذکر کنید تا استخدام‌کننده بتونه یه چک حداقلی داشته باشه.</p>

      <h2>پروژه‌ها</h2>
      <p>کار کردن روی پروژه‌های جانبی مرتبط می‌تونه اشتیاق شما رو به کارتون نشون بده. مثلا یک پروژه‌ی کلاس دانشگاهی یا یه تجربه کارآفرینی پاره‌وقت یا کار کردن روی یک مسابقه دانشگاهی یا حتی مثلا ساخت محصولات دست‌ساز و فروش اون‌ها! مدیران منابع انسانی کیف می‌کنند که ببینن کارمندهاشون تو اوقات فراغت کارهای جالبی انجام میدن.</p>

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
