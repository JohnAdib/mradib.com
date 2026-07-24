import type { IAuditOffer } from "./audit-interface";

// The intro-call booking link. Every CTA on the page points here, and there
// are no payment links anywhere on the page.
export const BOOKING_URL = "https://calendly.com/mradib/call";

export const auditOffer: IAuditOffer = {
	name: "AI Engineering Readiness Audit",
	priceNote: "Fixed price. Two weeks. Fully remote.",
	buyer: "CTOs and VPs of Engineering",
	teamSize: "20 to 150 engineers",
	included: [
		"A readiness scorecard across 7 dimensions",
		"A written report with the evidence behind each score",
		"A prioritised 90-day roadmap",
		"A 60-minute executive readout, remote and recorded",
	],
	guarantee:
		"The guarantee: if you reach the readout and don't believe the audit was worth the fee, tell me within 7 days and I'll refund it in full. I'd rather refund a fee than leave a team with a report they cannot use.",
	paperworkLine:
		"A mutual NDA and a one-page SOW, both e-signed. 50% on booking, 50% on delivery.",
	addOnsLine:
		"Optional add-ons: an on-site executive presentation, or a follow-on advisory retainer. Ask on the call.",
};
