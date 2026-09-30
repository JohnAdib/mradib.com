import Image from "next/image";
import type { JSX } from "react";
import { Accordion } from "@/components/accordion/accordion";
import { Msg } from "@/components/msg/msg";
import { Pre } from "@/components/syntax-highlighter/pre";
import imgResumeHardSkills from "./_img/resume-hard-skills.png";

export function HardVsSoft(): JSX.Element {
	return (
		<>
			<p>
				یه بخش الزامی که توی رزومه باید باشه، مهارت‌هاست. شما تو این بخش تمام
				مهارت‌هایی که دارید رو لیست می‌کنید تا نشون بدید چرا برای این شغل گزینه
				مناسبی هستید. به‌طور کلی مهارت‌ها در دو دسته تقسیم‌بندی می‌شن و یک رزومه خوب
				بهتره هر دو رو پوشش بده.
			</p>
			<Msg severity="info">
				نکته مهم: یادتون باشه مهارت‌های مرتبط با عنوان شغلی رو باید لیست کنید.
			</Msg>

			<h3 id="hard-skills">
				<a
					href="#hard-skills"
					className="no-underline text-inherit hover:underline"
				>
					هارداسکیل
				</a>
			</h3>
			<p>
				هارداسکیل قابل اندازه‌گیری است. می‌تونه هرچیزی باشه از زبان برنامه‌نویسی
				مثل TypeScript تا یک کتابخونه مثل React تا حتی مهارت پخت قرمه‌سبزی!
			</p>
			<p>
				هارداسکیل معمولا به دانش فنی یا مهارتی اشاره داره که با آموزش و تمرین
				به‌دست اومده. هارداسکیل برای یک شغل، خاص و ضروری هست تا شما بتونید از پس
				نیازهای اون شغل بربیاید. به‌عنوان نمونه موارد زیر بسته به شغل هارداسکیل
				هستند.
			</p>
			<Accordion title="نمونه‌هایی از هارداسکیل">
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
					Coding Languages - JavaScript, TypeScript, Python, C++, C#, Java,
					Scala, R
				</Pre>
				<Pre language="plaintext">
					Techniques - Frequency analysis, Crystallization
				</Pre>
				<Pre language="plaintext">Mathematics</Pre>
				<Pre language="plaintext">Accounting & bookkeeping</Pre>
			</Accordion>

			<h3 id="soft-skills">
				<a
					href="#soft-skills"
					className="no-underline text-inherit hover:underline"
				>
					سافت‌اسکیل
				</a>
			</h3>
			<p>
				سافت‌اسکیل‌ها مهارت‌های شخصی هستن که می‌تونن ترکیبی از مهارت‌های اجتماعی،
				مهارت‌های ارتباطی، ویژگی‌ها و صفات شخصی، ویژگی‌های شغلی و غیره باشن. مثلا
				می‌تونید مهارت‌هایی مثل رهبری، تفکر انتقادی، مدیریت و ارتباطات رو ذکر
				کنید. سافت‌اسکیل‌ها معمولا توی آگهی شغلی ذکر نمی‌شن ولی به‌طور غیرمستقیم
				می‌تونن نشون بدن که شما با محیط کار و فرهنگ شرکت سازگار می‌شید.
			</p>
			<Pre language="plaintext">
				Effective communication, Teamwork, Responsibility, Creativity,
				Problem-solving, Leadership, Extroversion, People skills, Openness,
				Adaptability
			</Pre>
		</>
	);
}
