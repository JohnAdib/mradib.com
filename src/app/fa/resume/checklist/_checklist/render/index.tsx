import clsx from 'clsx';
import { ChecklistGroup } from './group';
import { IChecklistRenderProps } from './i-checklist-render';
import { ChecklistItems } from './items';

export function RenderChecklist({
  id,
  list,
}: IChecklistRenderProps) {
  const uniqueId = `ls-${id}`;
  console.debug('list', list);

  // foreach list, render group
  const listGroups = list.map((group) => {
    const groupId = `${id}-${group.id}`;
    return (
      <div key={group.id} id={groupId}>

        <ChecklistGroup group={group} />
        <ChecklistItems items={group.items} />
      </div>
    );
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