'use client';

import { RenderChecklist } from './render';
import { IChecklistRenderProps } from './render/i-checklist-render';

export function Checklist({
  name,
  list,
}: IChecklistRenderProps) {
  // TODO: Implement logic to handle the checklist

  return <RenderChecklist name={name} list={list} />;
}
