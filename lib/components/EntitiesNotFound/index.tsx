import styled from 'styled-components';
import { Header } from '../Header';

export const EntitiesNotFound = (props : { header : string, content : string }) => {
  const { header, content } = props;

  return (
    <Container>
      <Header variant="large">{header}</Header>
      <div>{content}</div>
    </Container>
  );
};

const Container = styled.div`
    width: 100%;
`;
