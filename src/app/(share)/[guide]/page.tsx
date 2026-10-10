import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Layout } from "@/components/layout";
import { RedirectPage } from "@/components/redirect-page";
import SharePage, { shareMetadata } from "@/components/share/share-page";
import { movedGuideParams, movedGuideTarget } from "@/lib/guides/moved-routes";
import { redirectMetadata } from "@/lib/redirect-metadata";

interface IMovedGuideProps {
	params: Promise<{ guide: string }>;
}

// Share the root dynamic route with legacy guide redirects, avoiding competing
// dynamic routes. The contact card uses its own chrome-free root layout.
export const dynamicParams = false;

export function generateStaticParams() {
	return [...movedGuideParams(), { guide: "@" }];
}

async function targetOf({ params }: IMovedGuideProps): Promise<string> {
	const { guide } = await params;
	const target = movedGuideTarget(guide);
	if (!target) notFound();
	return target;
}

export async function generateMetadata(
	props: IMovedGuideProps,
): Promise<Metadata> {
	if (decodeURIComponent((await props.params).guide) === "@")
		return shareMetadata;
	return redirectMetadata(await targetOf(props));
}

export default async function Page(props: IMovedGuideProps) {
	if (decodeURIComponent((await props.params).guide) === "@")
		return <SharePage />;
	return (
		<div className="flex w-full">
			<Layout>
				<RedirectPage target={await targetOf(props)} />
			</Layout>
		</div>
	);
}
