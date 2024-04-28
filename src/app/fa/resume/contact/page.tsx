/* eslint-disable react/no-unescaped-entities */

import { ArticleLayout } from '@/components/article/layout';
import { Msg } from '@/components/msg/msg';
import { separator } from '@/lib/constants/en';
import { myNameFa } from '@/lib/constants/fa';
import { readingTime } from '@/lib/reading-time';
import { pageResumeSuffix } from '@/lib/suffix';
import { type Metadata } from 'next';
import Image from 'next/image';
import imgResumeContactCover from './_img/resume-contact-cover.jpg';
import imgResumeContactExample1 from './_img/resume-contact-example-1.png';
import imgResumeContactExample2 from './_img/resume-contact-example-2.png';
import imgResumeContactExample3 from './_img/resume-contact-example-3.png';
import imgResumeContactExample4 from './_img/resume-contact-example-4.png';
import imgResumeContactExample5 from './_img/resume-contact-example-5.png';
import coverImg from './opengraph-image.png';

const publishDate = '2024-04-20';
const publicTime = '22:04:24';
const publishTime = `${publishDate}T${publicTime}.000Z`;
const articleTitle = 'اطلاعات تماس در رزومه';
const articleDescription = 'اطلاعات تماس یک بخش حیاتی تو رزومه شماست. به‌نظر ساده‌ترین بخش رزومه است، اما یک اشتباه کوچک ممکنه ضرر بزرگی بزنه. پس این صفحه رو بخون تا مطمئن بشی همه چی درسته.';
const pageTitle = articleTitle + pageResumeSuffix;
const pageDesc = 'اطلاعات تماس یک بخش حیاتی تو رزومه شماست. چطور اطلاعات تماس خودت رو در رزومه بنویسی؟';

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
      <p>فرض کنید شما یک رزومه فوق‌العاده دارید که دل هر کسی که اون رو خونده، آب کرده. اگه استخدام‌کننده نتونه اطلاعات تماس مناسبی از شما پیدا کنه، این همه زحمتی که کشیدین چه فایده‌ای داره؟ اطلاعات تماس یک بخش حیاتی تو رزومه شماست.</p>

      <h2>اطلاعات اولیه در بخش تماس روزمه</h2>
      <figure>
        <Image
          src={imgResumeContactCover}
          alt="بخش تماس رزومه"
        />
        <figcaption>خلاصه‌ای از اطلاعات مربوط به تماس در رزومه</figcaption>
      </figure>

      <h3>نام و نام خانوادگی</h3>
      <p>به‌نظر ساده میاد!</p>
      <Msg severity='warning'> محض اطلاع وقتی دکتر هستید نباید قبلش Dr بزارید!</Msg>

      <h3>عنوان شغلی</h3>
      <p>عنوان حرفه‌ای شما می‌تونه موقعیت فعلی یا شغل موردنظر شما باشه. مثلا Full Stack Developer یا Android Developer. یه نکته مهم اینجا مطرح میشه که از عناوین عجیب و غریب مثل نینجا و سامورائی و … استفاده نکنید. سعی کنید بیشتر از ۴ کلمه نشه.</p>
      <Msg severity='success'>بهترین حالت اینه که عنوان شغلی شما با عنوان آگهی شغلی برابر باشه.</Msg>

      <h3>آدرس ایمیل</h3>
      <p>خیلی مهمه. تقریبا همه کارتون با این ایمیل انجام میشه.</p>

      <h3>شماره موبایل</h3>
      <p>در موارد نادری ممکنه مستقیم به شما زنگ بزنن!</p>

      <h3>موقعیت</h3>
      <p>منظور شهر و کشور فعلی هست برای اینکه شرکت بفهمه آیا شما نیاز به ریلوکیشن دارید؟</p>
      <Msg severity="error">به‌هیچ عنوان نیازی به ذکر جزئیات آدرس مثل آدرس کوچه و پلاک خونه‌تون نیست!</Msg>

      <h2>اطلاعات اختیاری در بخش تماس رزومه</h2>
      <p>با اضافه کردن بخش‌های اختیاری مطمئن بشید که ارزشی به رزومه خودتون اضافه می‌کنید.</p>

      <h3>آدرس پروفایل لینکدین</h3>
      <p>اگر یک پروفایل آپدیت دارید که میتونه ارزش رزومه شما رو بالا ببره، ایده خوبیه که اون رو اضافه کنید.</p>

      <h3>شبکه‌های اجتماعی</h3>
      <p>یا نمونه کارهای خودتون رو آنلاین منتشر کردید؟ مثلا برای برنامه‌نویسان این می‌تونه آدرس گیت‌هاب یا برای دیزاینرها میتونه دریبل یا برای نویسنده‌ها مدیوم باشه.</p>
      <Msg severity='warning'>توجه کنید که وقتی مرتبط نیست و کمکی نمی‌کنه نیازی هم نیست که بزاریدش.</Msg>
      <p>مثلا لینک استک‌اورفلو برای برنامه‌نویسی که فعالیت جدی داره میتونه مثبت باشه ولی وقتی فعال نیست به چه دردی میخوره؟ لینک اینستاگرام و توییتر وقتی شخصی و مثلا به‌زبان فارسی هستند بدرد چی میخوره؟</p>

      <h3>وب‌سایت شخصی</h3>
      <p>اگه وب‌سایت شخصی دارید یا وبلاگی که توش درباره تخصص خودتون نوشتید، خوبه که اون رو به رزومه اضافه کنید. یا مثلا اگه کار گرافیکی میکنید و پورتفولیو دارید، خوبه که لینکش رو بزارید.</p>

      <h2>نبایدها در بخش تماس رزومه</h2>
      <p>لطفا مطمئن بشید که این موراد رو تو رزومه خودتون قرار ندادید!</p>

      <h3>تاریخ تولد</h3>
      <p>استخدام‌کننده یا منابع انسانی نیازی نداره که بدونه شما چند سالتونه! سن برای تصمیم‌گیری مهم نیست. بدتر از اون ممکنه منجر به تبعیض بر اساس سن بشه. اگه واقعا شرکتی نیاز داشته باشه توی فرم به‌صورت مجزا میگیره پس اصراری به قرار دادنش توی رزومه نداشته باشید.</p>

      <h3>آدرس ایمیل غیرحرفه‌ای</h3>
      <p>یک ایمیل ساده با اسم و فامیلی خودتون روی یک سرویس دهنده عمومی مثل جیمیل داشته باشید تا از دریافت ایمیل‌ها خاطرجمع باشید مثلا <code>name.family@gmail.com</code> و لطفا از ایمیل‌های عجیب و غریب مثل <code>pirate169@mysite.com</code> استفاده نکنید.</p>
      <Msg severity='error'>به‌هیچ عنوان از ایمیل کاری قبلی استفاده نکنید، به‌شدت غیرحرفه‌ای است.</Msg>

      <h3>تصویر</h3>
      <p>استخدام‌کننده برای ارزیابی رزومه شما نیازی نداره که بدونه شما چه شکلی هستید. پس عکس خودتون رو قرار ندید. منجر به قضاوت اولیه میشه. تو مصاحبه یا عکس پروفایل لینکدین میتونن بالاخره شما رو میبینن.</p>
      <Msg severity='warning'>به‌طور خاص توی آمریکا و انگلیس بخاطر قوانین ضد تبعیض نباید عکس‌تون رو تو رزومه بزارید.</Msg>
      <p>این جزو حریم خصوصی شماست. البته که اگه مایل باشید عکس بزارید، کسی نمی‌تونه جلوی شما رو بگیره ولی توجه کنید شاید باعث بشه که ATS خودکار شما رو ریجکت کنه.</p>

      <h3>آدرس خونه‌تون!</h3>
      <p>خیلی عجیبه که آدرس دقیق خونه رو تو بعضی از رزومه‌ها میبینم. کسی قرار نیست برای شما نامه پست کنه که نیازی بهش داشته باشه</p>

      <h3>سایر اطلاعات غیرحرفه‌ای</h3>
      <p>لطفا اگه موارد زیر رو توی رزومه ذکر کردید، حذف شون کنید.</p>
      <ul>
        <li>جنسیت</li>
        <li>وضعیت سربازی</li>
        <li>وضعیت تاهل</li>
        <li>تعداد فرزندان</li>
        <li>وضعیت سلامت جسمانی</li>
      </ul>

      <p>خب به نظر شفاف بود. یک‌بار برای خودتون اطلاعات این بخش رو بلند بلند بخونید و مطمئن بشید اشتباهی رخ نداده باشه.</p>

      <h2>نمونه‌هایی از بخش تماس</h2>
      <p>یک نمونه موفق از بخش اطلاعات تماس، فارغ از دیزاین، میتونه شبیه به تصاویر زیر باشه.</p>

      <figure>
        <Image
          src={imgResumeContactExample1}
          alt="بخش تماس رزومه - نمونه ۱"
        />
        <figcaption>نمونه ۱</figcaption>
      </figure>

      <figure>
        <Image
          src={imgResumeContactExample2}
          alt="بخش تماس رزومه - نمونه ۲"
        />
        <figcaption>نمونه ۲</figcaption>
      </figure>

      <figure>
        <Image
          src={imgResumeContactExample3}
          alt="بخش تماس رزومه - نمونه ۳"
        />
        <figcaption>نمونه ۳</figcaption>
      </figure>

      <figure>
        <Image
          src={imgResumeContactExample4}
          alt="بخش تماس رزومه - نمونه ۴"
        />
        <figcaption>نمونه ۴</figcaption>
      </figure>

      <figure>
        <Image
          src={imgResumeContactExample5}
          alt="بخش تماس رزومه - نمونه ۵"
        />
        <figcaption>نمونه ۵</figcaption>
      </figure>

      <p>دوبار، سه‌بار، حتی شده ده‌بار چک کنید که همه موارد رو درست ذکر کردید و مهم‌تر از اون اینکه این اطلاعات رو به‌روز نگه دارید.</p>

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
