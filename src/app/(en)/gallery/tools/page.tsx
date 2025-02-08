/* eslint-disable react/no-unescaped-entities */
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
      <ul role="list" className="space-y-16" data-testid="tools-section-list">
        {children}
      </ul>
    </Section>
  );
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
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
      <Card.Properties properties={properties} />
      <Card.Price
        priceGBP={priceGBP}
        compareAtPriceGBP={compareAtPriceGBP}
        datetime={datetime}
      />
    </Card>
  );
}

export const metadata = {
  title: "Photography Tools I Use",
  description: "Software I use, gadgets I love, and other things I recommend.",
};

export default function Uses() {
  return (
    <SimpleLayout
      title="Photography Tools I Use"
      intro="Explore the tools that help me capture and create stunning photographs."
    >
      <div className="space-y-20" data-testid="tools-section">
        {tools.map((tool) => (
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
