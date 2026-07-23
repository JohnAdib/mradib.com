import Image from "next/image";
import type { JSX } from "react";
import { Msg } from "@/components/msg/msg";
import imgResumeContactCover from "./_img/resume-contact-cover.jpg";

export function EssentialInfo(): JSX.Element {
	return (
		<>
			<p>
				فرض کنید شما یک رزومه فوق‌العاده دارید که دل هر کسی که اون رو خونده، آب
				کرده. اگه استخدام‌کننده نتونه اطلاعات تماس مناسبی از شما پیدا کنه، این
				همه زحمتی که کشیدین چه فایده‌ای داره؟ اطلاعات تماس یک بخش حیاتی تو رزومه
				شماست.
			</p>

			<h3 id="essentials">
				<a
					href="#essentials"
					className="no-underline text-inherit hover:underline"
				>
					اطلاعات اولیه در بخش تماس روزمه
				</a>
			</h3>
			<figure>
				<Image src={imgResumeContactCover} alt="بخش تماس رزومه" />
				<figcaption>خلاصه‌ای از اطلاعات مربوط به تماس در رزومه</figcaption>
			</figure>

			<h4 id="name">
				<a href="#name" className="no-underline text-inherit hover:underline">
					نام و نام خانوادگی
				</a>
			</h4>
			<p>به‌نظر ساده میاد!</p>
			<Msg severity="warning">
				{" "}
				محض اطلاع وقتی دکتر هستید نباید قبلش Dr بزارید!
			</Msg>

			<h4 id="headline">
				<a
					href="#headline"
					className="no-underline text-inherit hover:underline"
				>
					عنوان شغلی
				</a>
			</h4>
			<p>
				عنوان حرفه‌ای شما می‌تونه موقعیت فعلی یا شغل موردنظر شما باشه. مثلا Full
				Stack Developer یا Android Developer. یه نکته مهم اینجا مطرح میشه که از
				عناوین عجیب و غریب مثل نینجا و سامورائی و … استفاده نکنید. سعی کنید
				بیشتر از ۴ کلمه نشه.
			</p>
			<Msg severity="success">
				بهترین حالت اینه که عنوان شغلی شما با عنوان آگهی شغلی برابر باشه.
			</Msg>

			<h4 id="email">
				<a href="#email" className="no-underline text-inherit hover:underline">
					آدرس ایمیل
				</a>
			</h4>
			<p>خیلی مهمه. تقریبا همه کارتون با این ایمیل انجام میشه.</p>

			<h4 id="phone">
				<a href="#phone" className="no-underline text-inherit hover:underline">
					شماره موبایل
				</a>
			</h4>
			<p>در موارد نادری ممکنه مستقیم به شما زنگ بزنن!</p>

			<h4 id="location">
				<a
					href="#location"
					className="no-underline text-inherit hover:underline"
				>
					موقعیت
				</a>
			</h4>
			<p>
				منظور شهر و کشور فعلی هست برای اینکه شرکت بفهمه آیا شما نیاز به ریلوکیشن
				دارید؟
			</p>
			<Msg severity="error">
				به‌هیچ عنوان نیازی به ذکر جزئیات آدرس مثل آدرس کوچه و پلاک خونه‌تون نیست!
			</Msg>
		</>
	);
}
