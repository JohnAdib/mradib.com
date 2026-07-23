import type { JSX } from "react";
import { Pre } from "@/components/syntax-highlighter/pre";

export function EducationFields(): JSX.Element {
	return (
		<>
			<h3 id="degree">
				<a href="#degree" className="no-underline text-inherit hover:underline">
					عنوان مدرک تحصیلی
				</a>
			</h3>
			<Pre language="plaintext">B.S. in Computer Software Engineering</Pre>

			<h3 id="university">
				<a
					href="#university"
					className="no-underline text-inherit hover:underline"
				>
					اسم دانشگاه یا موسسه آموزشی
				</a>
			</h3>
			<Pre language="plaintext">Azad University</Pre>

			<h3 id="graduation">
				<a
					href="#graduation"
					className="no-underline text-inherit hover:underline"
				>
					سال‌های حضور یا سال فارغ‌التحصیلی یا پیش‌بینی اتمام
				</a>
			</h3>
			<Pre language="plaintext">2008 - 2012</Pre>
			<p>
				اگه بازه تحصیلی بیش از حد معمول طول کشیده یا مایل به ارائه جزئیات نیستید
				می‌تونید فقط سال فارغ‌التحصیلی رو ذکر کنید. مثلا
			</p>
			<Pre language="plaintext">2014</Pre>
			<p>
				وقتی هنوز فارغ‌التحصیل نشدی و انتظار داری تا یه زمان خاص دانشگاه تموم
				بشه. مثلا
			</p>
			<Pre language="plaintext">Expected in 2025</Pre>
		</>
	);
}
