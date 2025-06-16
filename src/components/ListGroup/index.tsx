import { ReactNode, useRef } from 'react';
import styled from 'styled-components';

const isOverflown = (element : HTMLDivElement | null) => {
  if (!element) return false;
  return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
};

export const ListGroup = (props : { children : ReactNode, border? : boolean, stretch? : boolean}) => {
  const { children, border, stretch } = props;
  const panel = useRef<HTMLDivElement>(null);
  const overflown = isOverflown(panel.current);

  return (
    <Container $stretch={stretch !== false} $border={border !== false}>
      <ScrollPanel $overflown={overflown} ref={panel}>
        {children}
      </ScrollPanel>
    </Container>
  );
};

const Container = styled.div<{$border : boolean, $stretch : boolean}>`
    display: flex;
    ${p => (p.$stretch ? '' : 'max-')}height: 100%;
    width: 100%;
    border: ${p => (p.$border ? '1px' : 0)} solid #dddddd;
    overflow: hidden;
    border-collapse: collapse;
    border-bottom-width: ${p => (p.$stretch ? 1 : 0)}px
`;

const ScrollPanel = styled.div<{$overflown: boolean}>`
    width: 100%;
    overflow: auto;
    > div {
        border:0;
        border-top: 1px solid #dddddd;
        border-bottom: 0 solid #dddddd;
    }
    > div:first-child {
        border-top-width:0;
    }
    > div:last-child {
        border-bottom-width: ${p => (p.$overflown ? '0' : '1px')};
    }
`;
