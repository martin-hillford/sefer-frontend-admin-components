import { DragEvent, useEffect, useState } from 'react';
import { Entity } from "../../types/Entity";
import { ListGroup } from "../ListGroup";
import { Item } from "./Item";
import { ListProps } from "./ListProps";

export function List<T>(props : ListProps<T>) {
  const { selected, items, stretch, getLabel, onSelect, border, onRenderItem, onRenderItemContent, onSorted, sorting } = props;
  const [selectedItems, setSelectedItems] = useState<Entity<T>>();
  const [dragged, setDragged] = useState<Entity<T>>();

  useEffect(() => {
    if (!selected) return;
    setSelectedItems(selected);
  }, [selected]);

  if (items.length === 0 && stretch === false) return null;

  const onSelected = (item : Entity<T>) => {
    const selectedItem = (selectedItems?.id !== item.id) ? item : undefined;
    setSelectedItems(selectedItem);
    onSelect(selectedItem);
  };

  const onDragStart = (event : DragEvent<HTMLDivElement>, item : Entity<T>) => {
    if (!event.dataTransfer) return;
    setDragged(item);
    setSelectedItems(undefined);
  };

  const onDrop = (event : DragEvent<HTMLDivElement>, dropped : Entity<T>) => {
    if (!dragged || !onSorted) return;
    (event.target as HTMLDivElement).classList.remove('drag-over');

    const draggedIndex = items.findIndex(i => i.id === dragged.id);
    const droppedIndex = items.findIndex(i => i.id === dropped.id);

    const sorted = items.filter(i => i.id !== dragged?.id);

    // Dropping on the same place - no changes
    if (draggedIndex === droppedIndex) return;

    // dragged < dropped - moving done - at the dropped index
    sorted.splice(droppedIndex, 0, dragged);

    onSorted(sorted);
    setDragged(undefined);
    setSelectedItems(undefined);
  };

  const onDragOver = (event : DragEvent<HTMLDivElement>) => {
    (event.target as HTMLDivElement).classList.add('drag-over');
    event.stopPropagation();
    event.preventDefault();
  };

  const onDragLeave = (event : DragEvent<HTMLDivElement>) => {
    (event.target as HTMLDivElement).classList.remove('drag-over');
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <ListGroup border={border} stretch={stretch}>
      { items.map(item => (
        <Item<T>
          draggable={sorting === true}
          onClick={() => onSelected(item)}
          active={selectedItems?.id === item.id && dragged === undefined}
          key={item.id}
          onDragStart={event => onDragStart(event, item)}
          onDrop={event => onDrop(event, item)}
          onDragOver={onDragOver}
          entity={item}
          onRenderItem={onRenderItem}
          onRenderItemContent={onRenderItemContent}
          getLabel={getLabel}
          onDragLeave={onDragLeave}
        />
      ))}
    </ListGroup>
  );
}
