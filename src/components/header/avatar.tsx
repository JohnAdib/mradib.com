import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export function AvatarContainer({
	className,
	...props
}: React.ComponentPropsWithoutRef<"div">) {
	return (
		<div
			className={clsx(
				className,
				"h-10 w-10 rounded-full bg-surface/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10",
			)}
			{...props}
		/>
	);
}

export function Avatar({
	className,
	...props
}: Omit<React.ComponentPropsWithoutRef<typeof Link>, "href">) {
	return (
		<Link
			href="/"
			aria-label="Home"
			className={clsx(className, "pointer-events-auto")}
			{...props}
		>
			<Image
				src="/img/john-adib-avatar-108.jpg"
				alt="MrAdib"
				width={108}
				height={108}
				className="h-9 w-9 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
			/>
		</Link>
	);
}
