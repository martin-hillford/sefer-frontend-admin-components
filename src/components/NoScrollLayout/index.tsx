import { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { Main } from "../BaseLayout";
import { Navigation } from "../Navigation";

type NoScrollLayoutProps = {
    children : ReactNode
}

export const NoScrollLayout = (props : NoScrollLayoutProps) => {
  const { children } = props;
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Container>
      <Navigation collapsed={collapsed} onToggleCollapsed={setCollapsed} />
      <Main $blurred={!collapsed}>
        <Panel>
          {children}
        </Panel>
      </Main>
    </Container>
  );
};

const Panel = styled.div`
    height:100vh;
    width:100%;
    display: flex;
    overflow: hidden;
`;

export const Container = styled.div`
    height:100vh;
    width:100vw;
    padding:0;
    margin:0;
    display: flex;
    overflow: hidden;
`;
