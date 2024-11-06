import { ChecklistItemStatusType } from "./type-checklist-item-status";

export interface IChecklistGroupItem {
  id: number;
  order: number;
  title: string | React.ReactNode;
  desc?: string | React.ReactNode;
  note?: string | React.ReactNode;
  reference?: string;
  passedNote?: string | React.ReactNode;
  failedNote?: string | React.ReactNode;
  unknownNote?: string | React.ReactNode;
  status?: ChecklistItemStatusType;
  checked?: boolean;
}
