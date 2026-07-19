import type { Metadata } from "next";

import { SimpleLayout } from "@/components/simple-layout";
import { ogMetadata } from "@/lib/og-metadata";

export const metadata: Metadata = {
	title: "آموزش کاورلتر",
	description:
		"آموزش رایگان نوشتن کاورلتر حرفه‌ای به زبان فارسی، قدم به قدم. بزودی در همین صفحه.",
	...ogMetadata("/fa/cover-letter"),
};

export default function MyPage() {
	return (
		<SimpleLayout
			title={metadata.title as string}
			intro={metadata.description as string}
		/>
	);
}
