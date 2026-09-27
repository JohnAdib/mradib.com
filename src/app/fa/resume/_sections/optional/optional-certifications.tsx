import type { JSX } from "react";
export function OptionalCertifications(): JSX.Element {
	return (
		<>
			<h3 id="certifications">
				<a
					href="#certifications"
					className="no-underline text-inherit hover:underline"
				>
					گواهی‌نامه‌ها و جوایز
				</a>
			</h3>
			<p>
				آیا شما جایزه‌ای دارید که شما رو تو زمینه کاری منحصربه‌فرد می‌کنه؟ یا
				گواهی‌نامه‌ای دارید که تخصص شما رو نشون می‌ده؟ اگه به موقعیت شغلی که
				می‌خواین براش اقدام کنید مرتبط هست، می‌تونید اون رو به رزومه خودتون اضافه
				کنید.
			</p>
			<p>
				مثلا فرض کنیم شما یک متخصص فضای ابری هستید. داشتن گواهی‌نامه‌هایی مثل
				Azure Solutions Architect Expert می‌تونه مهارت شما رو اثبات کنه.
			</p>
		</>
	);
}
