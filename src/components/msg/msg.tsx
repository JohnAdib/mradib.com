import clsx from "clsx";
import { getMsgSeverityColor } from "./severity-colors";
import { MsgSeverityIcon } from "./severity-icon";

export type SeverityType = "info" | "success" | "warning" | "error";
type SizeType = "xs" | "sm" | "md" | "lg";

interface IMsg {
  title?: string;
  severity?: SeverityType;
  children: React.ReactNode;
  size?: SizeType;
}

function MsgTitle({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element | null {
  if (!children) {
    return null;
  }
  return <h3 className="text-sm font-medium">{children}</h3>;
}

export function Msg({
  title,
  severity = "info",
  size = "md",
  children,
}: IMsg): JSX.Element | null {
  if (!children) {
    return null;
  }

  const colors = getMsgSeverityColor(severity);

  return (
    <div
      className={clsx(
        size === "xs" && "p-1",
        size === "sm" && "p-2",
        size === "md" && "p-4",
        size === "lg" && "p-6",

        "rounded-md",
        "flex gap-3",
        "items-center",
        colors.bg,

        size === "xs" && "mt-1 mb-1",
        size === "sm" && "mt-2 mb-2",
        size === "md" && "mt-6 mb-4",
        size === "lg" && "mt-8 mb-6",
        "select-none",
      )}
    >
      <div className={colors.icon}>
        <MsgSeverityIcon severity={severity} />
      </div>
      <div className={clsx("flex flex-col", "gap-2", colors.text)}>
        <MsgTitle>{title}</MsgTitle>
        <div className={clsx("text-sm")}>{children}</div>
      </div>
    </div>
  );
}
