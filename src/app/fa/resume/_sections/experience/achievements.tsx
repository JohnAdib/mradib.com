import Image from "next/image";
import type { JSX } from "react";
import { Pre } from "@/components/syntax-highlighter/pre";
import imgResumeExperienceAccomplishments from "./_img/resume-experience-accomplishments.png";

export function ExperienceAchievements(): JSX.Element {
	return (
		<>
			<h4 id="achievements">
				<a
					href="#achievements"
					className="no-underline text-inherit hover:underline"
				>
					دستاوردها یا مسئولیت‌ها
				</a>
			</h4>
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
		</>
	);
}
