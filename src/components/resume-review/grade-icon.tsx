import {
	CheckCircleIcon,
	ExclamationCircleIcon,
	ExclamationTriangleIcon,
	MinusCircleIcon,
} from "@heroicons/react/24/solid";

/** The crafted icon for each grade: needs work, problem, N/A, good. */
export function GradeIcon({
	code,
	className,
}: {
	code: number;
	className: string;
}) {
	if (code === 1) {
		return <ExclamationCircleIcon className={className} />;
	}
	if (code === 2) {
		return <ExclamationTriangleIcon className={className} />;
	}
	if (code === 4) {
		return <MinusCircleIcon className={className} />;
	}
	return <CheckCircleIcon className={className} />;
}
