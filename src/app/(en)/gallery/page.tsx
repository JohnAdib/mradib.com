import type { Metadata } from "next";
import Link from "next/link";
import { SimpleLayout } from "@/components/simple-layout";
import { urlSocial } from "@/lib/constants/url-social";

export const metadata: Metadata = {
	title: "Gallery",
	description:
		"Photography by John Adib — an off-hours passion, not a profession. Portraits and landscapes, mostly from London.",
};

export default function Page() {
	const linkClass =
		"font-medium text-accent-700 transition hover:text-accent-600 dark:text-accent-400";

	return (
		<SimpleLayout
			title="Photography"
			intro="An off-hours passion, not a profession. I've photographed less since my daughters decided my weekends belong to them — fair — but the camera still comes along."
		>
			<div className="max-w-2xl space-y-6 text-base text-zinc-600 dark:text-zinc-400">
				<p>
					A curated selection is coming to this page. Until then, the freshest
					frames live on{" "}
					<a
						href={urlSocial.instagram}
						target="_blank"
						rel="noopener noreferrer"
						className={linkClass}
					>
						Instagram
					</a>
					.
				</p>
				<p>
					Curious what's in the bag? Here's{" "}
					<Link href="/gallery/tools" className={linkClass}>
						my photography kit
					</Link>
					.
				</p>
			</div>
		</SimpleLayout>
	);
}
