import clsx from "clsx";

interface IChecklistGroupDescProps {
  desc: string | React.ReactNode;
}

export function ChecklistGroupDesc({
  desc,
}: IChecklistGroupDescProps): JSX.Element | null {
  if (!desc) {
    return null;
  }

  return <p className={clsx("mt-4")}>{desc}</p>;
}
