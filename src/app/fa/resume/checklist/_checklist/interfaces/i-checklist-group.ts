import React from 'react';
import { IChecklistGroupItem } from './i-checklist-group-item';
import { ChecklistGroupType } from './type-checklist-groups';
import { ChecklistItemStatusType } from './type-checklist-item-status';

export interface IChecklistGroup {
  id: string;
  order: number;
  group: ChecklistGroupType;
  title: string | React.ReactNode;
  desc?: string | React.ReactNode;
  passedNote?: string | React.ReactNode;
  failedNote?: string | React.ReactNode;
  unknownNote?: string | React.ReactNode;
  status?: ChecklistItemStatusType;
  items: IChecklistGroupItem[];
}
