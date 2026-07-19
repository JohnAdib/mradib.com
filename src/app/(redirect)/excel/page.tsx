import { RedirectPage } from "@/components/redirect-page";
import { redirectMetadata } from "@/lib/redirect-metadata";

const target = "/fa/excel";

export const metadata = redirectMetadata(target);

export default function Home() {
	return <RedirectPage target={target} />;
}
