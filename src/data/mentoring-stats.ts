import { urlSocial } from "@/lib/constants/url-social";

export interface IMentoringStats {
	sessions: number;
	minutes: number;
	since: string;
	asOfDate: string;
	/** Human readable form of asOfDate, rendered verbatim in prose and llms.txt. */
	statsAsOf: string;
	profileUrl: string;
}

export const mentoringStats: IMentoringStats = {
	sessions: 600,
	minutes: 10000,
	since: "2024-06",
	asOfDate: "2026-07",
	statsAsOf: "July 2026",
	profileUrl: urlSocial.adpList,
};
