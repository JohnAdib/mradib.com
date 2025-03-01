import { Card } from "@/components/card";
import { Section } from "@/components/section";
import { SimpleLayout } from "@/components/simple-layout";
import tools from "./tools.json";

function ToolsSection({
	children,
	...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
	return (
		<Section {...props}>
			<ul className="space-y-16" data-testid="tools-section-list">
				{children}
			</ul>
		</Section>
	);
}

interface IToolCategory {
	category: string;
	items: ITool[];
}

interface ITool {
	title: string;
	href?: string;
	description: string;
	properties?: {
		key: string;
		value: string;
	}[];
	priceGBP?: number;
	compareAtPriceGBP?: number;
	datetime?: string;
	returned?: boolean;
}

function Tool({
	title,
	href,
	children,
	properties,
	priceGBP,
	compareAtPriceGBP,
	datetime,
	returned,
}: {
	title: string;
	href?: string;
	children: React.ReactNode;
	properties?: {
		key: string;
		value: string;
	}[];
	priceGBP?: number;
	compareAtPriceGBP?: number;
	datetime?: string;
	returned?: boolean;
}) {
	return (
		<Card as="li" returned={returned}>
			<div className="flex gap-2 items-center w-full">
				<div className="grow">
					<Card.Title as="h3" href={href}>
						{title}
					</Card.Title>
				</div>
				<Card.Price
					priceGBP={priceGBP}
					compareAtPriceGBP={compareAtPriceGBP}
					datetime={datetime}
				/>
			</div>
			<Card.Description>{children}</Card.Description>
			<Card.Properties properties={properties} />
		</Card>
	);
}

export const metadata = {
	title: "Photography Tools I Use",
	description: "Software I use, gadgets I love, and other things I recommend.",
};

export default function Uses() {
	const myTools = tools as unknown as IToolCategory[];
	// total price except returned items
	const totalPriceGBP = myTools.reduce((acc, tool) => {
		return (
			acc +
			tool.items.reduce((acc, item) => {
				if (item?.returned) {
					return acc;
				}
				return acc + (item?.priceGBP ?? 0);
			}, 0)
		);
	}, 0);

	const totalPriceGBPWith3NumbersSeparated = totalPriceGBP.toLocaleString(
		"en-GB",
		{
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		},
	);

	return (
		<SimpleLayout
			title={"Photography Tools I Use"}
			intro={`Explore the tools that help me capture and create stunning photographs. I've spent £${totalPriceGBPWith3NumbersSeparated} on these!`}
		>
			<div className="space-y-20" data-testid="tools-section">
				{myTools.map((tool) => (
					<ToolsSection key={tool.category} title={tool.category}>
						{tool.items.map((item) => (
							<Tool key={item.title} {...item}>
								{item.description}
							</Tool>
						))}
					</ToolsSection>
				))}
			</div>
		</SimpleLayout>
	);
}
