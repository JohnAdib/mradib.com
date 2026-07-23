import Image from "next/image";
import type { JSX } from "react";
import imgResumeOptionalHobbies from "./_img/resume-optional-hobbies.png";

export function OptionalHobbies(): JSX.Element {
	return (
		<>
			<h3 id="hobbies">سرگرمی و علایق</h3>
			<p>
				ادویه دوست دارین؟ این بخش با اینکه نمی‌تونه خیلی خاص باشه ولی در عین حال
				می‌تونه به شما کمک کنه که شخصیت خودتون رو نمایش بدید. شاید استخدام‌کننده
				یک سرگرمی مشترک با شما داشته باشه و بخاطر همین از شما خوشش بیاد! اگه توی
				رزومه خودتون هنوز جای خالی دارید، توصیه میشه از این بخش دریغ نکنید.
			</p>

			<figure>
				<Image
					src={imgResumeOptionalHobbies}
					alt="جای خالی را با سرگرمی‌ها و علایق پر کنید!"
				/>
				<figcaption>جای خالی را با سرگرمی‌ها و علایق پر کنید!</figcaption>
			</figure>
		</>
	);
}
