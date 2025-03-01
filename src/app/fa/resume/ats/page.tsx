import { ArticleLayout } from "@/components/article/layout";
import { Pre } from "@/components/syntax-highlighter/pre";
import { separator } from "@/lib/constants/en";
import { myNameFa } from "@/lib/constants/fa";
import { readingTime } from "@/lib/reading-time";
import { pageResumeSuffix } from "@/lib/suffix";
import type { Metadata } from "next";
import Image from "next/image";
import imgResumeAts70pDisqualified from "./_img/resume-ats-70p-disqualified.png";
import imgResumeAtJobExample1 from "./_img/resume-ats-job-example-1.jpg";
import imgResumeAtsUsage from "./_img/resume-ats-usage.png";
import coverImg from "./opengraph-image.png";

const publishDate = "2024-04-08";
const publishTime = "02:53:24";
const datePublished = `${publishDate}T${publishTime}.000Z`;
const dateModified = "2024-05-12" + "T" + "19:31:00" + ".000Z";
const articleTitle = "ATS سیستم ردیابی متقاضی";
const articleDescription =
	"آیا می‌دونید حدود ۷۰ درصد رزومه‌ها که برای شغل‌ها فرستاده میشه اصلا خونده نمیشه؟ چرا؟";
const pageTitle = articleTitle + pageResumeSuffix;
const pageDesc = articleDescription;
const pagePath = "/fa/resume/ats";
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
				یه غول داریم به اسم ATS که اگه ترفندهاش رو یاد بگیرید می‌تونید از سدش رد
				بشید و کاری کنید که یک انسان رزومه شما رو بخونه.
			</p>
			<p>
				ATS مخفف Applicant Tracking Systems هست و یه سیستم اتوماته که وقتی شما
				رزومه رو ارسال میکنید توسط سیستم چک میکنه که آیا برای این شغل مناسب هست
				یا نه. وقتی مناسب نباشه معمولا بدون اینکه کسی اون رزومه رو بخونه ایمیل
				ریجکت دریافت می‌کنید که احتمالا شبیه به هم هستن.
			</p>
			<figure>
				<Image
					src={imgResumeAts70pDisqualified}
					alt="حدود ۷۰ درصد رزومه‌ها توسط ATS رد میشه"
				/>
				<figcaption>حدود ۷۰ درصد رزومه‌ها توسط ATS رد میشه</figcaption>
			</figure>

			<p>
				ای‌تی‌اس یک جور رباته که با فیلتر کردن صدها رزومه، فقط مواردی که مناسب‌تر
				هستن رو به دست منابع انسانی و استخدام‌کننده‌ها میرسونه.
			</p>
			<p>
				احتمالا تعجب کردین. دارین با خودتون میگین وقتی یه ربات میخواد بهم نه بگه
				چه کاریه این همه وقت بزارم رزومه خودم رو درست کنم :(
			</p>
			<figure>
				<Image
					src={imgResumeAtsUsage}
					alt="حدود ۹۸ درصد شرکت‌ها از ATS استفاده میکنن"
				/>
				<figcaption>حدود ۹۸ درصد شرکت‌ها از ATS استفاده میکنن</figcaption>
			</figure>

			<p>
				نگران نباشید، وقتی بدونید با چی طرف هستید و چطور کار میکنه، رد شدن ازش
				کار سختی نخواهد بود. نکته این‌جاست که باید آگهی شغلی رو بخونید و رزومه رو
				متناسب با اون تنظیم کنید. برای این‌کار باید کلمات کلیدی رو پیدا کنید و
				توی رزومه خودتون ازشون استفاده کنید.
			</p>
			<p>
				بزارید یه مثال ساده بزنیم. یک آگهی برای بازریاب دیجیتال رو بخونیم ببینیم
				چی برای شرکت مهمه.
			</p>
			<figure>
				<Image
					src={imgResumeAtJobExample1}
					alt="بررسی یک آگهی شغلی از نگاه ATS"
				/>
				<figcaption>بررسی یک آگهی شغلی از نگاه ATS</figcaption>
			</figure>
			<Pre language="plaintext">5+ years of experience in online marketing</Pre>
			<Pre language="plaintext">
				Social media marketing experience ... Facebook advertising
			</Pre>
			<Pre language="plaintext">
				B.A. in Marketing or Business Administration
			</Pre>
			<Pre language="plaintext">
				managing USD 20,000+ monthly advertising budget on Facebook
			</Pre>

			<p>
				حالا برای اینکه رزومه خودمون رو برای این پیش‌نیازها تنظیم کنیم، کافیه این
				موارد رو توی رزومه خودتون اضافه کنید. البته منظورم مشابه اون‌هاست با توجه
				به دستاوردها و صلاحیت‌هایی که دارید.
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
				lang="fa-IR"
			>
				<PageContent />
			</ArticleLayout>
		</>
	);
}
