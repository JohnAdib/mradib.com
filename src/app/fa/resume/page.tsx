import { ArticleLayout } from "@/components/article/layout";
import { Msg } from "@/components/msg/msg";
import StepsCircle from "@/components/steps/steps-circle";
import { Todo } from "@/components/todo";
import { separator } from "@/lib/constants/en";
import { myNameFa } from "@/lib/constants/fa";
import { readingTime } from "@/lib/reading-time";
import { pageResumeSuffix } from "@/lib/suffix";
import { type Metadata } from "next";
import Image from "next/image";
import imgResumeChecklist from "./_img/resume-checklist.png";
import { breadcrumb } from "./breadcrumb";
import coverImg from "./opengraph-image.jpg";
import { ResumeReferences } from "./resume-references";
import { resumeSteps } from "./resume-steps";
import { resumeTodoList } from "./resume-todo-list";

const publishDate = "2024-04-08";
const publishTime = "02:53:24";
const datePublished = `${publishDate}T${publishTime}.000Z`;
const dateModified = "2024-05-12" + "T" + "19:04:00" + ".000Z";
const articleTitle = "بهترین آموزش ساخت رزومه";
const articleDescription =
  "قصد دارید رزومه بسازید و برای شغلی اپلای کنید؟ صفر تا صد ساخت رزومه رو اینجا بخونید تا یک رزومه حرفه‌ای بسازید. این بهترین و کامل‌ترین و جامع‌ترین آموزش ساخت رزومه در کهکشان است!";
const pageTitle = "آموزش ساخت رزومه" + pageResumeSuffix;
const pageDesc = "وقتشه رزومه خفن خودت رو بسازی. آموزش صفر تا صد ساخت رزومه";
const pagePath = "/fa/resume";
const keywords = ["رزومه کاری", "رزومه", "رزومه فارسی", "رزومه انگلیسی"];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc + separator + myNameFa,
  openGraph: {
    type: "article",
    publishedTime: datePublished,
  },
  twitter: {
    card: "summary_large_image",
  },
};

function PageContent(): JSX.Element {
  return (
    <section>
      <p>
        یک رزومه خوب، راهی برای رسیدین به یک شغل رویایی است. اگر رزومه شما ضعیف
        باشه، ممکنه هفته‌ها یا حتی ماه‌ها منتظر یک دعوت به مصاحبه و پاسخ اولیه
        بمونی. پس وقتی می‌تونی یک رزومه خوب داشته باشی، چرا که نه؟ یکمی وقت بزار
        و رزومه خودت رو حرفه‌ای کن، اونوقت می‌بینی چقدر نرخ دعوت به مصاحبه‌هات
        بالا میره.
      </p>
      <p>
        بنابراین احتمالا از خودت می‌پرسی که چطور می‌تونی یک رزومه خفن بنویسی که
        ریکروتر و منابع انسانی و استخدام‌کننده‌ها رو به‌خودش جذب کنه تا بخوان
        شما رو به مصاحبه دعوت کنن. جای درستی اومدی!
      </p>
      <p>
        توی این راهنما هر نکته‌ای که درباره رزومه ممکنه وجود داشته باشه رو از
        منابع معتبر جمع کردم تا به شما آموزش بدم که چطور اون رزومه خفن خودت رو
        بسازی و یه آفر توپ باهاش بگیری:)
      </p>

      <Msg severity="info">سعی می‌کنم این آموزش رو به روز نگه دارم</Msg>

      <h2 id="step-by-step">آموزش گام به گام ساخت رزومه</h2>
      <p>
        وقتی یه‌کار بزرگ رو به تیکه‌های کوچک تقسیم کنیم میبینیم که چقدر راحت‌تر
        میتونیم انجامش بدیم. پس ببینیم مرحله به مرحله چطور باید پیش بریم.
      </p>
      <p>
        در ادامه به‌ترتیب، بخش‌های مختلف رزومه رو بررسی می‌کنیم. توضیح میدیم که
        چی بنویسید و چطور بنویسید تا برجسته شوید و به‌شغلی که لیاقتش رو دارید
        برسید.
      </p>
      <StepsCircle steps={resumeSteps} />

      <h2 id="checklist">چک لیست رایگان نوشتن رزومه</h2>
      <p>
        خب کارت تموم شد؟ به‌نظرم وقتشه که این لیست پایین رو چک کنی تا مطمئن بشی
        همه نکاتی که گفته شده رو توی رزومه خودت رعایت کردی.
      </p>
      <figure>
        <Image src={imgResumeChecklist} alt="چک لیست نوشتن رزومه رو کامل کن" />
        <figcaption>چک لیست نوشتن رزومه رو کامل کن</figcaption>
      </figure>

      <Todo list={resumeTodoList} />
      <p>
        اگه همه موارد رو ایت کردی واقعا بهت تبریک می‌گم. به‌نظر میرسه به نحوه
        نوشتن رزومه تسلط پیدا کردی و می‌تونی برید سراغ پیدا کردن شغل‌های جذاب.
        اگه موردی بوده که رعایت نکردی هم اشکال نداره، کمی وقت بزار و سعی کن
        اون‌ها رو تا حد امکان برطرف کنی.
      </p>

      <ResumeReferences />

      <h2 id="cover-letter">کاورلتر</h2>
      <p>
        اگه تا اینجا رسیدید، شما قدم اول برای پیدا کردن یک کار رویایی رو با
        موفقیت گذروندید و خوندن این مقاله بود ولی این کافی نیست و باید دست به
        ‌کار بشید و رزومه خودتون رو بنویسید. وقتی نوشتید بعدش می‌تونید برگردید
        به این قسمت و بقیه رو ادامه بدید:)
      </p>
      <p>
        مرحله بعد نوشتن کاورلتر هست. یه نامه که انگیزه شما برای اون شغل رو به
        استخدام‌کننده نشون بده تا با ترکیب رزومه آن‌چنان خواننده رو ذوق‌زده کنه
        که بخواد شما رو به مصاحبه دعوت کنه.
      </p>
      <p>
        امیدوارم بازخورد این آموزش ساخت رزومه مثبت باشه تا انگیزه‌ای باشه برای
        نوشتن بخش‌های بعدی…
      </p>

      <p>
        لازم به ذکر است که جرقه نوشتن این مقاله وقتی رخ داد که تعداد زیادی رزومه
        در گروه تلگرام TechImmigrants ارسال میشد و بخش زیادی از اون‌ها دارای
        اشکالات مشترک بود. پس سعی کردم با نگارش این مقاله یک روش استاندارد برای
        نگارش داشته باشیم.
      </p>
      <p>
        در آینده تلاش میکنم نکات و ترفندهایی رو درباره بهتر رزومه ذکر کنم یا
        همین مقاله رو آپدیت کنم. هم‌چنین فکر میکنم کاورلتر بخش مهمی از فرآیند
        اپلای هست و نباید دست کم گرفته بشه. از همین جهت یک آموزش کامل درباره
        نحوه نوشتن کاورلتر هم در آینده خواهم نوشت.
      </p>
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
        breadcrumb={breadcrumb}
        lang="fa-IR"
      >
        <PageContent />
      </ArticleLayout>
    </>
  );
}
