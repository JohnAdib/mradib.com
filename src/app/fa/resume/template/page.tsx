/* eslint-disable react/no-unescaped-entities */

import { ArticleLayout } from '@/components/article/layout';
import { Msg } from '@/components/msg/msg';
import { separator } from '@/lib/constants/en';
import { myNameFa } from '@/lib/constants/fa';
import { readingTime } from '@/lib/reading-time';
import { pageResumeSuffix } from '@/lib/suffix';
import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import imgResumeDesignTraditionalVsCreative from './_img/resume-design-traditional-vs-creative.jpg';
import imgResumeFormatStructureChronological from './_img/resume-format-structure-chronological.jpg';
import imgResumeFormatStructureCombination from './_img/resume-format-structure-combination.jpg';
import imgResumeFormatStructureExample from './_img/resume-format-structure-example.jpg';
import imgResumeFormatStructureFunctional from './_img/resume-format-structure-functional.jpg';
import imgResumeFormatStructure from './_img/resume-format-structure.png';
import imgResumeFormatingInfographic from './_img/resume-formating-infographic.jpg';
import { breadcrumb } from './breadcrumb';
import { resumeTemplateFaq } from './faq';
import imgCover from './opengraph-image.png';

const publishDate = '2024-04-10';
const publishTime = '00:02:31';
const datePublished = `${publishDate}T${publishTime}.000Z`;
const dateModified = '2024-05-12' + 'T' + '19:04:00' + '.000Z';
const articleTitle = 'قالب رزومه';
const articleDescription = 'واقعا فکر کردین رکروتر رزومه شما رو میخونه؟ چطوری تو ۶ ثانیه نظرشون رو جلب کنیم؟ جواب ساده است، خیلی ساده با یک قالب خوب برای رزومه. این صفحه رو بخون تا بفهمی چه قالب رزومه‌ای لازم داری';
const pageTitle = 'آموزش رایگان انتخاب قالب رزومه کاری' + pageResumeSuffix;
const pageDesc = 'انتخاب بهترین قالب رزومه کار سختیه؟ اگه بدونی چه فرقی دارن، نه! تمپلیت رزومه کاری و دانلود رایگان نمونه رزومه شرکت. ساخت رزومه فارسی رایگان';
const pagePath = '/fa/resume/template';
const keywords = [
  'رزومه کاری نمونه',
  'قالب رزومه',
  'تمپلیت رزومه',
  'دانلود رزومه',
  'نوشتن رزومه',
  'فرم خام رزومه',
  'دانلود رایگان رزومه',
  'ساخت رزومه انگلیسی',
  'نمونه رزومه',
];

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
      <Msg severity='success'>ریکروتر قبل از اینکه محتوای رزومه شما رو بخونه، اون رو اسکن میکنه </Msg>
      <h2 id="structure">انواع ساختارهای رزومه</h2>
      <p>سه نوع ساختار مختلف برای رزومه داریم که در شکل زیر اون‌ها رو میبینید. تفاوت اون‌ها در تاکید روی بخش خاص و نحوه مرتب‌کردن بخش‌هاست. تفاوت در این ساختارها در چینش بخش‌های مختلف رزومه است. تا اینجا ما اصلا کاری به گرافیک هر بخش نداریم</p>

      <figure>
        <Image
          src={imgResumeFormatStructure}
          alt="انواع ساختارهای رزومه"
        />
        <figcaption>از سمت چپ به راست، فرمت رزومه معکوس زمانی، رزومه کاربردی، رزومه ترکیبی</figcaption>
      </figure>
      <Msg severity='info'>هر ۳ ساختار، دارای ۵ بخش اصلی رزومه هستند</Msg>

      <p>هر بخش رو به‌صورت تفضیلی با هم تکمیل خواهیم کرد. در این صفحه فقط روی انتخاب ساختار رزومه خودتون تمرکز کنید.</p>

      <h3 id="structure-chronological"><abbr title="Chronological Resume Format">فرمت رزومه زمانی</abbr></h3>
      <p>محبوب‌ترین فرمت رزومه کاری است و ایده‌آل برای کسانی است که تجربه کاری زیادی دارن که به شغل درخواستی مرتبط است. آخرین شغل در ابتدا لیست میشه و به ترتیب زمانی به عقب لیست می‌کنید.</p>
      <figure>
        <Image
          src={imgResumeFormatStructureChronological}
          alt="فرمت رزومه در ساختار معکوس زمانی"
        />
        <figcaption>استخدام‌کنندگان با این فرمت کاملا آشنا هستند و می‌دانند کجا دنبال اطلاعاتی که دنبالش هستند، بگردند.</figcaption>
      </figure>

      <p>اگر سابقه کاری کمی دارید، پر کردن تقریبا نصف صفحه با بخش تجربه کاری سخت خواهد بود و شاید بهتر باشه یکی از دو مدل کاربردی یا ترکیبی رو انتخاب کنید.</p>

      <h3 id="structure-functional"><abbr title="Functional Resume Format">فرمت رزومه کاربردی</abbr></h3>
      <p>اگر دانشجو هستید یا تازه فارغ‌التحصیل شدید و تجربه کاری ندارید یا دنبال تغییر شغل هستید شاید این مدل انتخاب بهتری برای شما باشه. مثلا ممکنه یه فاصله زمانی وقفه طولانی در سابقه کاری داشته باشید یا مثلا بعد از چند سال شغل جدیدی رو میخواید تجربه کنید.</p>
      <figure>
        <Image
          src={imgResumeFormatStructureFunctional}
          alt="فرمت رزومه در ساختار کاربری یا مهارت محور"
        />
        <figcaption>در ساختار رزومه کاربردی، تاکید اصلی روی مهارت‌های شماست و  تجربیات کاری به‌صورت مختصر ذکر می‌شوند</figcaption>
      </figure>

      <h3 id="structure-combination"><abbr title="Combination Resume Format">فرمت رزومه ترکیبی</abbr></h3>
      <p>یک انتخاب خوب برای کسانی که مهارت‌های متنوعی دارن، مدل ترکیبی هست. اگه برای شغلی میخواین درخواست بدین که به تخصص در چند زمینه نیاز داره میتونه براتون مفید باشه.</p>
      <figure>
        <Image
          src={imgResumeFormatStructureCombination}
          alt="فرمت رزومه در ساختار ترکیبی یا رزومه هایبرید"
        />
        <figcaption>ساختار رزومه ترکیبی یا هایبرید روی سابقه کاری و مهارت‌ها به‌صورت همزمان تاکید دارد.</figcaption>
      </figure>

      <h2 id="choose-software">انتخاب نرم‌افزار یا سرویس مناسب برای ساخت رزومه</h2>
      <p>بعد از انتخاب ساختار و قبل از اینکه بخواین شروع به نوشتن رزومه کنید، باید تصمیم بگیرید که با چه ابزاری میخواین رزومه خودتون رو بسازید. روش‌های مختلفی برای ساخت رزومه هست، از مایکروسافت ورد و سایر ادیتورهای متنی گرفته تا سایت‌هایی که برای ساخت رزومه ساخته شدن تا Overleaf و اچ‌تی‌ام‌ال و سی‌اس‌اس.</p>
      <p>تفاوتی نداره که رزومه فارسی یا رزومه انگلیسی میخواین بسازید، در هر صورت نیاز به انتخاب نرم‌افزار مناسب برای ساخت رزومه تحصیلی یا رزومه کاری خودتون دارید. رزومه کاری نمونه زیادی از طریق لینک‌های زیر در دسترس است.</p>
      <Msg severity='info'>ساخت رزومه رایگان است! فایل خام رزومه رو انتخاب و بعد فرم رزومه رو دانلود کنید.</Msg>
      <p>اگر مایلید از مایکروسافت ورد استفاده کنید، میتونید به آدرس زیر سربزنید و از بین قالب‌های رایگان ورد رو دانلود کنید و توی سیستم خودتون به‌صورت آفلاین ویرایش کنید. فایل خام رزومه و نمونه رزومه رو از طریق لینک زیر در فرمت ورد مشاهده و برای دانلود رزومه خام انتخاب کنید.</p>

      <ul dir="ltr">
        <li>
          <Link href="https://templates.office.com/en-us/resume-templates">
            https://templates.office.com/en-us/resume-templates
          </Link>
        </li>
      </ul>

      <p>اگر مایلید از Overleaf استفاده کنید، لینک زیر که یک تمپلیت رزومه استاندارد هست، پیشنهاد میشه.</p>

      <ul dir="ltr">
        <li>
          <Link href="https://www.overleaf.com/latex/templates/tagged/cv">
            https://www.overleaf.com/latex/templates/tagged/cv
          </Link>
        </li>
        <li>
          <Link href="https://www.overleaf.com/latex/templates/data-science-tech-resume-template/zcdmpfxrzjhv">
            https://www.overleaf.com/latex/templates/data-science-tech-resume-template/zcdmpfxrzjhv
          </Link>
        </li>
      </ul>

      <p>استفاده از ادیتورهای متنی ساده خیلی محبوب هست ولی مشکلی که داره اینه که شاید ساعت‌ها وقت شما برای طراحی تلف بشه. یه تغییر کوچک انجام میدی و بوم! کل رزومه به فنا میره و باید کلی وقت بزاری درستش کنی. این تبلیغیه که سایت‌های ساخت رزومه میزارن و ادعا میکنن که سریع می‌تونن رزومه شما رو بسازن. گزینه‌های متنوعی برای ساخت رزومه آنلاین توسط رزومه ساز آنلاین رایگان و حتی فارسی دارید. </p>

      <figure>
        <Image
          src={imgResumeFormatStructureExample}
          alt="مقایسه انواع ساختارهای رزومه"
        />
        <figcaption>نمونه‌ای از انواع ساختارهای رزومه</figcaption>
      </figure>

      <Msg severity='info'>به هر حال تصمیمش با شماست و بستگی به مهارت‌تون داره.</Msg>

      <h2 id="layout">بهترین چیدمان برای رزومه چیست؟</h2>
      <p>اولین موردی که ریکروتر بهش توجه میکنه، چیدمان رزومه است. آیا شلخته و درهم برهم به‌نظر میرسه یا سازماندهی‌شده و تمیزه؟ آیا خیلی کوتاهه یا خیلی بلنده؟</p>

      <Msg severity='warning'>آیا رزومه شما فریاد میزنه من رو بخون؟ یا خودش داره میگه برو بعدی؟</Msg>

      <h3 id="do-not">بایدهای طرح‌بندی و چیدمان رزومه</h3>
      <p>بزارید چند تا از بهترین روش‌ها در مورد چیدمان رزومه رو با هم مرور کنیم</p>

      <h4 id="one-page">رزومه باید چند صفحه باشه؟ یک صفحه</h4>
      <p>اگه واقعا باور داری که ارزش قابل توجهی ممکنه بهش اضافه بشه برو روی دو صفحه. مدیرهای منابع انسانی تو شرکت‌های بزرگ ماهی بیش از هزار تا رزومه میبینن. مطمئن باشید اون‌ها وقت ارزشمند خودشون رو صرف خوندن داستان زندگی شما نخواهند کرد. طبق آمار میگن ۶ ثانیه وقت دارید وگرنه رفته سراغ بعدی.</p>
      <p><Link href="/fa/resume/length">چرا میگی رزومه باید یک صفحه باشه؟</Link></p>

      <h4 id="same-layout">از طرح یکسان استفاده کن</h4>
      <p>یه سایز مشخص برای عناوین تنظیم کنید و اون رو برای همه بخش‌ها یکسان استفاده کنید.</p>

      <h4 id="white-space">فضای سفید کافی</h4>
      <p>به‌خصوص توی حاشیه‌های دور صفحه درنظر بگیرید.</p>

      <h4 id="font-family">فونت خوانا انتخاب کن</h4>
      <p>توصیه میشه که یک فونت رسمی و خوانا مثل Ubuntu, Roboto, Overpass انتخاب کنید و هرگز چیزی مثل Comic Sans رو حتی تست هم نکنید! قطعا یه فونت برای رزومه کافیه، شلوغش نکنید.</p>

      <h4 id="font-size">اندازه فونت مناسب انتخاب کن</h4>
      <p>به‌عنوان یک قانون کلی، سایز ۱۱ تا ۱۲ برای متن‌های عادی و سایز ۱۴ تا ۱۶ برای عناوین.</p>

      <h4 id="pdf">پی‌دی‌اف و دیگر هیچ!</h4>
      <p>شما فقط باید نسخه پی‌دی‌اف رو استفاده کنید. ورد یا سایر فرمت‌ها برای شماست که بتونید ویرایش کنید. بقیه قراره فقط بخونن. پس فقط پی‌دی‌اف.</p>

      <h4 id="file-size">حجم پی‌دی‌اف رو پایین نگه‌دار</h4>
      <p>توصیه میشه به‌هیچ عنوان نذارید حجم فایل خروجی رزومه بیشتر از یک مگابایت بشه. اگه می‌تونید حجم رو زیر نیم مگابایت نگه دارید. اگه می‌تونید زیر ۲۰۰ کیلوبایت. کمتر دیگه سخت میشه. عکس و فونت خاص ممکنه باعث بشه حجم غیرعادی بالا بره. هرچند بعضی جاها تا ۵ مگابایت هم قبول می‌کنن ولی وقتی میتونید سایز رو کم کنید، انجامش بدید.</p>

      <h4 id="file-name">نام‌گذاری فایل رزومه</h4>
      <p>فرض کنید ریکروتر فایل رزومه شما رو دانلود کرده و نوشته myresume.pdf به‌نظرتون بهتر نیست چند ثانیه وقت بزارید و اسم فایل رو اصلاح کنید؟ اسم خودتون، خط تیره، عبارت رزومه و اگه خواستید نسخه فایل که بدونید وقتی تغییر میدید کدوم آخرین نسخه است. مثلا من اینطوری نام‌گذاری کردم.‌ فراموش نکنید رزومه با سی‌وی فرق داره.</p>
      <pre>MrAdib-Resume-v123.pdf</pre>

      <h4 id="consistency">استمرار</h4>
      <p>لطفا با یک فرمون پیش برید. مثلا برای نوشتن تاریخ توی رزومه از یک فرمت ثابت استفاده کنید. نه اینکه یکبار با نقطه اعداد رو جدا کنید یکبار با اسلش.</p>

      <h2 id="traditional-vs-creative">قالب رزومه سنتی یا خلاقانه؟</h2>
      <p>خب حالا که نکات اصلی رو گفتیم یه موردی هست که شاید لازم باشه درباره اون صحبت کنیم و اون اینکه آیا از قالب‌های سنتی استفاده کنیم یا خلاقانه و مدرن. به تصویر زیر دقت کنید.</p>
      <figure>
        <Image
          src={imgResumeDesignTraditionalVsCreative}
          alt="رزومه سنتی یا رزومه خلاقانه؟"
        />
        <figcaption>رزومه سنتی یا رزومه خلاقانه؟</figcaption>
      </figure>
      <p>اگه تو صنعت‌های سنتی‌تر مثل حقوقی، بانکداری، مالی و … دنبال شغل هستی، به‌نظر میرسه مدل سنتی مناسب‌تر باشه</p>
      <p>اگه برای شرکت‌های تکنولوژی میخوای درخواست بدی، جایی که نوآوری ارزشمند هست، شاید دنبال مدل خلاقانه‌تری باشی. یادت باشه، بالا رفتن میزان خلاقیت مساوی است با بالا رفتن ریسک!</p>

      <figure>
        <Image
          src={imgResumeFormatingInfographic}
          alt="اینفوگرافیک درباره قالب رزومه"
        />
        <figcaption>تنها ۷ درصد ریکروترها موافق رزومه خلاقانه هستند</figcaption>
      </figure>
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
        coverImage={imgCover}
        datePublished={datePublished}
        dateModified={dateModified}
        readTimeMinutes={articleReadingTime}
        faq={resumeTemplateFaq}
        breadcrumb={breadcrumb}
      >
        <PageContent />
      </ArticleLayout>
    </>
  );
}
