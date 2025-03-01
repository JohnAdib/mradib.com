import { BookMentorshipSession } from "@/components/sections/book-mentorship-session";
import { FeatureWithFullWidthImage } from "@/components/sections/feature-with-full-width-image";
import {
	CommandLineIcon,
	DocumentCheckIcon,
	GlobeEuropeAfricaIcon,
} from "@heroicons/react/20/solid";
import type { Metadata } from "next";
import type { ComponentType } from "react";
import imgMradibMentoring from "./_img/mradib-mentoring.png";

interface ISectionFeature {
	name: string;
	description: string;
	icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
}

export const metadata: Metadata = {
	title: "منتورشیپ با آقای ادیب",
	description:
		"تعداد محدودی جلسه رایگان برای کمک به شما برای پیشرفت در حرفه تکنولوژی. همین امروز یک جلسه رزرو کن!",
	twitter: {
		card: "summary_large_image",
	},
};

export default function Page() {
	const featuresList: ISectionFeature[] = [
		{
			name: "مهندسی نرم‌افزار",
			description:
				"راهنمایی در مورد بهترین روش‌ها، تکنیک‌های کدنویسی و رشد حرفه‌ای در مهندسی نرم‌افزار.",
			icon: CommandLineIcon as ComponentType<{
				className?: string;
				"aria-hidden"?: boolean;
			}>,
		},
		{
			name: "بررسی رزومه",
			description:
				"بررسی رایگان رزومه شما برای ارتقای رزومه تا بتوانید بهترین انتخاب برای کارفرمایان باشید.",
			icon: DocumentCheckIcon as ComponentType<{
				className?: string;
				"aria-hidden"?: boolean;
			}>,
		},
		{
			name: "مهاجرت موفقیت‌آمیز در تکنولوژی",
			description:
				"مشاوره رایگان در مورد مهاجرت به کشورهای تکنولوژی‌محور بر اساس تجربه شخصی.",
			icon: GlobeEuropeAfricaIcon as ComponentType<{
				className?: string;
				"aria-hidden"?: boolean;
			}>,
		},
	];

	return (
		<>
			<FeatureWithFullWidthImage
				subTitle="میخوای در حرفه خودت پیشرفت کنی؟"
				title="منتورشیپ با مستر ادیب"
				image={imgMradibMentoring}
				features={featuresList}
			>
				سلام. من جان ادیب هستم، مهندس نرم‌افزار اصلی با علاقه‌ای به کمک به دیگران
				برای موفقیت. اکه دنبال افزایش مهارت‌های مهندسی نرم‌افزارت هستی، اگه می‌خوای
				رزومه‌ات رو بهتر کنی، اگه می‌خوای برای مصاحبه کاری آماده‌تر باشی، اگه
				میخوای در مهاجرت به کشورهای تکنولوژی‌محور راهنمایی بگیری، میتونم کمکت
				کنم. <b>رایگان!</b>
			</FeatureWithFullWidthImage>

			<BookMentorshipSession
				subTitle="آماده برای شروع مسیر پیشرفت خودت هستی؟"
				title="رزرو جلسه رایگان با من!"
				linkText="در ADPList ثبت‌نام کنید"
				linkDesc="و همین الان یک جلسه 1:1 رایگان با من رزرو کنید!"
			/>
		</>
	);
}
