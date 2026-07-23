import Image from "next/image";
import type { JSX } from "react";
import { Msg } from "@/components/msg/msg";
import { Pre } from "@/components/syntax-highlighter/pre";
import imgResumeHardSkills from "./_img/resume-hard-skills.png";

export function HardVsSoft(): JSX.Element {
	return (
		<>
			<p>
				یه بخش الزامی که توی رزومه باید باشه، مهارت‌هاست. شما تو این بخش تمام
				مهارت‌هایی که دارید رو لیست می‌کنید تا نشون بدید چرا برای این شغل گزینه
				مناسبی هستید. به‌طور کلی مهارت‌ها در دو دسته تقسیم‌بندی میشن و یک رزومه خوب
				بهتره هر دو رو پوشش بده.
			</p>
			<Msg severity="info">
				نکته مهم، یادتون باشه مهارت‌های مرتبط با عنوان شغلی رو باید لیست کنید.
			</Msg>

			<h3 id="hard-skills">
				<a
					href="#hard-skills"
					className="no-underline text-inherit hover:underline"
				>
					هارد اسکیل
				</a>
			</h3>
			<p>
				هارد اسکیل قابل اندازه‌گیری است. میتونه هرچیزی باشه از زبان‌برنامه‌نویسی
				مثل PHP تا یک کتابخونه مثل React تا حتی مهارت پخت قرمه‌سبزی!
			</p>
			<p>
				هارد اسکیل اغلب به دانش فنی اشاره داره یا آموزشی که تجربه شده و به‌دست
				اومده. هارد اسکیل برای یک شغل، خاص و ضروری هست تا شما بتونید نیازهای اون
				شغل رو انجام بدید. به‌عنوان نمونه موارد زیر بسته به شغل هارداسکیل هستند.
			</p>
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
				Coding Languages - JavaScript, PHP, Python, C++, C#, Java, Scala, R
			</Pre>
			<Pre language="plaintext">
				Techniques - Frequency analysis, Crystallization
			</Pre>
			<Pre language="plaintext">Mathematics</Pre>
			<Pre language="plaintext">Accounting & bookkeeping</Pre>

			<h3 id="soft-skills">
				<a
					href="#soft-skills"
					className="no-underline text-inherit hover:underline"
				>
					سافت اسکیل
				</a>
			</h3>
			<p>
				مهارت‌های شخصی که میتونه ترکیبی از مهارت‌های اجتماعی، مهارت‌های ارتباطی،
				ویژگی‌ها و صفات شخصی، ویژگی‌های شغلی و غیره باشه. مثلا میتونید مهارت‌هایی
				مثل رهبری، تفکر انتقادی، مدیریت و ارتباطات رو ذکر کنید. سافت‌اسکیل‌ها
				معمولا توی شغل ذکر نمی‌شن ولی به‌طور غیرمستقیم میتونن نشون بدن که شما با
				محیط کار و فرهنگ شرکت سازگار خواهید بود.
			</p>
			<Pre language="plaintext">
				Effective communication, Teamwork, Responsibility, Creativity,
				Problem-solving, Leadership, Extroversion, People skills, Openness,
				Adaptability
			</Pre>
		</>
	);
}
