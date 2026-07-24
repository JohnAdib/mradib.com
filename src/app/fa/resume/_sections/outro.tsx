import type { JSX } from "react";
import { SectionHeading } from "@/components/heading/section-heading";

export function SectionOutro(): JSX.Element {
	return (
		<section id="cover-letter" className="scroll-mt-24">
			<SectionHeading anchor="cover-letter">کاورلتر</SectionHeading>
			<p>
				نوشتن رزومه قدم اوله. قدم بعدی نوشتن کاورلتره، یه نامه‌ی کوتاه که انگیزه‌ت
				رو برای اون شغل به استخدام‌کننده نشون بده تا در کنار رزومه‌ت، تو رو به
				مصاحبه دعوت کنه.
			</p>
			<p>یه آموزش کامل درباره‌ی نوشتن کاورلتر به‌زودی اضافه می‌شه.</p>
		</section>
	);
}
