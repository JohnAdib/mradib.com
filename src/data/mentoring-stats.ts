import { urlSocial } from "@/lib/constants/url-social";

export interface IMentoringStats {
	sessions: number;
	minutes: number;
	since: string;
	asOfDate: string;
	profileUrl: string;
}

export const mentoringStats: IMentoringStats = {
	sessions: 600,
	minutes: 10000,
	since: "2024-06",
	asOfDate: "2026-07",
	profileUrl: urlSocial.adpList,
};
