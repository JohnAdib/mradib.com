interface IFormatDate {
	date: string;
	time?: string;
}

export function formatDatePersian({ date, time }: IFormatDate) {
	const myTime = time ? time : "00:00:00";
	const dateAndTime = `${date}T${myTime}Z`;

	return new Date(dateAndTime).toLocaleDateString("fa-IR", {
		day: "numeric",
		month: "long",
		year: "numeric",
		timeZone: "UTC",
	});
}

export function formatDateTimePersian(datetime: string) {
	return new Date(datetime).toLocaleDateString("fa-IR", {
		day: "numeric",
		month: "long",
		year: "numeric",
		timeZone: "UTC",
	});
}
