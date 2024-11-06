/* eslint-disable react/no-unescaped-entities */
import { Card } from "@/components/card";
import { Section } from "@/components/section";
import { SimpleLayout } from "@/components/simple-layout";

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

function Tool({
  title,
  href,
  children,
}: {
  title: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
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
      <div className="space-y-20">
        <ToolsSection title="Camera">
          <Tool
            title="Canon EOS R8"
            href="https://www.canon.co.uk/cameras/eos-r8/"
          >
            A lightweight, travel-friendly, full-frame camera body, the Canon
            EOS R8 Mirrorless Camera offers powerful photo and video
            capabilities for both photographers and multimedia content creators.
            Utilising a newly developed sensor, the R8 features a 24.2MP CMOS
            sensor paired with a DIGIC X processor. Together, this combination
            provides outstanding stills performance, impressive 4K 60p 10-bit
            video, and fast auto focus. A perfect choice for low-light portrait
            photography and wide, expansive landscapes.
          </Tool>
          <Tool
            title="Canon RF 24-240mm F4-6.3 IS USM"
            href="https://www.canon.co.uk/lenses/rf-24-240mm-f4-6-3-is-usm/"
          >
            A portable, versatile 10x zoom lens for the EOS R system that’s
            ideal for everything from wide-angle landscapes to frame-filling
            portraits, and even close-up sport and wildlife. At just 750g, it's
            ideal for the travelling photographer. Built-in Image Stabilizer
            technology allows for hand-held shooting at shutter speeds up to 5
            stops. Shoot everything with a single lens, from big landscapes to
            powerful portraits and frame-filling action shots.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Printer">
          <Tool
            title="Canon Zoemini 2"
            href="https://www.canon.co.uk/printers/zoemini-2/"
          >
            Pocket-sized, ink-free and ready to print your photos anytime,
            anywhere – it’s the perfect partner for your smartphone. Ink-free,
            wireless and small enough to slip in your pocket, Canon Zoemini 2 is
            the rechargeable photo printer that’s always with you when you need
            it. Snap and personalise photos on your mobile device, then get
            instant peel-and-stick prints. Wherever you are, this pocket-sized
            printer turns your smartphone snaps into beautiful photos.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Video">
          <Tool
            title="Insta360 GO 3S"
            href="https://www.insta360.com/product/insta360-go3s"
          >
            Tiny 4K camera for hands-free POV & Action Pod for remote control &
            live preview. Small camera, huge potential. Go completely hands-free
            and live in the moment! Set it and forget about it for easy,
            ultra-wide POV shots.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Power Bank">
          <Tool
            title="Anker Prime 27,650mAh Power Bank (250W)"
            href="https://www.anker.com/uk/products/a1340-250w-power-bank"
          >
            The power bank combines ultra-compact dynamic power, maximum
            charging speed for every port, the advanced ActiveShield™ 2.0
            safety system, unparalleled compatibility, and Power Delivery 3.1
            technology, ensuring efficient and secure charging for all your
            devices. Powered by the latest PD 3.1 technology, the power bank
            comes with 2 USB-C ports and 1 USB-A port to deliver up to 250W of
            power. The power bank is the size of a soda can with a capacity of
            27,650mAh and can charge an iPhone 15 approximately 4 times. This
            power bank is 99.54Wh, which meets the requirements of the TSA (less
            than 100Wh) to be taken on airplanes as carry-on baggage.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  );
}
