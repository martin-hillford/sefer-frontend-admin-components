import React, { useEffect, useState } from 'react';
import { Panel } from './Panel';
import { EntitiesPanelProps } from './types';

export type Entity = {
    id: number | string,
    label: string,
    search?: string | undefined,
    node?: React.ReactNode
}

export const EntitiesPanel = <T extends { id: number | string }, >(props: EntitiesPanelProps<T>) => {
  const [entities, setEntities] = useState<Entity[]>();
  const { data, selected, onGetLabel, onSelect, children, onRenderItem, sort } = props;

  // This effect deal with settings the entities
  useEffect(() => {
    if (!data) return;

    if (!onRenderItem && !onGetLabel) return;

    setEntities(data.map(entity => {
      const item = onRenderItem ? onRenderItem(entity) : null;
      const label = onGetLabel ? onGetLabel(entity) : item?.label ?? '-';
      return { id: entity.id, label, search: label.toLowerCase(), node: item?.child };
    }));
  }, [data, onGetLabel, onRenderItem]);

  // if there are no entities, this panel cannot be shown
  // if (entities?.length === 0) return null;

  // This panel deals with generic entities and so when the selection is changed,
  // searches the data set with for the real item that is being selected
  const onSelectionChanged = (entity: Entity) => {
    if (onSelect) return onSelect(data?.find(d => d.id === entity.id));
  };

  // Since this panel also supports sorting the items, so let's prepare the props
  // This includes a save method that will use the actual data set for storing
  const sortProps = !sort ? undefined : {
    ...sort,
    save: async (items: Entity[]) => {
      const sorted = items.map(e => data?.find(d => e.id === d.id) as T);
      await sort.save(sorted)
    }
  };

  return (
    <Panel
      {...props}
      data={entities}
      onChange={onSelectionChanged}
      children={children}
      sort={sortProps}
      selectedId={selected?.id}
    />
  );
}
