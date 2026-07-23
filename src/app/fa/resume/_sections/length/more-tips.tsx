import type { JSX } from "react";
export function LengthMoreTips(): JSX.Element {
	return (
		<>
			<h4 id="school">
				<a href="#school" className="no-underline text-inherit hover:underline">
					تحصیلات مدرسه رو حذف کنید
				</a>
			</h4>
			<p>
				مگر اینکه کارفرمای شما هم همون مدرسه رو رفته باشه وگرنه وقتی مدرک
				دانشگاهی دارید نیازی نیست دیپلم و پیش‌دانشگاهی رو بنویسید
			</p>

			<h4 id="repetition">
				<a
					href="#repetition"
					className="no-underline text-inherit hover:underline"
				>
					موارد تکراری رو حذف کنید
				</a>
			</h4>
			<p>
				اگه مسئولیت‌های مشابهی در چند شرکت داشتید، شرح شغلی رو تکرار نکنید. واقعا
				جالب نیست که کارفرما چندین بار یک عبارت رو ببینه.
			</p>

			<h4 id="trim">
				<a href="#trim" className="no-underline text-inherit hover:underline">
					خلاصه رزومه رو خلاصه کنید
				</a>
			</h4>
			<p>
				اسمش روشه، باید خلاصه باشه. نباید که ۶ خط بنویسید و ۱۰ تا بولت بزنید.
				سعی کنید حداکثر تو ۳ خط جمعش کنید.
			</p>

			<h4 id="builders">
				<a
					href="#builders"
					className="no-underline text-inherit hover:underline"
				>
					از سایت‌های ساخت رزومه استفاده کنید
				</a>
			</h4>
			<p>
				شاید اینکه خودتون بخواین دیزاین رزومه رو تغییر بدین سخت باشه. سایت‌هایی
				که برای ساخت رزومه طراحی شدن قالب‌های آماده یک‌صفحه‌ای زیادی دارن و شما فقط
				کافیه محتوا رو وارد کنید تا اون خودش توی یک صفحه براتون جا بده.
			</p>
		</>
	);
}
