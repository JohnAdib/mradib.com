import { redirect } from "next/navigation";
import { urlSocial } from "@/lib/constants/url-social";

export default async function Home() {
	redirect(urlSocial.tiktok);
}
