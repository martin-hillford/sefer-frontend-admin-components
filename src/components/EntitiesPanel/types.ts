import { ReactNode } from 'react';
import { Entity } from './index';

export type EntitiesPanelProps<T extends { id: number | string }> = {
    header?: string | null | undefined,
    onSelect?: (selected: T | undefined) => void | undefined,
    onAdd?: () => void
    onAddLabel?: string,
    onAddIcon?: ReactNode,
    data?: T[] | undefined | null,
    children?: ReactNode,
    onGetLabel?: (selected: T) => string,
    onRenderItem?: (selected: T) => { label: string, child: ReactNode },
    name: string,
    sort?: SortProps & { save: (items: T[]) => Promise<void> }
    additionalButtons?: ReactNode
    selected?: T
    searchable?: boolean
}

export type PanelProps = {
    header?: string | null | undefined
    onChange: (selected: Entity) => void | undefined
    onAdd?: () => void
    onAddLabel?: string
    onAddIcon?: ReactNode
    data?: Entity[] | undefined
    children?: ReactNode,
    name: string
    sort?: SortProps & { save: (items: Entity[]) => Promise<void> },
    additionalButtons?: ReactNode
    selectedId?: number | string
    searchable?: boolean
}

// These are all the props required for the button in the panel
export type ButtonProps = {
    onAddClick?: () => void
    onAddLabel?: string,
    onAddIcon?: ReactNode,
    setSorting: (sort: boolean) => void,
    sorting: boolean,
    sort?: SortProps & { save: () => Promise<void> },
    additionalButtons?: ReactNode
}

// These props are configuration the sorting button
type SortProps = {
    onClosed?: () => void,
    inProgress: string,
    completed: string,
}
