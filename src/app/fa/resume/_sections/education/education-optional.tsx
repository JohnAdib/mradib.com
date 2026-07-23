import type { JSX } from "react";
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
			<p>
				معمولا زمانی که سابقه کاری چندانی ندارید، برای پرکردن رزومه میتونید از
				موارد اختیاری استفاده کنید، ولی مثل همیشه مطمئن بشید که این اطلاعات
				ارزشی به رزومه شما اضافه می‌کنن. مثلا وقتی معدل برتر نبودید، چرا ذکرش
				می‌کنید!؟
			</p>
			<h4 id="gpa">
				<a href="#gpa" className="no-underline text-inherit hover:underline">
					معدل
				</a>
			</h4>
			<p>
				فقط درصورتی که خیلی درس خون بودید و نمره معدل شما بیشتر از 3.5 بوده اون
				رو ذکر کنید.
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
				عناوین دروسی که پاس کردید رو بهتره تو رزومه نذارید مگر اینکه تازه‌کار
				باشید و هدف‌تون پرکردن رزومه باشه.
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
