import clsx from "clsx";
import Link from "next/link";

function ChevronRightIcon(props: React.ComponentPropsWithoutRef<"svg">) {
	return (
		<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
			<path
				d="M6.75 5.75 9.25 8l-2.5 2.25"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function Card<T extends React.ElementType = "div">({
	as,
	className,
	children,
	returned,
}: Omit<React.ComponentPropsWithoutRef<T>, "as" | "className"> & {
	as?: T;
	className?: string;
	returned?: boolean;
}) {
	const Component = as ?? "div";

	return (
		<Component
			className={clsx(
				className,
				"group relative flex flex-col items-start",
				returned && "opacity-50 line-through",
			)}
			data-testid="card"
		>
			{children}
		</Component>
	);
}

Card.Link = function CardLink({
	children,
	...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
	return (
		<>
			<div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50" />
			<Link {...props}>
				<span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
				<span className="relative z-10">{children}</span>
			</Link>
		</>
	);
};

Card.Title = function CardTitle<T extends React.ElementType = "h2">({
	as,
	href,
	children,
}: Omit<React.ComponentPropsWithoutRef<T>, "as" | "href"> & {
	as?: T;
	href?: string;
}) {
	const Component = as ?? "h2";

	return (
		<Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
			{href ? <Card.Link href={href}>{children}</Card.Link> : children}
		</Component>
	);
};

Card.Description = function CardDescription({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
			{children}
		</p>
	);
};

Card.Properties = function CardProperties({
	properties,
}: {
	properties?: {
		key: string;
		value: string;
	}[];
}) {
	if (!properties) return null;

	return (
		<div className="z-10 flex gap-2" data-testid="card-properties">
			<ul className="flex grow flex-col group gap-1 mt-2 list-inside list-[square] text-xs leading-normal text-zinc-600 dark:text-zinc-400">
				{properties?.map((property) => (
					<li key={property.key}>
						<span className="font-bold">{property.key}</span>{" "}
						<span>{property.value}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

Card.Image = function CardImage({ src, alt }: { src: string; alt: string }) {
	return <img src={src} alt={alt} className="z-10 mt-4 w-32 rounded-lg" />;
};

Card.Cta = function CardCta({ children }: { children: React.ReactNode }) {
	return (
		<div
			aria-hidden="true"
			className="relative z-10 mt-4 flex gap-1 items-center text-sm font-medium text-teal-500"
		>
			{children}
			<ChevronRightIcon className="h-4 w-4 stroke-current" />
		</div>
	);
};

Card.Price = function CardPrice({
	priceGBP,
	compareAtPriceGBP,
	datetime,
}: {
	priceGBP?: number;
	compareAtPriceGBP?: number;
	datetime?: string;
}) {
	if (!priceGBP) return null;

	const dateObj = datetime ? new Date(datetime) : undefined;
	const dateStr = dateObj ? dateObj.toLocaleDateString() : undefined;

	// convert GBP to USD
	const GBP2USD = 1.24;
	const priceUSD = priceGBP ? Math.round(priceGBP * GBP2USD) : null;
	const compareAtUSD = compareAtPriceGBP
		? Math.round(compareAtPriceGBP * GBP2USD)
		: null;

	// if user is in the UK, show pounds, otherwise show USD
	const isUK = true;
	// check location

	const priceStr = isUK ? `£${priceGBP?.toLocaleString()}` : `$${priceUSD}`;
	const compareAtPriceStr = isUK
		? `£${compareAtPriceGBP?.toLocaleString()}`
		: `$${compareAtUSD}`;

	function CompareAtPrice() {
		if (!compareAtPriceGBP) return null;
		if (compareAtPriceGBP === priceGBP) return null;
		return (
			<span className="text-zinc-400 line-through">{compareAtPriceStr}</span>
		);
	}

	return (
		<div
			aria-hidden="true"
			className="relative z-10 flex gap-1 items-center text-sm font-medium text-teal-500"
			title={dateStr}
		>
			<CompareAtPrice />
			<span className="text-zinc-400 font-bold">{priceStr}</span>
		</div>
	);
};

Card.Eyebrow = function CardEyebrow<T extends React.ElementType = "p">({
	as,
	decorate = false,
	className,
	children,
	...props
}: Omit<React.ComponentPropsWithoutRef<T>, "as" | "decorate"> & {
	as?: T;
	decorate?: boolean;
}) {
	const Component = as ?? "p";

	return (
		<Component
			className={clsx(
				className,
				"relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500",
				decorate && "pl-3.5",
			)}
			{...props}
		>
			{decorate && (
				<span
					className="absolute inset-y-0 left-0 flex items-center"
					aria-hidden="true"
				>
					<span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
				</span>
			)}
			{children}
		</Component>
	);
};
