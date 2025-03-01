import { ArticleLayout } from "@/components/article/layout";
import { Pre } from "@/components/syntax-highlighter/pre";
import { separator } from "@/lib/constants/en";
import { myNameFa } from "@/lib/constants/fa";
import { readingTime } from "@/lib/reading-time";
import { pageResumeSuffix } from "@/lib/suffix";
import type { Metadata } from "next";
import Image from "next/image";
import imgResumeSummaryCover from "./_img/resume-summary-cover.png";
import coverImg from "./opengraph-image.png";

const publishDate = "2024-04-21";
const publishTime = "00:14:24";
const datePublished = `${publishDate}T${publishTime}.000Z`;
const dateModified = "2024-05-12" + "T" + "19:31:00" + ".000Z";
const articleTitle = "بخش خلاصه در رزومه";
const articleDescription =
	"فکر نمی‌کنم شک داشته باشد که همیشه اولین نگاه مهم است. پس این فرصت رو دارید که با یک خلاصه عالی، توجه استخدام‌کننده رو جلب کنید.";
const pageTitle = articleTitle + pageResumeSuffix;
const pageDesc = articleDescription;
const pagePath = "/fa/resume/summary";
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
				اگه اولین تاثیر منفی باشه، احتمالا تا آخر باقی می‌مونه و تغییرش سخت خواهد
				بود. پس بیاین فرصت رو از دست ندیم و تا میتونیم با خلاصه‌ی عالی، نظر
				بیننده رو جلب کنیم.
			</p>
			<p>
				طبق آمار، استخدام‌کننده‌ها حدود <b>۶ ثانیه</b> برای برانداز کردن هر رزومه
				وقت میزان. بله، این همه زحمت می‌کشید برای ۶ ثانیه. تنها درصورتی که نظرشون
				جلب بشه زمان بیشتری می‌ذارن. یکی از بخش‌های مهم که می‌تونه نظرشون رو جلب
				کنه بخش خلاصه رزومه یا هدف هست که در کنار بخش اطلاعات تماس قرار می‌گیره.
			</p>

			<figure>
				<Image src={imgResumeSummaryCover} alt="بخش خلاصه در رزومه" />
				<figcaption>
					موقعیت قرارگیری بخش خلاصه در رزومه رو در این تصویر می‌بینید
				</figcaption>
			</figure>

			<h2>خلاصه رزومه چیست و چه زمانی باید استفاده شود؟</h2>
			<p>
				خلاصه معمولا بین ۲ تا ۳ جمله درباره شغل شماست. توصیه میشه که از خلاصه
				رزومه استفاده کنید هر چند اجباری نیست.
			</p>
			<p>در بخش خلاصه رزومه بهتره به سه مورد زیر اشاره کنید.</p>
			<ol>
				<li>
					<span>شغل فعلی و تعداد سال‌های تجربه</span>
					<Pre language="plaintext">
						Customer support representative with 5+ years of experience in the
						IT industry.
					</Pre>
				</li>
				<li>
					<span>یک یا دو دستاورد یا مسئولیت اصلی که داشته‌اید</span>
					<Pre language="plaintext">
						Specialized in technical support, customer care, and user retention.
					</Pre>
				</li>
				<li>
					<span>اشتیاق یا هدف موردانتظار از کار کردن</span>
					<Pre language="plaintext">
						Looking for new opportunities as a support lead for a SaaS company.
					</Pre>
				</li>
			</ol>

			<h2>هدف رزومه</h2>
			<p>
				در بعضی از شرایط، این بخش به‌عنوان هدف رزومه هم نام‌گذاری میشه که اشاره به
				حالتی که شما قصد تغییر زمینه کاری خودتون رو دارید یا تازه از دانشگاه
				فارغ‌التحصیل شدید و سابقه کاری خاصی ندارید و بیشتر از علایق خودتون
				میخواین صحبت کنید.
			</p>
			<p>فرمول ساخت هدف رزومه میتونه به شکل زیر باشه</p>
			<ol>
				<li>هارت یا تحصیلات یا گواهی‌های مرتبط با عنوان شغلی</li>
				<li>به‌دنبال x ماه یا سال تجربه فلان در عنوان شغلی فلان در شرکت فلان</li>
				<li>
					برای کمک به مسئولیت‌هایی که شما می‌تونید انجام بدید تا با موفقیت انجام
					بشه
				</li>
			</ol>

			<p>مثلا اگر دانشجو هستید میتونید از این الگو بگیرید.</p>
			<Pre language="plaintext">
				Hard-working recent graduate with a B.A. in Graphic Design from New York
				State University seeking new opportunities. 3+ years of practical
				experience working with Adobe Illustrator and Photoshop, creating
				illustrations & designing UX / UI. Looking to grow as a designer, as
				well as perfect my art, at the XYZ Design Studio.
			</Pre>

			<p>
				یا مثلا اگه قصد تغییر عنوان شغلی خودتون رو دارید میتونید این مدلی
				بنویسید.
			</p>
			<Pre language="plaintext">
				IT project manager with 5+ years of experience in software development.
				Managed a team of developers to create products for several industries,
				such as FinTech and HR tech. Looking to leverage my experience in
				managing outsourced products as a Product Owner at XYZ.
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
