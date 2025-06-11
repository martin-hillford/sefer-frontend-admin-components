import { ReactNode } from 'react';
import styled from 'styled-components';

export function Cards<T>(props : { entities : T[], onRender : (entity : T) => ReactNode, size? : number }) {
  const { entities, size = 1014 } = props;

  const count = Math.ceil(entities.length / 2);
  const rows = [];

  for (let row = 0; row < count; row++) {
    rows.push(<Row key={row} {...props} size={size} row={row} />);
  }

  return <Wrapper $size={size}>{rows}</Wrapper>;
}

function Row<T>(props : { row : number, entities : T[], onRender : (entity : T) => ReactNode, size : number }) {
  const { row, entities, onRender, size } = props;

  const base = row * 2;

  const getCell = (index : number) => <Card $size={size} key={index}>{onRender(entities[index])}</Card>;

  const cellA = getCell(base);
  const cellB = (base + 1 < entities.length) ? getCell(base + 1) : <Spacer $size={size} />;

  return (
    <Container>
      {cellA}
      {cellB}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 16px;
  flex-wrap: wrap;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Spacer = styled.div<{$size?:number}>`
  flex-grow: 0;
  flex-basis: 100%;

  @media (min-width: ${p => p.$size ?? 1000000}px) {
    flex-basis: calc(50% - 8px);
    flex-grow: 1;

    &:first-child {
      margin-right: 8px;
      margin-bottom: 0;
    }

    &:last-child {
      margin-left: 8px;
    }
  }
`;

export const Card = styled(Spacer)`
  border: 1px solid #eaeaea;
  background-color: white;
  padding: 10px;

  &:first-child {
      margin-bottom: 16px;
    }

  @media (min-width: ${p => p.$size}px) {
    &:first-child {
      margin-bottom: 0;
    }
  }
`;

const Wrapper = styled.div<{$size:number}>`
  @media (min-width: ${p => p.$size}px) {
    margin-bottom: 16px;
  }
`;
