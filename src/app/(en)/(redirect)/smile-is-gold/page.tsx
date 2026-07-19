import { RedirectPage } from "@/components/redirect-page";
import { urlStatic } from "@/lib/constants/url-static";
import { redirectMetadata } from "@/lib/redirect-metadata";

export const metadata = redirectMetadata(urlStatic.gallery);

export default function Home() {
	return <RedirectPage target={urlStatic.gallery} />;
}
