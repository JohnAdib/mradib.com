"use client";

import { useEffect, useState } from "react";
import { buildEmail, buildMailto, type EmailTag } from "./email-address";

/*
  Obfuscated mailto link. The href and the visible address only exist
  after hydration, so the static HTML never contains the email. Pass
  children to keep custom content (icon rows, tiles); omit children to
  render the address itself as the link text.
*/
export function EmailLink({
	tag,
	subject,
	className,
	children,
	id,
}: {
	tag?: EmailTag;
	subject?: string;
	className?: string;
	children?: React.ReactNode;
	id?: string;
}) {
	const [ready, setReady] = useState(false);
	useEffect(() => setReady(true), []);

	// The href carries the plus-tag for tracing; the visible address stays clean.
	const href = ready ? buildMailto(tag, subject) : undefined;
	const address = ready ? buildEmail() : null;
	const [local, host] = address ? address.split("@") : [null, null];

	return (
		<a href={href} id={id} className={className}>
			{children ??
				(local ? (
					<>
						{local}@<wbr />
						{host}
					</>
				) : (
					" "
				))}
		</a>
	);
}
