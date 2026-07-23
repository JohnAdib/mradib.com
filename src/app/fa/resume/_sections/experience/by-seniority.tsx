import type { JSX } from "react";
import { Msg } from "@/components/msg/msg";

export function ExperienceBySeniority(): JSX.Element {
	return (
		<>
			<h3 id="seniority">
				<a
					href="#seniority"
					className="no-underline text-inherit hover:underline"
				>
					چه میزان تجربه کاری در رزومه بنویسیم؟
				</a>
			</h3>
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

			<h4 id="no-experience">
				<a
					href="#no-experience"
					className="no-underline text-inherit hover:underline"
				>
					بدون تجربه کاری
				</a>
			</h4>
			<p>
				اگه تجربه نداری پرکردن این بخش قطعا سخت هست. می‌تونید این بخش رو خالی
				بزارید و روی بقیه بخش‌ها تمرکز کنید یا اینکه این بخش رو با تجربه کاری در
				سازمان‌های دانشجویی و غیرانتفاعی و خیریه و … پر کنید.
			</p>

			<h4 id="entry-level">
				<a
					href="#entry-level"
					className="no-underline text-inherit hover:underline"
				>
					کاندیدای تازه‌کار Entry-level
				</a>
			</h4>
			<p>تمام کارهایی که تاحالا انجام دادید رو لیست کنید.</p>

			<h4 id="mid-level">
				<a
					href="#mid-level"
					className="no-underline text-inherit hover:underline"
				>
					حرفه‌ای سطح متوسط Mid-level
				</a>
			</h4>
			<p>فقط تجربیات کاری مرتبط با عنوان شغلی رو بنویسید.</p>

			<h4 id="senior">
				<a href="#senior" className="no-underline text-inherit hover:underline">
					متخصصان ارشد Senior professionals
				</a>
			</h4>
			<p>
				{" "}
				حداکثر ۱۵ سال سابقه کاری رو ذکر کنید. اگه تجربه اخیر شما مدیرعاملی بوده،
				هیچ‌کسی به صندوق‌دار بودن شما در دوران نوجوانی اهمیت نمیده.
			</p>
		</>
	);
}
