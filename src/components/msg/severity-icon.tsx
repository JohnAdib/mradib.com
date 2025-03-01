import {
	CheckCircleIcon,
	ExclamationTriangleIcon,
	InformationCircleIcon,
	XCircleIcon,
} from "@heroicons/react/20/solid";
import type { SeverityType } from "./msg";

interface IMsgSeverityIcon {
	severity: SeverityType;
}

export function MsgSeverityIcon({ severity }: IMsgSeverityIcon) {
	const myClassName = "h-5 w-5";

	switch (severity) {
		case "info":
			return (
				<InformationCircleIcon className={myClassName} aria-hidden="true" />
			);

		case "success":
			return <CheckCircleIcon className={myClassName} aria-hidden="true" />;

		case "warning":
			return (
				<ExclamationTriangleIcon className={myClassName} aria-hidden="true" />
			);

		case "error":
			return <XCircleIcon className={myClassName} aria-hidden="true" />;
	}
}
