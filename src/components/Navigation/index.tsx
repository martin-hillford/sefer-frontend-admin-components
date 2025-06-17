import { useContext, useRef, useState } from 'react';
import { NavigationContext } from "../../context/NavigationContext";
import { useAvailableLanguage } from "../../hooks/useAvailableLanguage";
import { MenuHamburger } from "../../icons";
import { Group } from "../../types/Navigation";
import { useOutsideClick } from "../../util/useOutsideClick";
import { Navbar } from "../Navbar";
import { BottomNavBlock, NavBlock } from './styled';
import { MenuGroupHeader } from '../MenuGroupHeader';
import { MenuItems } from './MenuItems';

interface NavigationProps {
  collapsed: boolean,
  onToggleCollapsed: (collapsed: boolean) => void
}

export const Navigation = (props : NavigationProps) => {
  const { navigation } = useContext(NavigationContext)
  const [block, setBlock] = useState<null | string>(null);
  const { onToggleCollapsed, collapsed } = props;
  const ref = useRef<HTMLDivElement>(null);
  const language = useAvailableLanguage();

  const handle = () => {
    if (!collapsed) onToggleCollapsed(true);
  };

  const collapse = (toggle: boolean) => {
    if (toggle) setBlock(null);
    onToggleCollapsed(toggle);
  };

  const onHeaderClick = (blockToShow: string) => {
    setBlock(blockToShow);
    if (collapsed) collapse(false);
  };

  useOutsideClick(ref, handle);

  const top = navigation?.groups?.filter(g => g.location === "up") ?? [] as Group[];
  const bottom = navigation?.groups?.filter(g => g.location === "down") ?? [] as Group[];

  return (
    <Navbar ref={ref} $collapsed={collapsed}>
      <NavBlock>
        <MenuGroupHeader
          icon={<MenuHamburger size={20} />}
          onClick={() => collapse(!collapsed)}
          collapsed={collapsed}
        />
        <MenuItems
          block={block}
          collapsed={collapsed}
          groups={top}
          language={language}
          onHeaderClick={onHeaderClick}
        />
      </NavBlock>
      <BottomNavBlock>
        <MenuItems
          block={block}
          collapsed={collapsed}
          groups={bottom}
          language={language}
          onHeaderClick={onHeaderClick}
        />
      </BottomNavBlock>
    </Navbar>
  )
}


