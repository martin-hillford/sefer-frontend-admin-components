import { ChevronDown, ChevronUp } from '../../icons';
import { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { Header, HeaderProps } from '../Header';

type Props = HeaderProps & { folded? : boolean; content : ReactNode }

export const FoldingHeader = (props : Props) => {
  const { folded } = props;
  const [isFolded, setIsFolded] = useState<boolean>(folded !== false);
  const { content, children } = props;
  return (
    <>
      <Header {...props}>
        <Container>
          <Text>{children}</Text>
          <Button onClick={() => setIsFolded(f => !f)}>
            {isFolded && <ChevronDown size={24} />}
            {!isFolded && <ChevronUp size={24} />}
          </Button>
        </Container>
      </Header>
      {!isFolded && content}
    </>
  );
};

const Button = styled.div`
    cursor: pointer;
`;

const Text = styled.div`
    flex-grow: 1;
    -webkit-user-select: none;
    user-select: none;
`;

const Container = styled.div`
    display: flex;
    width: 100%;
`;
