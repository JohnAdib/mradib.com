/* eslint-disable react/no-unescaped-entities */

import { ArticleLayout } from '@/components/article/layout';
import { Pre } from '@/components/syntax-highlighter/pre';
import { separator } from '@/lib/constants/en';
import { myNameFa } from '@/lib/constants/fa';
import { readingTime } from '@/lib/reading-time';
import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import coverImg from './opengraph-image.jpg';
import phpmyadminPrivilegesImg from './phpmyadmin-privileges.png';

const publishDate = '2021-03-25';
const publishTime = '00:20:24';
const datePublished = `${publishDate}T${publishTime}.000Z`;
const dateModified = '2024-05-12' + 'T' + '19:04:00' + '.000Z';
const articleTitle = 'آموزش صفر تا صد بکاپ خودکار از دیتابیس در سرور لینوکس';
const articleDescription = 'هرچیزی که برای بکاپ گرفتن از دیتابیس یک سرور لینوکس لازمه رو توضیح میدم تا بتونید سریع و بدون دردسر از سرورتون بکاپ بگیرید';
const pageTitle = 'بکاپ خودکار از دیتابیس سرور';
const pageDesc = 'آموزش صفر تا صد بکاپ خودکار از دیتابیس در سرور لینوکس تا بتونید سریع و بدون دردسر از سرورتون بکاپ بگیرید';
const pagePath = '/fa/mysql-auto-backup';
const keywords = ['بکاپ', 'دیتابیس', 'لینوکس', 'سرور', 'بکاپ خودکار', 'mysql', 'rsync', 'cronjob', 'کرون‌جاب', 'mysql-auto-backup'];

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
      <p>سلام. این اولین نوشته من در وب‌سایت مسترادیب به نشانی <Link target="_blank" href="https://MrAdib.com/">MrAdib.com</Link> هست. طی روزهای اخیر که مصادف با عید ۱۴۰۰ بود، مشکلاتی برای زیرساخت ابرآروان پیش اومد و حمله هکرها منجر به صدمه دیدن سرورهای رایانش_ابری آروان شد و حواشی بسیاری رو در پی داشت.</p>
      <p>اما در این میان مهم‌ترین مساله‌ای که نظرم رو جلب کرد اینکه تعداد زیادی از کسب و کارها از سرورها و دیتابیس‌های خودشون هیچ نسخه پشتیبانی نداشتند و از دسترس خارج شدن سرورهاشون منجر به قطع سرویس اون‌ها شد. سرویس‌هایی که بعضی از اون‌ها مشتریان قابل توجهی داشتند و این موضوع رو عجیب‌تر می‌کرد. الان حدود یک هفته از این اتفاق می‌گذره و هنوز برخی نتونستن حتی سایت خودشون رو مجدد راه‌اندازی کنند و معلوم نیست این ماجرا تا کی ادامه خواهد داشت!</p>
      <p>هم‌چنین لازمه بدونید ما برای دیتابیس می‌تونیم دونوع بکاپ داشته باشید. ما درباره بکاپ در بازه زمانی مثلا ساعتی، روزانه و ماهیانه داریم صحبت می‌کنیم که ساده‌تر قابل پیاده‌سازی هست و وجودش برای هر سروری الزامی است. بکاپ زنده از دیتابیس یا ریپلیکیش در دیتابیس نیاز خاص‌تری بوده و شاید در آینده در مقاله‌ای مجزا در این‌باره توضیح بدم!</p>

      <h2 id="mysql-auto-backup">بکاپ خودکار از مای‌اس‌کیوال MySQL</h2>
      <p>با طی کردن مراحل زیر می‌تونید یاد بگیرید که چطور از دیتابیس مای‌اس‌کیوال MySQL خودتون بکاپ بگیرید و اون رو به یک مکان امن خارج از سرور فعلی منتقل کنید. توصیه میشه نسخه بکاپ برای شرایط بحران حداقل ۲۰۰ کیلومتر از نسخه اصلی فاصله داشته باشه. پس بهتره اون رو در یک دیتاسنتر دیگه ترجیحا در یک شهر دیگه نگهدارید.</p>

      <h3 id="create-db-user">ساخت یوزر دیتابیس با دسترسی فقط خواندن برای بکاپ‌گیری</h3>
      <p>وارد سرور خودتون بشید و با یوزری که دارید وارد مای‌اس‌کیو ال بشید. ما فرض میگیریم که یوزر دیتابیس شما روت هست. مراحل زیر رو به ترتیب انجام بدید.</p>

      <h4>از طریق محیط دستوری MySQL و کامندلاین</h4>
      <ol>
        <li>
          <p>دستور زیر رو بزنید تا یوزر روت وارد بشید. اگه یوزر دیگه‌ای دارید اون رو وارد کنید.</p>
          <Pre language="bash">sudo mysql -u root -p</Pre>
        </li>
        <li>
          <p>دستور زیر یه یوزر به نام <mark>dumper</mark> با پسورد <mark>PUT_YOUR_PASSWORD_HERE</mark> میسازه. یوزر و پسورد رو به دلخواه خودتون تغییر بدید.</p>
          <Pre language="sql">CREATE USER 'dumper'@'localhost' IDENTIFIED WITH mysql_native_password BY 'PUT_YOUR_PASSWORD_HERE';</Pre>
        </li>
        <li>
          <p>دسترسی خواندن، پروسس و قفل کردن جداول رو به این یوزر بدید. توجه کنید اگه اسم یوزر رو توی دستور بالا تغییر دادید توی پایینی هم تغییر رو اعمال کنید.</p>
          <Pre language="sql">GRANT SELECT, PROCESS, LOCK TABLES ON *.* TO 'dumper'@'localhost';</Pre>
        </li>
        <li>
          <p>کد زیر رو بزنید تا سطوح دسترسی تنظیم شده اعمال بشه.</p>
          <Pre language="sql">flush privileges;</Pre>
        </li>
        <li>
          <p>از محیط اس‌کیو‌ال خارج بشید.</p>
          <Pre language="sql">exit;</Pre>
        </li>
      </ol>

      <h4>از طریق phpmyadmin</h4>
      <figure>
        <Image src={phpmyadminPrivilegesImg} alt="phpmyadminPrivileges" />
        <figcaption>اگر از رابط کاربری پی‌اچ‌پی مای‌ادمین استفاده می‌کنید، در هنگام ساخت کاربر جدید از طریق phpmyadmin تیک‌های مشخص شده در عکس بالا را بزنید تا کاربر فقط توانایی خواندن داشته باشد</figcaption>
      </figure>

      <h3 id="save-password">ذخیره‌کردن اطلاعات یوزر و پسورد برای بکاپ‌گیری خودکار</h3>
      <p>حالا که یوزر جدید ساختین بهتره که اطلاعات اون رو ذخیره کنید تا نیازی نباشه که یوزر و پسورد رو توی کامند هربار پاس بدیم. دستور زیر رو بزنید تا فایل تنظیمات عمومی مای‌اس‌کیوال باز بشه</p>
      <Pre language="bash">sudo nano ~/.my.cnf</Pre>
      <p>حالا کافیه سه خط زیر رو توش کپی کنید. طبیعیه که یوزر و پسورد رو اگه (لطفا تغییرش بدید!) تغییر دادید اینجا هم باید مقدار جایگزین شده رو بزارید</p>
      <Pre language='ini'>{`
[mysqldump]
user=dumper
password=PUT_YOUR_PASSWORD_HERE`}
      </Pre>
      <p>برای ذخیره کردن و خروج از این فایل کافیه <kbd>ctrl</kbd>+<kbd>x</kbd> رو بزنید و در پاسخ به سوال آیا ذخیره کنم دکمه <kbd>y</kbd> رو فشار بدید.</p><h3>بکاپ گرفتن از دیتابیس</h3>

      <p>حالا که یوزر مورد نظرمون رو ساختیم، با یه دستور یک خطی میتونیم از همه دیتابیس‌هایی که روی این سرور داریم بکاپ بگیریم. از اونجایی که رمز رو هم ذخیره کردیم هیچی نمی‌پرسه و توی آدرسی که بهش دادیم ساخت بکاپ رو شروع میکنه که بسته به حجم دیتابیس کمی طول میکشه</p>

      <h4>بکاپ از یک دیتابیس خاص</h4>
      <Pre language='bash'>mysqldump -v --column-statistics=0 --quick --single-transaction YOUR_DATABASE_NAME &gt; /home/backup-$(date +%Y%m%d-%H%M%S).sql</Pre>

      <h4>بکاپ از همه دیتابیس‌ها</h4>
      <Pre language='bash'>mysqldump -v --column-statistics=0 --quick --single-transaction --all-databases &gt; backup-$(date +%Y%m%d-%H%M%S).sql</Pre>

      <h4>بکاپ از همه دیتابیس‌ها و فشرده‌سازی</h4>
      <p>برای دیتابیس نمونه‌ای که روی این سیستم دارم بکاپ عادی از دیتابیس‌ها ۱.۷ گیگابایت فضا اشغال کرد. در حالی که فشرده‌سازی حجم اون رو ۷۰ مگابایت کاهش داد. برای بکاپ به‌دلیل جلوگیری از هدر رفتن بی‌دلیل فضا توصیه میشه که از مدل فشرده‌شده استفاده کنید.</p>
      <Pre language='bash'>mysqldump -v --column-statistics=0 --quick --single-transaction --all-databases | gzip &gt; backup-$(date +%Y%m%d-%H%M%S).sql.gz</Pre>

      <h2 id="send-backup-to-new-server">ارسال فایل‌های بکاپ به یک سرور جدید</h2>
      <p>بکاپ گرفته شده در این سرور امن نیست. چون با از دسترس خارج شدن این سرور ما بکاپ خودمون رو از دست خواهیم داد. پس بهتره اون رو به یک سرور دیگه یا محلی مناسب انتقال بدیم. برای این کار در لینوکس می‌تونید از دستور rsync‌ استفاده کنیم. اگه از اوبونتو استفاده می‌کنید که به‌صورت پیش‌فرض نصب هست ولی در برخی از توزیع‌های لینوکس لازمه که نصبش کنید که از طریق دستور زیر می‌تونید اون رو نصب کنید</p>
      <Pre language='bash'>apt-get install rsync</Pre>

      <p>چون می‌خوایم تنظیم رو به‌گونه‌ای انجام بدیم که خودکار بکاپ ارسال بشه لازمه که اطلاعات دسترسی به سرور بکاپ(سرور مقصد یا B) رو توی سرور اصلی (سرور دیتابیس یا A) ذخیره کنیم. از اونجایی که استفاده از رمز ایمن نیست، پس یه کلید SSH میخوایم بسازیم. پس توی سرور اصلی دستور زیر رو بزنید. دو سه تا سوال می‌پرسه که میتونید با فشردن اینتر از اون‌ها بگذرید.</p>
      <Pre language='bash'>ssh-keygen</Pre>

      <p>حالا وقتشه که یکبار رمز رو وارد کنیم تا ذخیره بشه. پس دستور زیر رو بزنید تا به سرور A اجازه بدیم به سرور B دسترسی داشته باشه. لازم به ذکر هست که خوبه یه یوزر ساده و بدون دسترسی خاص توی سرور B بسازید و از اون استفاده کنید. ما اینجا برای ساده‌تر شدن آموزش از یوزر روت استفاده کردیم. هم‌چنین آی‌پی <mark>1.2.3.4</mark> رو با آی‌پی سرور خودتون جایگزین کنید.</p>
      <Pre language='bash'>ssh-copy-id root@1.2.3.4</Pre>

      <p>بعد از وارد کردن دستور بالا، اگه اولین باره باید yes رو بزنید و بعدش ازتون رمز این یوزر توی سرور B رو میخواد که وارد کنید. حالا سرور A بدون رمز میتونه به سرور B وصل بشه.</p>

      <h3 id="rsync-example">نمونه استفاده از دستور rsync</h3>
      <p>دستور زیر از پورت <mark>ssh 22</mark> برای انتقال آدرس اول یا مبدا به آدرس دوم یا مقصد استفاده میکنه. فلگ‌های استفاده شده که بعد از دستور لیست شدن به‌ترتیب</p>

      <ul>
        <li>
          <mark>a</mark> مربوط به حالت آرشیو
        </li>
        <li>
          <mark>v</mark> مربوط به نمایش جزئیات روند انتقال
        </li>
        <li>
          <mark>r</mark> مربوط به انتقال زیرپوشه‌ها
        </li>
        <li>
          <mark>t</mark> مربوط به حفظ کردن تاریخ ویرایش فایل‌هاست
        </li>
      </ul>
      <Pre language='bash'>rsync -avrt --delete --rsh='ssh -p 22' /home/backup-file.sql /target_server/path/</Pre>

      <p>طبق پیشنهاد آقای <Link target="_blank" rel="noopener noreferrer" href="https://twitter.com/rafiee1001">احمد رفیعی</Link>، بهتره که دستور rsync رو توی<strong> سرور مقصد</strong> اجرا کنید که بسته به مدل پیاده‌سازی شما و اگه سرور اصلی دسترسی مستقیم به اینترنت رو داره میشه از این مدل استفاده کرد. البته توجه داشته باشید که اگر نفوذ به سرور شما رخ بده و هکر دسترسی پیدا کنه، در هر دو صورت امکان خرابکاری در بکاپ وجود داره و این روش برای چنین حالتی بهینه نشده است. در این حالت باید جای آدرس‌ها رو باهم تغییر بدید شبیه به نمونه کد زیر خواهید داشت. هم‌چنین لازمه این دستور rsync رو در سرور بکاپ در یک کرون‌جاب قرار بدید تا به‌صورت منظم نسبت به تهیه بکاپ اقدام کنه</p>
      <Pre language='bash'>rsync -avrt --delete /primary_server/home/backup-file.sql /home/backup/</Pre>

      <h2 id="create-backup-script">ایجاد یک فایل برای انجام بکاپ و انتقال با هم</h2>

      <p>برای اینکه روند بکاپ گرفتن خودکار بشه لازمه که فایلی برای انجام این دستوران با هم بسازیم پس دستور زیر رو وارد می‌کنیم تا  ادیتور باز بشه</p>
      <Pre language='bash'>sudo nano /home/mysql-auto-backup/backup.sh</Pre>

      <p>حالا هر خط از کدهای زیر رو کپی کرده و توی این فایل قرار میدیم. خطا اول اسم فایل رو تنظیم میکنه که برای اینکه فایل‌ها تکراری نباشه تاریخ و ساعت رو به اسم فایل اضافه کردم</p>
      <Pre language='bash'>FILENAME=backup-$(date +%Y%m%d-%H%M%S).sql.gz</Pre>

      <p>خط زیر از همه دیتابیس‌ها بکاپ میگیره و اون رو فشرده کرده و توی فایلی که بالا اسمش رو ساختیم قرار میده</p>
      <Pre language='bash'>mysqldump --column-statistics=0 --quick --single-transaction --all-databases | gzip &gt; /home/mysql-auto-backup/$FILENAME</Pre>

      <p>خط زیر هم فایل ساخته شده رو به آدرس سرور مدنظرمون منتقل می‌کنه</p>
      <Pre language='bash'>rsync -avrt --delete /home/mysql-auto-backup/$FILENAME root@1.2.3.4:/home/mysql-auto-backup/</Pre>

      <p>برای ذخیره کردن و خروج از این فایل کافیه <kbd>ctrl</kbd>+<kbd>x</kbd> رو بزنید و در پاسخ به سوال آیا ذخیره کنم دکمه <kbd>y</kbd> رو فشار بدید. الان با هر بار فراخوانی این فایل تمام چیزهایی که برای بکاپ از دیتابیس لازم داریم با هم اجرا میشن</p>

      <h2 id="cronjob">تنظیم کرون‌جاب برای اجرای بکاپ در بازه زمانی</h2>
      <p>به مرحله آخر رسیدیم. فایل ما آماده شده و تنها کافیه که اون رو به کرون‌جاب معرفی کنیم تا در بازه زمانی‌ای که خودمون تنظیم کردیم اجرا بشه. دستور زیر رو بزنید تا فایل کرون‌جاب باز بشه</p>
      <Pre language='bash'>nano /etc/crontab</Pre>

      <p>حالا کافیه خط زیر رو کپی کرده و توی این فایل قرار بدید. این خط به‌معنی اجرای اسکریپت ما در هر یک ساعت هست. اگر بازه زمانی دیگری مدنظر شماست می‌تونید با مراجعه <Link target="_blank" rel="noopener noreferrer" href="https://crontab.guru/">به این سایت</Link> اون رو بسازید و جایگزین کنید</p>
      <Pre language='bash'>0 * * * * root sh /home/mysql-auto-backup/backup.sh &gt;/dev/null 2&gt;&1</Pre>

      <p>برای ذخیره کردن و خروج از این فایل کافیه <kbd>ctrl</kbd>+<kbd>x</kbd> رو بزنید و در پاسخ به سوال آیا ذخیره کنم دکمه <kbd>y</kbd> رو فشار بدید.</p>
      <p>تلاش کردم که آموزش بالا ساده باشه تا کمک کوچکی به شما برای بکاپ‌گیری خودکار و جلوگیری از صدمه دیدن کسب و کارتون کرده باشم. ولی از اونجایی که احساس کردم همین هم شاید سخت باشه این رو ارتقا دادم و یه <Link target='_blank' rel="noopener noreferrer" href="https://github.com/JohnAdib/MySQL-auto-backup">اسکریپت آماده بکاپ خودکار از سرور لینوکس</Link> ساختم تا بتونید راحت‌تر از این‌ها بکاپ بگیرید.</p>

    </section>
  );
}

export default function Page() {

  const articleReadingTime = readingTime(<PageContent />);

  return (
    <ArticleLayout
      title={articleTitle}
      intro={articleDescription}
      urlPath={pagePath}
      keywords={keywords}
      coverImage={coverImg}
      datePublished={datePublished}
      dateModified={dateModified}
      readTimeMinutes={articleReadingTime}
      lang='fa-IR'
    >
      <PageContent />
    </ArticleLayout>
  );
}
