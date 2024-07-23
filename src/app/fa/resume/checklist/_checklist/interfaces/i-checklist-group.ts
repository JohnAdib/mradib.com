import React from 'react';
import { IChecklistGroupItem } from './i-checklist-group-item';
import { ChecklistGroupType } from './type-checklist-groups';

export interface IChecklistGroup {
  id: string;
  order: number;
  group: ChecklistGroupType;
  title: string | React.ReactNode;
  desc?: string | React.ReactNode;
  passedNote?: string | React.ReactNode;
  failedNote?: string | React.ReactNode;
  unknownNote?: string | React.ReactNode;
  items: IChecklistGroupItem[];
}
