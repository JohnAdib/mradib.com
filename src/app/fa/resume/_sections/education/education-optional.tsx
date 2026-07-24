import type { JSX } from "react";
import { Msg } from "@/components/msg/msg";
import { Pre } from "@/components/syntax-highlighter/pre";

export function EducationOptional(): JSX.Element {
	return (
		<>
			<h3 id="edu-extras">
				<a
					href="#edu-extras"
					className="no-underline text-inherit hover:underline"
				>
					اطلاعات اختیاری درباره تحصیلات
				</a>
			</h3>
			<Msg severity="warning">
				برای یک رزومه کاری، جزئیات اختیاری مثل معدل، افتخارات و عناوین درس‌ها هیچ
				ارزشی اضافه نمی‌کنن. اون‌ها رو ننویسید. این‌ها فقط برای یک CV آکادمیک معنی
				داره، اون هم وقتی برای نقش‌های دانشگاهی درخواست می‌دید. اگه دنبال یه شغل
				هستید، هیچ‌کس به معدل شما اهمیتی نمیده.
			</Msg>
			<p>
				تنها استثنا اوایل کاره. وقتی سابقه کاری کمی دارید، این موارد می‌تونن به
				پرکردن رزومه کمک کنن. حتی اون موقع هم مطمئن بشید که هر مورد ارزش واقعی
				اضافه می‌کنه. اگه معدل‌تون خوب نبوده، چرا ذکرش می‌کنید؟
			</p>
			<h4 id="gpa">
				<a href="#gpa" className="no-underline text-inherit hover:underline">
					معدل
				</a>
			</h4>
			<p>
				توی یک CV آکادمیک، فقط درصورتی که خیلی درس‌خون بودید و معدل‌تون بالای 3.5
				بوده اون رو ذکر کنید. توی رزومه کاری اصلا ننویسیدش.
			</p>
			<Pre language="plaintext">GPA: 3.9</Pre>
			<h4 id="campus">
				<a href="#campus" className="no-underline text-inherit hover:underline">
					محل دانشگاه
				</a>
			</h4>
			<Pre language="plaintext">London, UK</Pre>
			<h4 id="honors">
				<a href="#honors" className="no-underline text-inherit hover:underline">
					افتخارات
				</a>
			</h4>
			<Pre language="plaintext">One of the top students in the class</Pre>
			<h4 id="academic">
				<a
					href="#academic"
					className="no-underline text-inherit hover:underline"
				>
					دستاوردهای آکادمیک
				</a>
			</h4>
			<Pre language="plaintext">
				Published a research paper in the university journal
			</Pre>
			<h4 id="courses">
				<a
					href="#courses"
					className="no-underline text-inherit hover:underline"
				>
					عناوین درس‌های مرتبط که پاس کردید
				</a>
			</h4>
			<p>
				عناوین دروسی که پاس کردید رو توی رزومه کاری ننویسید. این‌ها فقط به درد یک
				CV آکادمیک می‌خوره، یا اولین رزومه‌تون که نیاز به پرکردن داره.
			</p>
			<Pre language="plaintext">
				Software Engineering, Database Management, Algorithms
			</Pre>
			<h4 id="exchange">
				<a
					href="#exchange"
					className="no-underline text-inherit hover:underline"
				>
					برنامه تبادل برای دکتری
				</a>
			</h4>
			<Pre language="plaintext">Exchange Program in Oslo, Norway</Pre>
		</>
	);
}
