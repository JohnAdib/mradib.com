import type { Metadata } from "next";

import { SimpleLayout } from "@/components/simple-layout";
import { ogMetadata } from "@/lib/og-metadata";

export const metadata: Metadata = {
	title: "آموزش ورد",
	description:
		"آموزش رایگان ورد به زبان ساده فارسی، از تایپ تا صفحه‌آرایی حرفه‌ای. بزودی در همین صفحه.",
	...ogMetadata("/fa/word"),
};

export default function MyPage() {
	return (
		<SimpleLayout
			title={metadata.title as string}
			intro={metadata.description as string}
		/>
	);
}
