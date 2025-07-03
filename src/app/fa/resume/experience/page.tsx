import { ArticleLayout } from "@/components/article/layout";
import { Msg } from "@/components/msg/msg";
import { Pre } from "@/components/syntax-highlighter/pre";
import { separator } from "@/lib/constants/en";
import { myNameFa } from "@/lib/constants/fa";
import { readingTime } from "@/lib/reading-time";
import { pageResumeSuffix } from "@/lib/suffix";
import type { Metadata } from "next";
import Image from "next/image";
import imgResumeExperienceAccomplishments from "./_img/resume-experience-accomplishments.png";
import imgResumeExperienceCover from "./_img/resume-experience-cover.jpg";
import imgResumeExperienceExample1 from "./_img/resume-experience-example-1.png";
import coverImg from "./opengraph-image.png";

const publishDate = "2024-04-08";
const publishTime = "02:53:24";
const datePublished = `${publishDate}T${publishTime}.000Z`;
const dateModified = "2024-05-12" + "T" + "19:31:00" + ".000Z";
const articleTitle = "بخش تجربه کاری در رزومه";
const articleDescription =
	"مهم‌ترین بخش رزومه شما بدون استثنا سابقه کاری شماست. اینجا جاییه که شما خودتون رو با نمایش دستاوردها و مسئولیت‌های گذشته خودتون می‌فروشید.";
