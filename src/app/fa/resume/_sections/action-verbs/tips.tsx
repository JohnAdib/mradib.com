import type { JSX } from "react";
import { Msg } from "@/components/msg/msg";

export function ActionVerbsTips(): JSX.Element {
	return (
		<>
			<Msg severity="info">
				توصیه میکنم این صفحه رو جایی ذخیره کنید چون برای هر دستاورد در رزومه
				خودتون نیاز به فعل متفاوتی دارید.
			</Msg>
			<Msg severity="error">
				میدونم سخته ولی از هر فعل بیشتر از دوبار در کل رزومه استفاده نکنید!
			</Msg>
		</>
	);
}
