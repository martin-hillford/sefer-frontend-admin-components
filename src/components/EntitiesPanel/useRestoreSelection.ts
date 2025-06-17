import { useEffect, useState } from 'react';
import { getStoredSelectedEntity } from './storing';
import { Entity } from './index';

type onChangeFunction = (selected: Entity) => (void | undefined);

export const useRestoreSelection = (name: string, entities: Entity[], selectedId?: string | number, onChange?: onChangeFunction) => {
  const [selected, setSelected] = useState<Entity>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!onChange || mounted || selected) return;

    const selectedFromProps = selectedId ? entities.find(e => e.id === selectedId) : undefined;
    const fromStorage = getStoredSelectedEntity(name, entities);

    if (selectedFromProps) {
      setSelected(selectedFromProps);
      onChange(selectedFromProps);
    }

    if (!selectedFromProps && fromStorage) {
      setSelected(fromStorage);
      onChange(fromStorage);
    }

    setMounted(true);
  }, [mounted, entities, name, selectedId, onChange, selected]);

  return selected;
}
