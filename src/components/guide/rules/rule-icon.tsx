import {
	ArrowPathIcon,
	ArrowTrendingUpIcon,
	BuildingStorefrontIcon,
	ChatBubbleLeftRightIcon,
	ClockIcon,
	CloudIcon,
	CubeIcon,
	EnvelopeIcon,
	FlagIcon,
	GlobeAltIcon,
	MapIcon,
	PresentationChartBarIcon,
	UserGroupIcon,
	UserIcon,
	UsersIcon,
	VideoCameraIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType } from "react";
import type { GuideRuleIcon } from "@/data/guides/guide-interface";

type IconType = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

const icons: Record<GuideRuleIcon, IconType> = {
	trend: ArrowTrendingUpIcon as IconType,
	team: UserGroupIcon as IconType,
	clock: ClockIcon as IconType,
	mail: EnvelopeIcon as IconType,
	video: VideoCameraIcon as IconType,
	users: UsersIcon as IconType,
	stage: PresentationChartBarIcon as IconType,
	user: UserIcon as IconType,
	globe: GlobeAltIcon as IconType,
	chat: ChatBubbleLeftRightIcon as IconType,
	flag: FlagIcon as IconType,
	cloud: CloudIcon as IconType,
	shop: BuildingStorefrontIcon as IconType,
	cube: CubeIcon as IconType,
	refresh: ArrowPathIcon as IconType,
	map: MapIcon as IconType,
};

/** The heroicon behind a rule's icon key. Data names the key, this file the glyph. */
export function RuleIcon({
	icon,
	className,
}: {
	icon: GuideRuleIcon;
	className?: string;
}) {
	const Icon = icons[icon];
	return <Icon aria-hidden={true} className={className} />;
}
