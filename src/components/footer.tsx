import Link from "next/link";

import { ContainerInner, ContainerOuter } from "@/components/container";
import { MailIcon } from "@/components/icon/social-icons";
import { SocialMediaLinks } from "@/components/social-media-links";
import { SocialLink } from "@/components/social-media-links/social-link";
import { faNav, footerNav } from "@/data/navigation";
import { profile } from "@/data/profile";

function NavLink({
	href,
	lang,
	dir,
	children,
}: {
	href: string;
	lang?: string;
	dir?: "ltr" | "rtl";
	children: React.ReactNode;
}) {
	return (
		<Link
			href={href}
			lang={lang}
			dir={dir}
			className="transition hover:text-accent-600 dark:hover:text-accent-400"
		>
			{children}
		</Link>
	);
}

export function Footer() {
	return (
		<footer className="mt-8 lg:mt-16 flex-none select-none">
			<ContainerOuter>
				<div className="border-t border-zinc-900/10 pb-16 pt-10 dark:border-zinc-700/40">
					<ContainerInner>
						<div className="flex flex-col items-center gap-8">
							<div className="flex items-center gap-1">
								<SocialMediaLinks />
								<SocialLink
									href={`mailto:${profile.email}`}
									ariaLabel="Send an email to John Adib"
									icon={MailIcon}
								>
									Email
								</SocialLink>
							</div>
							<div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
								<div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
									{footerNav.map((item) => (
										<NavLink key={item.href} href={item.href}>
											{item.label}
										</NavLink>
									))}
									<NavLink href={faNav.href} lang={faNav.lang} dir={faNav.dir}>
										{faNav.label}
									</NavLink>
								</div>
								<div
									dir="ltr"
									className="flex gap-1 text-sm text-zinc-600 dark:text-zinc-400"
								>
									<span>&copy;</span>
									<span>{new Date().getFullYear()}</span>
									<span>{profile.brand}. All rights reserved.</span>
								</div>
							</div>
						</div>
					</ContainerInner>
				</div>
			</ContainerOuter>
		</footer>
	);
}
