import clsx from 'clsx';
import { IChecklistRenderProps } from './i-checklist-render';
import { RenderChecklistGroupTitle } from './render-group-title';

export function RenderChecklist({
  name,
  list,
}: IChecklistRenderProps) {
  console.log('list', list);

  // foreach list, render group
  const listGroups = list.map((group) => {
    return <RenderChecklistGroupTitle
      key={group.id}
      title={group.title}
      desc={group.desc}
    />;
  });

  return (
    <section
      id={`checklist-${name}`}
      className={
        clsx(
          'checklist',
        )
      } >
      {listGroups}
    </section >
  );
}