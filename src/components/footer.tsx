import Link from "next/link";

import { ContainerInner, ContainerOuter } from "@/components/container";
import { footerNav } from "@/data/navigation";

function NavLink({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<Link
			href={href}
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
				<div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
					<ContainerInner>
						<div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
							<div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
								{footerNav.map((item) => (
									<NavLink key={item.href} href={item.href}>
										{item.label}
									</NavLink>
								))}
							</div>
							<div
								dir="ltr"
								className="flex gap-1 text-sm text-zinc-600 dark:text-zinc-400"
							>
								<span>&copy;</span>
								<span>{new Date().getFullYear()}</span>
								<span>MrAdib. All rights reserved.</span>
							</div>
						</div>
					</ContainerInner>
				</div>
			</ContainerOuter>
		</footer>
	);
}
