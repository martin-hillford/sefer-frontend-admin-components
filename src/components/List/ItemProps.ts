import { DragEventHandler, MouseEventHandler, ReactNode } from 'react';
import { Entity } from "../../types/Entity";


export type ItemProps<T> = {
    draggable : boolean,
    onClick : MouseEventHandler<HTMLDivElement>,
    active? : boolean,
    onDragStart : DragEventHandler<HTMLDivElement>
    onDrop : DragEventHandler<HTMLDivElement>,
    onDragOver : DragEventHandler<HTMLDivElement>
    onDragLeave : DragEventHandler<HTMLDivElement>
    onRenderItem? : (entity : Entity<T>) => ReactNode,
    onRenderItemContent? : (entity : Entity<T>) => ReactNode;
    entity : Entity<T>
    getLabel : (entity : Entity<T>) => string
}
