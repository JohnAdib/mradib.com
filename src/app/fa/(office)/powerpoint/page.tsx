import type { Metadata } from "next";

import { SimpleLayout } from "@/components/simple-layout";
import { ogMetadata } from "@/lib/og-metadata";

export const metadata: Metadata = {
	title: "آموزش پاورپوینت",
	description:
		"آموزش رایگان پاورپوینت به زبان ساده فارسی، از ساخت اسلاید تا ارائه حرفه‌ای. بزودی در همین صفحه.",
	...ogMetadata("/fa/powerpoint"),
};

export default function MyPage() {
	return (
		<SimpleLayout
			title={metadata.title as string}
			intro={metadata.description as string}
		/>
	);
}
