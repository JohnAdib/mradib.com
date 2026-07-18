import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { AwardBadge } from "@/components/award/award-badge";
import { AwardContent } from "@/components/award/award-content";
import { BreadcrumbJsonLD } from "@/components/breadcrumb/breadcrumb-json-ld";
import { Container } from "@/components/container";
import { LightboxProvider } from "@/components/image-lightbox";
import type { IAward } from "@/data/awards";

export function AwardLayout({
	award,
	children,
}: {
	award: IAward;
	children: React.ReactNode;
}) {
	const breadcrumb = [
		{ position: 1, name: "Home", item: "/", current: false },
		{ position: 2, name: "Awards", item: "/awards", current: false },
		{
			position: 3,
			name: award.name,
			item: `/awards/${award.slug}`,
			current: true,
		},
	];
	const hasImages = (award.badgeImages?.length ?? 0) > 0;

	return (
		<Container className="mt-16 sm:mt-24">
			<BreadcrumbJsonLD list={breadcrumb} />
			<LightboxProvider>
				<div className={hasImages ? "mx-auto max-w-5xl" : "mx-auto max-w-2xl"}>
					<Link
						href="/awards"
						className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-accent-700 dark:text-zinc-400 dark:hover:text-accent-400"
					>
						<ArrowLeftIcon className="h-4 w-4" />
						Back to awards
					</Link>
					<div
						className={
							hasImages
								? "mt-8 lg:grid lg:grid-cols-[280px_1fr] lg:gap-12"
								: "mt-8"
						}
					>
						{hasImages && (
							<div className="mx-auto max-w-sm lg:sticky lg:top-24 lg:mx-0 lg:max-w-none lg:self-start">
								<AwardBadge award={award} />
							</div>
						)}
						<div
							className={
								hasImages ? "mt-8 min-w-0 max-w-2xl lg:mt-0" : undefined
							}
						>
							<AwardContent award={award}>{children}</AwardContent>
						</div>
					</div>
				</div>
			</LightboxProvider>
		</Container>
	);
}
