import { urlSocial } from "@/lib/constants/url-social";
import { redirect } from "next/navigation";

export default async function Home() {
	redirect(urlSocial.facebook);
}
