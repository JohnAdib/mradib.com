import type { JSX } from "react";
import { Pre } from "@/components/syntax-highlighter/pre";

export function EducationOptional(): JSX.Element {
	return (
		<>
			<h3 id="edu-extras">اطلاعات اختیاری درباره تحصیلات</h3>
			<p>
				معمولا زمانی که سابقه کاری چندانی ندارید، برای پرکردن رزومه میتونید از
				موارد اختیاری استفاده کنید، ولی مثل همیشه مطمئن بشید که این اطلاعات
				ارزشی به رزومه شما اضافه می‌کنن. مثلا وقتی معدل برتر نبودید، چرا ذکرش
				می‌کنید!؟
			</p>
			<h4 id="gpa">معدل</h4>
			<p>
				فقط درصورتی که خیلی درس خون بودید و نمره معدل شما بیشتر از 3.5 بوده اون
				رو ذکر کنید.
			</p>
			<Pre language="plaintext">GPA: 3.9</Pre>
			<h4 id="campus">محل دانشگاه</h4>
			<Pre language="plaintext">London, UK</Pre>
			<h4 id="honors">افتخارات</h4>
			<Pre language="plaintext">One of the top students in the class</Pre>
			<h4 id="academic">دستاوردهای آکادمیک</h4>
			<Pre language="plaintext">
				Published a research paper in the university journal
			</Pre>
			<h4 id="courses">عناوین درس‌های مرتبط که پاس کردید</h4>
			<p>
				عناوین دروسی که پاس کردید رو بهتره تو رزومه نذارید مگر اینکه تازه‌کار
				باشید و هدف‌تون پرکردن رزومه باشه.
			</p>
			<Pre language="plaintext">
				Software Engineering, Database Management, Algorithms
			</Pre>
			<h4 id="exchange">برنامه تبادل برای دکتری</h4>
			<Pre language="plaintext">Exchange Program in Oslo, Norway</Pre>
		</>
	);
}
