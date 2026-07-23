import { CtaOnDarkPanel } from "@/components/cta-on-dark-panel/cta-on-dark-panel";
import { pageClosings } from "@/data/page-closings";

export function AuditClosing() {
	return <CtaOnDarkPanel {...pageClosings.audit} />;
}
