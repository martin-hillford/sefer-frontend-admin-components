import { FC, PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';

export interface PanelProps {
    title? : string,
    icon? : ReactNode,
    action? : ReactNode,
}

export const Panel : FC<PropsWithChildren<PanelProps>> = (props) => {
  const { title, action, children } = props;
  return (
    <Container>
      <Header>
        <div>
          <Icon {...props} />
          {title}
        </div>
        {action && <div>{action}</div>}
      </Header>
      <Body>{children}</Body>
    </Container>
  );
};

const Icon = (props : { icon? : ReactNode}) => {
  const { icon } = props;
  if (!icon) return null;
  return <Span>{icon}</Span>;
};

const Span = styled.span`
    padding-right: 6px;
`;

const Container = styled.div`
    border: 1px solid rgba(0,0,0,0.1);
    width:100%;
    margin-bottom: 23px;
`;

const Body = styled.div`
    padding:15px;
`;

const Header = styled.h4`
    font-weight: 400;
    line-height: 1.1;
    color: rgb(33, 33, 33);
    font-size: 18px;
    width: 100%;
    padding: 10px 15px;
    height: 40px;
    margin:0;
    background-color: #f5f5f5;

    display: flex;

    div:first-child {
        flex: 1 1 auto;
    }

    div:last-child {
        flex: 1 1 auto;
        display: flex;
        justify-content: flex-end;

    }
`;
