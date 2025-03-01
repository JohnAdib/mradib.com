interface IMsgSeverityColors {
	bg: string;
	icon: string;
	heading: string;
	text: string;
}

export function getMsgSeverityColor(severity: string): IMsgSeverityColors {
	switch (severity) {
		case "success":
			return {
				bg: "bg-green-50",
				icon: "text-green-500",
				heading: "text-green-800",
				text: "text-green-700",
			};

		case "warning":
			return {
				bg: "bg-yellow-50",
				icon: "text-yellow-500",
				heading: "text-yellow-800",
				text: "text-yellow-700",
			};

		case "error":
			return {
				bg: "bg-red-50",
				icon: "text-red-500",
				heading: "text-red-800",
				text: "text-red-700",
			};
		default:
			return {
				bg: "bg-blue-50",
				icon: "text-blue-500",
				heading: "text-blue-800",
				text: "text-blue-700",
			};
	}
}
