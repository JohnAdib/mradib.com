import { RedirectPage } from "@/components/redirect-page";
import { redirectMetadata } from "@/lib/redirect-metadata";

export const metadata = redirectMetadata("/@");

export default function Home() {
	return <RedirectPage target={"/@"} />;
}
