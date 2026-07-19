import type { Metadata } from "next";

import { SimpleLayout } from "@/components/simple-layout";
import { ogMetadata } from "@/lib/og-metadata";

export const metadata: Metadata = {
	title: "آموزش اکسل",
	description:
		"آموزش رایگان اکسل به زبان ساده فارسی، از پایه تا حرفه‌ای. بزودی در همین صفحه.",
	...ogMetadata("/fa/excel"),
};

export default function MyPage() {
	return (
		<SimpleLayout
			title={metadata.title as string}
			intro={metadata.description as string}
		/>
	);
}
