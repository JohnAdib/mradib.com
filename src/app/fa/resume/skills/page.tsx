import { ArticleLayout } from "@/components/article/layout";
import { Msg } from "@/components/msg/msg";
import { Pre } from "@/components/syntax-highlighter/pre";
import { separator } from "@/lib/constants/en";
import { myNameFa } from "@/lib/constants/fa";
import { readingTime } from "@/lib/reading-time";
import { pageResumeSuffix } from "@/lib/suffix";
import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import imgResumeHardSkills from "./_img/resume-hard-skills.png";
import imgResumeSkillsInfographic from "./_img/resume-skills-infographic.png";
import imgResumeTopSkills from "./_img/resume-top-skills.png";
import coverImg from "./opengraph-image.png";

const publishDate = "2024-04-21";
const publishTime = "01:27:24";
const datePublished = `${publishDate}T${publishTime}.000Z`;
const dateModified = "2024-05-12" + "T" + "19:31:00" + ".000Z";
const articleTitle = "آموزش نوشتن مهارت‌ها در رزومه";
const articleDescription =
  "مهارت‌ها یکی از مهمترین بخش‌های رزومه شما هستند. چطور مهارت‌های خود را بهتر بنویسید؟ هارد اسکیل و سافت اسکیل چی هستند؟";
