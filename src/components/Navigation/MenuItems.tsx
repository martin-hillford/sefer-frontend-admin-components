import { Group } from "../../types/Navigation";
import { MenuItem } from './MenuItem';

interface  Props {
  onHeaderClick : (id : string) => void,
  groups: Group[]
  block: null | string,
  collapsed: boolean,
  language: 'nl' | 'en'
}

export const MenuItems = (props: Props) => {
  const { groups } = props;
  const items = groups.map(group => <MenuItem key={group.id} {...props} group={group} />);
  return <>{items}</>
}
