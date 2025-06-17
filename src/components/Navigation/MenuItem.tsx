import { useContext } from "react";
import { NavigationContext } from "../../context/NavigationContext";
import { Education, File, Stats, Grid, Home, Logout, Message, Pencil, Settings, User } from "../../icons";
import { Group } from "../../types/Navigation";
import { MenuGroupHeader } from "../MenuGroupHeader";
import { MenuLinkHeader } from "../MenuLinkHeader";
import { SubMenu } from './styled';

interface  Props {
  onHeaderClick : (id : string) => void,
  group: Group,
  block: null | string,
  collapsed: boolean,
  language: 'nl' | 'en'
}

export const MenuItem = (props : Props) => {
  const { publicSite } = useContext(NavigationContext)
  const { group, language, collapsed, onHeaderClick, block } = props;
  const label = group.name[language];
  const icon = getIcon(group);
  const groupProps = { label, icon }

  const getHref = (href: string) => {
    if(href === "/home" && publicSite) return publicSite;
    return href;
  }

  // If the group has a 'href' it is a link header
  if(group.href) return <MenuLinkHeader {...groupProps} href={getHref(group.href)} collapsed={collapsed} />;

  // Return the header and the sub menu
  return (
    <>
      <MenuGroupHeader
        {...groupProps}
        onClick={() => onHeaderClick(group.id)}
        collapsed={collapsed}
      />
      <SubMenu $collapsed={collapsed || block !== group.id}>
        <ul>
          {group.links!.map(l =>
            <li key={l.href} >
              <a href={getHref(l.href)}>{l.name[language]}</a>
            </li>
          )}
        </ul>
      </SubMenu>
    </>
  );
}

const getIcon = (group: Group) => {
  switch (group.icon) {
    case 'education': return <Education size={20} />;
    case 'file': return <File size={20} />;
    case 'logout': return <Logout size={20} />;
    case 'grid': return <Grid size={20} />;
    case 'home': return <Home size={20} />;
    case 'user': return <User size={20} />;
    case 'message': return <Message size={20} />;
    case 'pencil': return <Pencil size={20} />;
    case 'settings': return <Settings size={20} />;
    case 'stats': return <Stats size={20} />;
    default: return null;
  }
}
