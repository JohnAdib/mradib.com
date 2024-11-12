import Link from "next/link";

import { ContainerInner, ContainerOuter } from "@/components/container";

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
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
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
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-stone-600 dark:text-stone-400">
                <NavLink href="/">Homepage</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/articles">Articles</NavLink>
                <NavLink href="/mentor">Mentorship</NavLink>
                <NavLink href="/fa">فارسی</NavLink>
              </div>
              <div
                dir="ltr"
                className="flex gap-1 text-sm text-stone-600 dark:text-stone-400"
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
