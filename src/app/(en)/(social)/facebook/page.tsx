import { RedirectPage } from "@/components/redirect-page";
import { urlSocial } from "@/lib/constants/url-social";
import { redirectMetadata } from "@/lib/redirect-metadata";

export const metadata = redirectMetadata(urlSocial.facebook);

export default function Home() {
	return <RedirectPage target={urlSocial.facebook} />;
}