const pageTitle = articleTitle + pageResumeSuffix;
const pageDesc = articleDescription;
const pagePath = "/fa/resume/experience";
const keywords = [
	"رزومه کاری",
	"رزومه",
	"رزومه فارسی",
	"رزومه انگلیسی",
	"تجربه کاری",
];

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
				اگر فقط به همین یک بخش از رزومه مسلط بشید، میشه گفت که شما ۸۰ درصد
				رزومه‌نویسی رو بلد شدید.
			</p>
			<p>
				کلی تکنیک و روش هست که توی نوشتن تجربیات کاری باید رعایت کنید. اول بریم
				کلیات رو با هم مرور کنیم.
			</p>

			<h2>نحوه فهرست کردن تجربیات کاری در رزومه</h2>
			<Msg severity="info">
				یادتون باشه شغل یعنی کاری که براش پول گرفتید و انجام دادید.
			</Msg>

			<p>فرمت استاندارد برای تجربه کاری شامل موارد زیر است.</p>
			<ul>
				<li>عنوان شغلی / موقعیت شغلی</li>
				<li>اسم شرکت / موقعیت / توضیح</li>
				<li>بازه زمانی فعالیت</li>
				<li>دستاوردها و مسئولیت‌ها</li>
			</ul>

			<figure>
				<Image src={imgResumeExperienceCover} alt="تجربه کاری در رزومه" />
				<figcaption>خلاصه‌ای از اطلاعات مربوط به تجربه کاری در رزومه</figcaption>
			</figure>

			<h3>عنوان شغلی</h3>
			<p>
				همیشه عنوان شغلی رو اول بنویسید. وقتی استخدام‌کننده، رزومه شما رو با چشمش
				اسکن میکنه، تو یک نگاه میخواد ببینه که آیا شما تجربه کاری مرتبط دارید.
				فونت سایزش بهتره نسبت به بقیه متن‌ها بزرگ‌تر باشه و یا رنگش فرق کنه
			</p>
			<p>
				عنوان شغل‌های قبلی شما باید واضح باشه. ساده بهش نگاه کنید و هرچیزی تو
				آگهی شغلی بوده بنویسید چون برای ATS هم می‌تونه مهم باشه.
			</p>

			<h3>اسم شرکت، توضیح و موقعیت</h3>
			<p>
				بعد باید اسم کارفرما و شرکت رو بیارید و خوبه که موقعیت یعنی کشور و شهرش
				رو هم ذکر کنید. اگه شرکت معروفی نیست شاید بخواین به‌طور مختصر اون رو در
				یکی دو جمله در حد یک خط معرفی کنید. اغلب توصیه میشه محل شرکت ذکر بشه.
			</p>
			<p>
				نوع شغل رو هم می‌تونید با یک کلمه ذکر کنید که تمام وقت بوده، پاره‌وقت یا
				قراردادی و …
			</p>
			<Pre language="plaintext">Full-time, Part-time, Contract, etc.</Pre>

			<h3>بازه زمانی فعالیت</h3>
			<p>
				بازه زمانی استخدام شما در شرکت. یعنی سال و ماه ورود و خروج از شرکت. برای
				آخرین شغل بجای تاریخ می‌تونید عبارت present رو بنویسید یعنی تا همین الان.
			</p>
			<p>
				فرمت استاندارد تاریخ توی رزومه <code>mm/yyyy</code> هست. یعنی مثلا برای
				ماه سوم ۲۰۱۷ اینطوری مینویسین. <code>03/2017</code>
			</p>
			<p>
				به زمان‌های هر شغل دقت کنید. مثلا در حالت عادی منطقی نیست که دو شغل تمام
				وقت همزمان داشته باشید.
			</p>
			<p>
				توصیه میشه که زمان فعالیت در اون شغل رو هم بنویسید که نیازی به حساب و
				کتاب اختلاف دوتا تاریخ نباشه. مثلا
			</p>
			<Pre language="plaintext">(2 years 7 months) 12/2019 - present</Pre>
			<p>
				فاصله بین دو شغل یا گپ توی رزومه، فقط درصورتی که توضیحی براش وجود نداشته
				باشه یک اخطار یا ردفلگ تو رزومه شماست. یادتون باشه وقتی منابع انسانی یه
				گپ توی رزومه میبینه بدترین سناریویی که به ذهنش میرسه رو درنظر خواهد
				گرفت. پس بهتره توضیحی خوب و صادقانه براش داشته باشید. به‌عنوان مثال
			</p>
			<Pre language="plaintext">
				July 2018 - February 2019, due to my medical situation, I had to take
				time off to fully recover and focus on my health.
			</Pre>
			<p>
				البته که شما لازم نیست کل داستان رو بگید، مخصوصا وقتی دلیل شخصی باشه.
				اما آمادگی این رو داشته باشید که به‌طور خلاصه در این باره توی مصاحبه
				توضیح بدید.
			</p>

			<h3>دستاوردها یا مسئولیت‌ها</h3>
			<p>
				هسته اصلی هر تجربه کاری، این بخش هست. بسته به رشته، می‌تونید دستاوردها یا
				مسئولیت‌های خودتون رو ذکر کنید که در ادامه دقیق‌تر بررسی خواهیم کرد.
			</p>
			<p>درصورت امکان درباره دستاوردها بنویسید</p>
			<figure>
				<Image
					src={imgResumeExperienceAccomplishments}
					alt="فرمول نحوه نوشتن دستاوردها در  رزومه"
				/>
				<figcaption>نحوه نوشتن دستاوردها در رزومه</figcaption>
			</figure>
			<p>
				یکی از اشتباهات رایج رزومه‌ها، اینه که فقط مسئولیت‌ها لیست میشن. در بیشتر
				موارد، استخدام‌کننده محدوده وظایف شما رو میدونه. بزارید با مثال پیش بریم.
				فرض کنیم شما مدیر فروش هستید. مسئولیت‌های شما احتمالا این‌هاست.
			</p>
			<ul>
				<li>برقراری ارتباط با مشتریان بالقوه از طریق تلفن و ایمیل</li>
				<li>حفظ روابط با مشتریان فعلی و فروش محصولات شرکت</li>
				<li>ردیابی و گزارش‌گیری از سیستم مدیریت مشتریان</li>
			</ul>
			<p>
				اتفاقا این لیستی از مسئولیت‌های هر مدیر فروش است. ۹۰ درصد رزومه‌ها احتمالا
				به این موارد اشاره می‌کنن.
			</p>
			<p>
				پس برای متمایز کردن رزومه خودتون بجای مسئولیت‌ها روی دستاوردها تمرکز
				کنید. به زبان ساده، دقیقا شما توی رشد شرکت چه نقشی داشتید؟ اگه می‌تونید
				با ذکر عدد و رقم بگید چه تغییراتی ایجاد کردین و چقدر موثر بودید. مثلا
				دوتا نمونه خوب رو ببینیم
			</p>
			<Pre language="plaintext">
				Exceeded sales team KPIs by 30%+ for 3 months straight.
			</Pre>
			<Pre language="plaintext">
				Generated over $24,000 in sales in 1 month.
			</Pre>
			<p>
				به‌خاطر داشته باشید، در برخی از زمینه‌ها، دستاوردهای زیادی وجود ندارن که
				بشه بهشون اشاره کرد و پیدا کردن عدد و رقم واقعا سخت خواهد بود. در این
				موارد عملا چاره‌ای نیست و ذکر کردن مسئولیت‌ها راه جایگزین هست.
			</p>

			<h2>بررسی یک نمونه از تجربه کاری</h2>
			<figure>
				<Image
					src={imgResumeExperienceExample1}
					alt="تجربه کاری در رزومه - نمونه ۱"
				/>
				<figcaption>نمونه‌ای از نحوه نوشتن تجربه کاری در رزومه</figcaption>
			</figure>

			<h2>چه میزان تجربه کاری در رزومه بنویسیم؟</h2>
			<p>
				اگه بیش‌تر از یک دهه تجربه کاری ارزشمند دارید، احتمالا درباره اینکه چقدر
				از اون رو توی رزومه بنویسید گیج شدید. اگه بخوای همه سوابق کاری رو لیست
				کنی احتمالا یک رمان باید بنویسی. از طرف دیگه اگه تازه‌کار هستی، احتمالا
				هیچ تجربه‌ای نداری و نمی‌دونی چی رو باید بنویسی.
			</p>
			<p>
				بسته به سطح شما مقدار اطلاعاتی که توی رزومه ذکر میشه متفاوت خواهد بود.
			</p>
			<Msg severity="info">
				تجربه کاری شما باید برای استخدام‌کننده ارزش داشته باشه. اگر نداره، بهتره
				اون رو از رزومه حذف کنید.
			</Msg>

			<h3>بدون تجربه کاری</h3>
			<p>
				اگه تجربه نداری پرکردن این بخش قطعا سخت هست. می‌تونید این بخش رو خالی
				بزارید و روی بقیه بخش‌ها تمرکز کنید یا اینکه این بخش رو با تجربه کاری در
				سازمان‌های دانشجویی و غیرانتفاعی و خیریه و … پر کنید.
			</p>

			<h3>کاندیدای تازه‌کار Entry-level</h3>
			<p>تمام کارهایی که تاحالا انجام دادید رو لیست کنید.</p>

			<h3>حرفه‌ای سطح متوسط Mid-level</h3>
			<p>فقط تجربیات کاری مرتبط با عنوان شغلی رو بنویسید.</p>

			<h3>متخصصان ارشد Senior professionals</h3>
			<p>
				{" "}
				حداکثر ۱۵ سال سابقه کاری رو ذکر کنید. اگه تجربه اخیر شما مدیرعاملی بوده،
				هیچ‌کسی به صندوق‌دار بودن شما در دوران نوجوانی اهمیت نمیده.
			</p>
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
				lang="fa-IR"
			>
				<PageContent />
			</ArticleLayout>
	);
}
