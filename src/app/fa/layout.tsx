import { Layout } from "@/components/layout";
import { rootMetadataFa } from "@/lib/root-metadata-fa";
import "@/styles/tailwind.css";

export const metadata = rootMetadataFa;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex w-full" dir="rtl" lang="fa">
			<Layout>{children}</Layout>
		</div>
	);
}
