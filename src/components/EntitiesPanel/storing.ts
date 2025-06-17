import { Entity } from './index';

export const storeSelectedEntity = (name : string, entity : Entity) => {
  localStorage.setItem(`entities-panel-${name}`, entity.id.toString());
};

export const getStoredSelectedEntity = (name : string, entities : Entity[]) => {
  const selectFirst = () => (entities.length !== 0 ? entities[0] : null);

  try {
    const stored = localStorage.getItem(`entities-panel-${name}`);
    if (stored === null) return selectFirst();

    const selectedId = parseInt(stored);

    const selected = entities.find(e => e.id === selectedId);
    if (selected) return selected;
    return selectFirst();
  } catch { return selectFirst(); }
};
