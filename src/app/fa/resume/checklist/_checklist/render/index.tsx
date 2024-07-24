import clsx from 'clsx';
import { RenderChecklistGroup } from './group/render-group';
import { IChecklistRenderProps } from './i-checklist-render';

export function RenderChecklist({
  name,
  list,
}: IChecklistRenderProps) {
  const uniqueId = `ls-${name}`;
  console.debug('list', list);

  // foreach list, render group
  const listGroups = list.map((group) => {
    return <>
      <RenderChecklistGroup
        key={group.id}
        id={uniqueId}
        group={group}
      />
      {/* render checklist items */}
    </>;
  });

  return (
    <section
      id={uniqueId}
      className={
        clsx(
          'checklist',
        )
      } >
      {listGroups}
    </section >
  );
}