import type { Metadata } from "next";

import { SimpleLayout } from "@/components/simple-layout";

export const metadata: Metadata = {
	title: "اکسل",
	description: "آموزش رایگان اکسل بزودی در این صفحه قرار خواهد گرفت.",
};

export default function MyPage() {
	return (
		<SimpleLayout
			title={metadata.title as string}
			intro={metadata.description as string}
		/>
	);
}
