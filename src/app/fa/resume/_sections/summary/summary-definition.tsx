import type { JSX } from "react";
import { Pre } from "@/components/syntax-highlighter/pre";

export function SummaryDefinition(): JSX.Element {
	return (
		<>
			<h3 id="definition">خلاصه رزومه چیست و چه زمانی باید استفاده شود؟</h3>
			<p>
				خلاصه معمولا بین ۲ تا ۳ جمله درباره شغل شماست. توصیه میشه که از خلاصه
				رزومه استفاده کنید هر چند اجباری نیست.
			</p>
			<p>در بخش خلاصه رزومه بهتره به سه مورد زیر اشاره کنید.</p>
			<ol>
				<li>
					<span>شغل فعلی و تعداد سال‌های تجربه</span>
					<Pre language="plaintext">
						Customer support representative with 5+ years of experience in the
						IT industry.
					</Pre>
				</li>
				<li>
					<span>یک یا دو دستاورد یا مسئولیت اصلی که داشته‌اید</span>
					<Pre language="plaintext">
						Specialized in technical support, customer care, and user retention.
					</Pre>
				</li>
				<li>
					<span>اشتیاق یا هدف موردانتظار از کار کردن</span>
					<Pre language="plaintext">
						Looking for new opportunities as a support lead for a SaaS company.
					</Pre>
				</li>
			</ol>
		</>
	);
}
