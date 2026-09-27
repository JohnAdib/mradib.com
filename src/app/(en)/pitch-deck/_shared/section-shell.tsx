import type { ReactNode } from "react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal/reveal";

interface ISectionShellProps {
	/** One word, unique on the page. Also the deep-link anchor. */
	id: string;
	/** Wrap the whole part in a scroll reveal. Off for parts that reveal their own children. */
	reveal?: boolean;
	children: ReactNode;
}

/** One page part: the anchor, the sticky-header offset, and the page rhythm. */
export function SectionShell({
	id,
	reveal = true,
	children,
}: ISectionShellProps) {
	const body = reveal ? <Reveal>{children}</Reveal> : children;
	return (
		<section id={id} className="scroll-mt-24">
			<Container className="mt-16 sm:mt-24">{body}</Container>
		</section>
	);
}
