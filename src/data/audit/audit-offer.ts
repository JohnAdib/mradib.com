import type { IAuditOffer } from "./audit-interface";

// The one placeholder John fills before launch: the intro-call booking link,
// Calendly or Cal.com. Every CTA on the page points here. No payment links.
export const BOOKING_URL = "[BOOKING_URL]";

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
		"The guarantee: if you reach the readout and don't believe the audit was worth the fee, tell me within 7 days and I'll refund it in full. I'd rather refund a fee than have a client who regrets hiring me.",
	paperworkLine:
		"A mutual NDA and a one-page SOW, both e-signed. 50% on booking, 50% on delivery.",
	addOnsLine:
		"Optional add-ons: an on-site executive presentation, or a follow-on advisory retainer. Ask on the call.",
};
