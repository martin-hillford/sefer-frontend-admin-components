import { ListGroupItem } from "../ListGroupItem";
import { ItemProps } from "./ItemProps";

export function Item<T>(props : ItemProps<T>) {
    const { onRenderItemContent, onRenderItem, getLabel } = props;
    const properties = { ...props } as any;
    delete properties.onRenderItem;
    delete properties.onRenderItemContent;
    delete properties.getLabel;

    if (onRenderItemContent) return <ListGroupItem {...properties}>{onRenderItemContent(properties.entity)}</ListGroupItem>;
    if (!onRenderItem) return <ListGroupItem {...properties}>{getLabel(properties.entity)}</ListGroupItem>;

    delete properties.active;
    const child = onRenderItem(properties.entity);
    return <div style={{ borderWidth: 0 }} {...properties}>{child}</div>;
}