const pageTitle = articleTitle + pageResumeSuffix;
const pageDesc = articleDescription;
const pagePath = "/fa/resume/skills";
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
        یه بخش الزامی که توی رزومه باید باشه، مهارت‌هاست. شما تو این بخش تمام
        مهارت‌هایی که دارید رو لیست می‌کنید تا نشون بدید چرا برای این شغل گزینه
        مناسبی هستید. به‌طور کلی مهارت‌ها در دو دسته تقسیم‌بندی میشن و یک رزومه
        خوب بهتره هر دو رو پوشش بده.
      </p>
      <Msg severity="info">
        نکته مهم، یادتون باشه مهارت‌های مرتبط با عنوان شغلی رو باید لیست کنید.
      </Msg>

      <h2>هارد اسکیل</h2>
      <p>
        هارد اسکیل قابل اندازه‌گیری است. میتونه هرچیزی باشه از زبان‌برنامه‌نویسی
        مثل PHP تا یک کتابخونه مثل React تا حتی مهارت پخت قرمه‌سبزی!
      </p>
      <p>
        هارد اسکیل اغلب به دانش فنی اشاره داره یا آموزشی که تجربه شده و به‌دست
        اومده. هارد اسکیل برای یک شغل، خاص و ضروری هست تا شما بتونید نیازهای اون
        شغل رو انجام بدید. به‌عنوان نمونه موارد زیر بسته به شغل هارداسکیل هستند.
      </p>
      <figure>
        <Image src={imgResumeHardSkills} alt="هارداسکیل برای رزومه شما" />
        <figcaption>هارداسکیل برای رزومه شما</figcaption>
      </figure>

      <Pre language="plaintext">
        Machinery skills - operating a road roller, operating a PoS,
        pallet-stacker, forklift, etc.
      </Pre>
      <Pre language="plaintext">
        Software skills - Adobe Creative Suite, Ableton Live Suite
      </Pre>
      <Pre language="plaintext">
        Tools - SEM Marketing, Stethoscope, Google Analytics, Google Search
        Console, ERP systems, CRMs
      </Pre>
      <Pre language="plaintext">
        Coding Languages - JavaScript, PHP, Python, C++, C#, Java, Scala, R
      </Pre>
      <Pre language="plaintext">
        Techniques - Frequency analysis, Crystallization
      </Pre>
      <Pre language="plaintext">Mathematics</Pre>
      <Pre language="plaintext">Accounting & bookkeeping</Pre>

      <h2>سافت اسکیل</h2>
      <p>
        مهارت‌های شخصی که میتونه ترکیبی از مهارت‌های اجتماعی، مهارت‌های ارتباطی،
        ویژگی‌ها و صفات شخصی، ویژگی‌های شغلی و غیره باشه. مثلا میتونید
        مهارت‌هایی مثل رهبری، تفکر انتقادی، مدیریت و ارتباطات رو ذکر کنید.
        سافت‌اسکیل‌ها معمولا توی شغل ذکر نمی‌شن ولی به‌طور غیرمستقیم میتونن نشون
        بدن که شما با محیط کار و فرهنگ شرکت سازگار خواهید بود.
      </p>
      <Pre language="plaintext">
        Effective communication, Teamwork, Responsibility, Creativity,
        Problem-solving, Leadership, Extroversion, People skills, Openness,
        Adaptability
      </Pre>

      <h2>مهارت‌ها رو چطور لیست کنیم؟</h2>
      <p>
        اولین اقدام اینه که مهارت‌‌های سخت خودتون رو لیست کنید. مثلا وقتی
        برنامه‌نویس هستید با یک فریم‌ورک کار کردید یا یک زبان بلد هستید.
        به‌عنوان یک قاعده کلی، سطح مهارت شما رو می‌تونیم به سه قسمت تقسیم کنیم.
      </p>
      <ul>
        <li>
          <h3>مبتدی</h3>
          <p>
            شما کمی تجربه اولیه درباره این مهارت دارید که ممکنه از یک تمرین کلاس
            آموزشی یا یک تفریح آخرهفته‌ای باشه. میشه گفت تنها با موضوع آشنا
            هستید.
          </p>
        </li>
        <li>
          <h3>متوسط</h3>
          <p>
            شما از این مهارت در محیط کاری استفاده کردید و سطح درک خوبی ازش
            دارید.
          </p>
        </li>
        <li>
          <h3>پیشرفته</h3>
          <p>
            شما کاملا در این زمینه در سطح بالایی تخصص دارید و حتی می‌تونید به
            سایر همکاران خودتون آموزش بدید.
          </p>
        </li>
      </ul>
      <Msg severity="error">درباره سطح مهارت خودتون هرگز دروغ نگید.</Msg>
      <p>
        فرض کنید که به‌عنوان یک گرافیست استخدام شدید و اولین تسک شما مثلا یک
        کاور زیبا برای یک مقاله با ایلاستراتور هست. اگه در نهایت با نقاشی
        مایکروسافت یه‌چیزی بکشید و تحویل بدید مطمئن باشید قبل از اتمام دوره
        آزمایشی بیکار خواهید شد.
      </p>

      <h2>مهارت‌ها را متناسب با آگهی‌ شغلی مدنظرتون تنظیم کنید</h2>
      <p>
        ممکنه شما مهارت‌هایی عالی و کمیاب داشته باشید ولی این همیشه موثر نیست.
        مثلا فرض کنید شما حسابداری بلد هستید اما میشه بگید یک برنامه‌نویس دقیقا
        چه نیازی به حسابداری داره؟
      </p>
      <p>
        مهم‌ترین نکته اینه که آگهی‌های شغلی موردنظرتون رو دنبال کنید و
        کلیدواژه‌های توی اون‌ها رو پیدا کرده و اگر در اون‌ها مهارت دارید توی
        رزومه خودتون ذکر کنید.
      </p>
      <p>
        توجه داشته باشید که این نکته میتونه موثر باشه که با چک کردن آگهی‌های
        شغلی همیشه میتونید ببینید بازار به کدوم سمت داره میره و نیاز بازار چه
        مهارت‌هایی است و توی رشد شخصی خودتون سعی کنید به اون سمت برید.
      </p>

      <h2>مهارت‌های عمومی رو فراموش نکنید</h2>
      <p>
        بعضی از مهارت‌ها مناسب طیف وسیعی از شغل‌ها هستن. برخی از سافت‌اسکیل‌ها
        مثل کارتیمی، تفکر انتقادی، رهبری و برخی از هارداسکیل‌ها مثل اکسل،
        پاورپوینت، فتوشاپ، نویسندگی و …
      </p>
      <p>
        برای هر شغلی که اپلای می‌کنید، میتونید با خیال راحت این مهارت‌ها رو ذکر
        کنید چون به‌شکلی ممکنه به شما کمک کنند.
      </p>
      <Msg severity="info">
        همیشه تو رزومه‌نویسی، اصل مرتبط بودن رو به‌خاطر داشته باشید.
      </Msg>
      <p>
        مثلا یک استخدام‌کننده که به‌دنبال مهندس نرم‌افزار می‌گرده اهمیتی به
        مهارت شما توی بازاریابی نمیده. در عین حال، سطح مهارت شما در یک
        زبان‌برنامه‌نویسی قطعا براش مهم خواهد بود.
      </p>
      <figure>
        <Image
          src={imgResumeTopSkills}
          alt="بهترین مهارت‌ها برای قراردادن در رزومه شما"
        />
        <figcaption>بهترین مهارت‌ها برای قراردادن در رزومه شما</figcaption>
      </figure>

      <Msg severity="success">
        بخش مهارت‌ها در رزومه میتونه بهتون کمک کنه که از سد ATS رد بشید.
      </Msg>
      <p>
        <Link href="/fa/resume/ats">ATS</Link> بر اساس کلیدواژه است و رزومه شما
        باید از اون کلیدواژه‌ها به میزان کافی داشته باشه. اگه جاهای دیگه فرصتش
        نبود، اینجا میتونید بهش اشاره کنید.
      </p>
      <p>
        مثلا فرض کنید یک آگهی شغلی برای زبان جاوا هست و رزومه شما اصلا کلمه جاوا
        توش ذکر نشده. پس مطمئن باشید که این رزومه توسط ATS رد میشه. در واقع ۷۰
        درصد رزومه‌ها در همین مرحله از رده خارج میشن و به مرحله بعد که چک کردن
        توسط انسان هست، اصلا نمی‌رسن.
      </p>
      <p>
        حتی اگه شرکتی از ATS هم استفاده نکنه و چک کردن توسط منابع انسانی رخ بده،
        باز هم توجه کنید که بهش گفتن دنبال یه سری کلیدواژه باش که تو رزومه باشه
        و اگه داشت بفرست برای مصاحبه. پس چه برای ATS و چه برای مدیر منابع
        انسانی، مهارت‌های مناسب آگهی شغلی رو توی رزومه بنویسید.
      </p>

      <p>
        در بعضی از شغل‌ها، سافت‌اسکیل‌ها بیشتر از هارداسکیل اهمیت دارند. این
        روزها کم نیستند سازمان‌هایی که مایلند شخصیت استخدام کنند تا مهارت.
      </p>

      <figure>
        <Image
          src={imgResumeSkillsInfographic}
          alt="چه مهارت‌هایی را در رزومه قرار دهیم؟"
        />
        <figcaption>چه مهارت‌هایی را در رزومه قرار دهیم؟</figcaption>
      </figure>

      <h3>بیشترین درخواست سافت‌اسکیل برای عموم صنایع</h3>
      <Pre language="plaintext">
        Time management, Effective communication, Emotional intelligence,
        Conflict management, Teamwork skills, Stress management, Productivity &
        organization, Critical thinking, Attention to detail, Adaptability
      </Pre>

      <h3>مهارت‌های بازاریابی</h3>
      <Pre language="plaintext">
        Data analysis, Web analytics, SEO/SEM, HTML & CSS, Wordpress, Email
        marketing, Web scraping, CRO and A/B Testing Data visualization &
        pattern-finding through critical thinking, Search Engine and Keyword
        Optimization, Project/campaign management, Social media and mobile
        marketing,Paid social media advertisements, B2B Marketing, The 4 P-s of
        Marketing, Consumer Behavior Drivers, Brand management, Creativity,
        Copywriting, Storytelling, Sales, CMS Tools
      </Pre>

      <h3>مهارت‌های مدیریتی</h3>
      <Pre language="plaintext">
        Six Sigma techniques, The McKinsey 7s Framework, Porter’s Five Forces,
        PESTEL, Emotional Intelligence,Dealing with work-related stress,
        Motivation, Task delegation, Technological savviness, People management,
        Business Development, Strategic Management, Negotiation, Planning,
        Proposal writing, Problem-solving, Innovation, Charisma
      </Pre>

      <h3>مهارت‌های فروش</h3>
      <Pre language="plaintext">
        Customer Relationship Management (CRM), Cold-calling, Negotiation,
        Public speaking, Closing, Lead generation, Buyer-Responsive selling,
        Buyer engagement, Product knowledge, Persuasion, Effective communication
        and sociability, Empathy, Social media/digital communication, Teamwork,
        Time management
      </Pre>

      <h3>مهارت‌های طراحی</h3>
      <Pre language="plaintext">
        Adobe Creative Suite: Illustrator, InDesign, Photoshop, Dreamweaver,
        Infographics, HTML & CSS, Photo editing, Typography: spacing, line
        height, layout, choosing fonts, Storyboarding, Targeting and marketing
        through visual communications, Logo creation, Digital printing,
        Integration of visual communication in social media platforms,
        Creativity, Attention to detail & aesthetics, Interactive media design,
        Color sense & theory, Ad design, Active listening
      </Pre>

      <h3>مهارت‌های فنی پایه</h3>
      <Pre language="plaintext">
        Microsoft Office Pack: Word, Excel, Access, Publisher, Outlook,
        Powerpoint, Filing and paper management, Data entry, Bookkeeping through
        Excel or TurboTax, Research and data analysis, Basic knowledge of user
        interface communication, Technical writing, Cloud networking and file
        sharing
      </Pre>

      <h3>مهارت‌های حسابداری و مالی</h3>
      <Pre language="plaintext">
        Microsoft Excel (Advanced), Enterprise Resource Planning, Big Data
        Analysis & SQL, Know Your Customers (KYC), Cognos Analytics (IBM),
        Visual Basic, Accounting Software, Revenue recognition, Anti Money
        Laundering, Clear communication, General business knowledge, Numerical
        competence, Accuracy, Attention to detail
      </Pre>

      <h3>مهارت‌های آموزشی</h3>
      <Pre language="plaintext">
        Updated curriculum knowledge, Research & Data analysis, Communication,
        Educational platforms (software like Elearn), Stress management,
        Technological & digital literacy, Patience, Critical thinking,
        Enthusiasm, Motivation
      </Pre>

      <h3>مهارت‌های طراحی وب</h3>
      <Pre language="plaintext">
        HTML/CSS, CSS preprocessors, Javascript, Wordpress, Graphic User
        Interfaces (GUI), Git/Version control (Github, gitlab), Search Engine
        Optimization (SEO), Application Programming Interface (API), Adobe
        Photoshop, InDesign, Content Management Systems (CMS),
        Testing/Debugging, Responsive design principles
      </Pre>

      <h3>مهارت‌های آنالیز بیزینس</h3>
      <Pre language="plaintext">
        SQL (a must) and Hive (optional), Programming language (R, Python,
        Scala, Matlab), STATA, SPSS, SAS, Data Mapping, Entity Relationship
        Diagrams, Wireframes, Big Data tools, Microsoft Visio, Agile Business
        Analysis, Machine learning, System Context Diagrams, Business Process
        Modeling, Technical and non-technical communication
      </Pre>

      <h3>مهارت‌های پرستاری و مراقبت‌های بهداشتی</h3>
      <Pre language="plaintext">
        Mathematics, CPR, Patient care and assistance, Paperwork/record-keeping
        abilities, Compassion, Advanced Cardiac, Life Support (ACLS), Telemetry,
        Attention to detail, Physical endurance, Acute care, Infection control,
        Surgery preparation
      </Pre>
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
        lang="fa-IR"
      >
        <PageContent />
      </ArticleLayout>
    </>
  );
}
