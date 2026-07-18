import type { JSX } from "react";
import { Msg } from "@/components/msg/msg";

export function ActionVerbsTips(): JSX.Element {
	return (
		<>
			<Msg severity="info">
				I suggest bookmarking this page, because you will need a different verb
				for every achievement in your resume.
			</Msg>
			<Msg severity="error">
				I know it is hard, but do not use any verb more than twice across your
				whole resume!
			</Msg>
		</>
	);
}
