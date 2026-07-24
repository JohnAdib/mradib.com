"use client";

import { Button } from "@/components/button";
import { BOOKING_URL } from "@/data/audit";
import { trackEvent } from "@/lib/analytics/track-event";

export function AuditCtaButton({
	location,
	children,
}: {
	location: "hero" | "pricing";
	children: React.ReactNode;
}) {
	return (
		<Button
			href={BOOKING_URL}
			target="_blank"
			rel="noopener noreferrer"
			onClick={() => trackEvent("audit_cta_click", { location })}
		>
			{children}
		</Button>
	);
}
