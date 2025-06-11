import { ReactNode } from "react";
import { Entity } from "../../types/Entity";

export type ListProps<T> = {
    items : Entity<T>[],
    onSelect : (item : Entity<T> | undefined) => any,
    onSorted? : (items : Entity<T>[]) => any
    sorting? : boolean
    onRenderItem? : (entity : Entity<T>) => ReactNode
    onRenderItemContent? : (entity : Entity<T>) => ReactNode
    getLabel : (entity : Entity<T>) => string,
    border? : boolean
    selected? : Entity<T>
    stretch? : boolean;
}
