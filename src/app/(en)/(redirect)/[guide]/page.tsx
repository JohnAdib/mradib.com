import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RedirectPage } from "@/components/redirect-page";
import { movedGuideParams, movedGuideTarget } from "@/lib/guides/moved-routes";
import { redirectMetadata } from "@/lib/redirect-metadata";

interface IMovedGuideProps {
	params: Promise<{ guide: string }>;
}

// One stub per guide that moved under the hub, driven by
// src/data/routes/moved-routes.ts. Unknown slugs never build.
export const dynamicParams = false;

export function generateStaticParams() {
	return movedGuideParams();
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
	return redirectMetadata(await targetOf(props));
}

export default async function Page(props: IMovedGuideProps) {
	return <RedirectPage target={await targetOf(props)} />;
}
