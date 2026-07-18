import Image from "next/image";
import Link from "next/link";
import type { JSX } from "react";
import { Msg } from "@/components/msg/msg";
import imgResumeFormatStructureExample from "./_img/resume-format-structure-example.jpg";

export function BuildingSoftware(): JSX.Element {
	return (
		<>
			<h3 id="choose-software">
				انتخاب نرم‌افزار یا سرویس مناسب برای ساخت رزومه
			</h3>
			<p>
				بعد از انتخاب ساختار و قبل از اینکه بخواین شروع به نوشتن رزومه کنید،
				باید تصمیم بگیرید که با چه ابزاری میخواین رزومه خودتون رو بسازید. روش‌های
				مختلفی برای ساخت رزومه هست، از مایکروسافت ورد و سایر ادیتورهای متنی
				گرفته تا سایت‌هایی که برای ساخت رزومه ساخته شدن تا Overleaf و اچ‌تی‌ام‌ال و
				سی‌اس‌اس.
			</p>
			<p>
				تفاوتی نداره که رزومه فارسی یا رزومه انگلیسی میخواین بسازید، در هر صورت
				نیاز به انتخاب نرم‌افزار مناسب برای ساخت رزومه تحصیلی یا رزومه کاری
				خودتون دارید. رزومه کاری نمونه زیادی از طریق لینک‌های زیر در دسترس است.
			</p>
			<Msg severity="info">
				ساخت رزومه رایگان است! فایل خام رزومه رو انتخاب و بعد فرم رزومه رو
				دانلود کنید.
			</Msg>
			<p>
				اگر مایلید از مایکروسافت ورد استفاده کنید، میتونید به آدرس زیر سربزنید و
				از بین قالب‌های رایگان ورد رو دانلود کنید و توی سیستم خودتون به‌صورت
				آفلاین ویرایش کنید. فایل خام رزومه و نمونه رزومه رو از طریق لینک زیر در
				فرمت ورد مشاهده و برای دانلود رزومه خام انتخاب کنید.
			</p>

			<ul dir="ltr">
				<li>
					<Link href="https://templates.office.com/en-us/resume-templates">
						https://templates.office.com/en-us/resume-templates
					</Link>
				</li>
			</ul>

			<p>
				اگر مایلید از Overleaf استفاده کنید، لینک زیر که یک تمپلیت رزومه
				استاندارد هست، پیشنهاد میشه.
			</p>

			<ul dir="ltr">
				<li>
					<Link href="https://www.overleaf.com/latex/templates/tagged/cv">
						https://www.overleaf.com/latex/templates/tagged/cv
					</Link>
				</li>
				<li>
					<Link href="https://www.overleaf.com/latex/templates/data-science-tech-resume-template/zcdmpfxrzjhv">
						https://www.overleaf.com/latex/templates/data-science-tech-resume-template/zcdmpfxrzjhv
					</Link>
				</li>
			</ul>

			<p>
				استفاده از ادیتورهای متنی ساده خیلی محبوب هست ولی مشکلی که داره اینه که
				شاید ساعت‌ها وقت شما برای طراحی تلف بشه. یه تغییر کوچک انجام میدی و بوم!
				کل رزومه به فنا میره و باید کلی وقت بزاری درستش کنی. این تبلیغیه که
				سایت‌های ساخت رزومه میزارن و ادعا میکنن که سریع می‌تونن رزومه شما رو
				بسازن. گزینه‌های متنوعی برای ساخت رزومه آنلاین توسط رزومه ساز آنلاین
				رایگان و حتی فارسی دارید.{" "}
			</p>

			<figure>
				<Image
					src={imgResumeFormatStructureExample}
					alt="مقایسه انواع ساختارهای رزومه"
				/>
				<figcaption>نمونه‌ای از انواع ساختارهای رزومه</figcaption>
			</figure>

			<Msg severity="info">
				به هر حال تصمیمش با شماست و بستگی به مهارت‌تون داره.
			</Msg>
		</>
	);
}
