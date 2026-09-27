import type { JSX } from "react";
import { Pre } from "@/components/syntax-highlighter/pre";

export function SummaryObjective(): JSX.Element {
	return (
		<>
			<h3 id="objective">
				<a
					href="#objective"
					className="no-underline text-inherit hover:underline"
				>
					هدف رزومه
				</a>
			</h3>
			<p>
				در بعضی از شرایط، این بخش به‌عنوان هدف رزومه هم نام‌گذاری می‌شه که اشاره به
				حالتی داره که شما قصد تغییر زمینه کاری خودتون رو دارید یا تازه از
				دانشگاه فارغ‌التحصیل شدید و سابقه کاری خاصی ندارید و بیشتر از علایق
				خودتون می‌خواین صحبت کنید.
			</p>
			<p>فرمول ساخت هدف رزومه می‌تونه به شکل زیر باشه</p>
			<ol>
				<li>مهارت یا تحصیلات یا گواهی‌های مرتبط با عنوان شغلی</li>
				<li>به‌دنبال x ماه یا سال تجربه فلان در عنوان شغلی فلان در شرکت فلان</li>
				<li>
					برای کمک به مسئولیت‌هایی که شما می‌تونید انجام بدید تا با موفقیت انجام
					بشه
				</li>
			</ol>

			<p>مثلا اگر دانشجو هستید می‌تونید از این الگو بگیرید.</p>
			<Pre language="plaintext">
				Hard-working recent graduate with a B.A. in Graphic Design from New York
				State University seeking new opportunities. 3+ years of practical
				experience working with Adobe Illustrator and Photoshop, creating
				illustrations & designing UX / UI. Looking to grow as a designer, as
				well as perfect my art, at the XYZ Design Studio.
			</Pre>

			<p>
				یا مثلا اگه قصد تغییر عنوان شغلی خودتون رو دارید می‌تونید این مدلی
				بنویسید.
			</p>
			<Pre language="plaintext">
				IT project manager with 5+ years of experience in software development.
				Managed a team of developers to create products for several industries,
				such as FinTech and HR tech. Looking to leverage my experience in
				managing outsourced products as a Product Owner at XYZ.
			</Pre>
		</>
	);
}
