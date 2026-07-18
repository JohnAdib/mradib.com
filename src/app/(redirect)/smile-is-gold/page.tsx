import { redirect } from "next/navigation";
import { urlStatic } from "@/lib/constants/url-static";

export default async function Home() {
	redirect(urlStatic.gallery);
}
