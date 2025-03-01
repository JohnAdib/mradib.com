import { type Metadata } from "next";

import { SimpleLayout } from "@/components/simple-layout";

export const metadata: Metadata = {
	title: "Contact",
	description: "Get in touch with John Adib",
};

export default function Page() {
	return <SimpleLayout title="Contact" intro="Get in touch with John Adib." />;
}
