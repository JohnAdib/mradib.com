import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaOnDarkPanel } from "@/components/cta-on-dark-panel/cta-on-dark-panel";
import { pageAlternates } from "@/lib/i18n/page-alternates";
import { ogMetadata } from "@/lib/og-metadata";

export const metadata: Metadata = {
	alternates: pageAlternates("/fa"),
	...ogMetadata("/fa"),
};

export default function Home() {
	return (
		<Container>
			<CtaOnDarkPanel
				title="جامع‌ترین آموزش رایگان ساخت رزومه در کهکشان"
				desc="صفر تا صد ساخت رزومه ایده‌آل خودت رو رایگان یاد بگیر. یک رزومه حرفه‌ای می‌تونه کلید موفقیتت باشه"
				linkPrimaryText="آموزش ساخت رزومه"
				linkPrimaryLink="/fa/resume"
			/>
		</Container>
	);
}
