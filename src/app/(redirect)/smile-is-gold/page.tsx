import { urlStatic } from "@/lib/constants/url-static";
import { redirect } from "next/navigation";

export default async function Home() {
	redirect(urlStatic.gallery);
}
