"use client";

import { CopyButton } from "@/components/copy-button";
import { buildEmail } from "./email-address";

/*
  Copies the plus-tagged variant of the address, so John can trace which
  copies of his email were harvested from the copy button.
*/
export function CopyEmailButton({
	iconOnly,
	className,
}: {
	iconOnly?: boolean;
	className?: string;
}) {
	return (
		<CopyButton
			iconOnly={iconOnly}
			className={className}
			text={buildEmail("copy")}
			label="Copy email address"
			copiedLabel="Copied"
		/>
	);
}
