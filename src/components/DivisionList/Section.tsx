import { Entity } from "../../types/Entity";
import { Button } from "../Button";
import { ButtonGroup } from "../ButtonGroup";
import { Header } from "../Header";
import { TriangleLeft, TriangleRight } from '../../icons';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { List } from "../List";


function inArray<T>(needle : Entity<T>, haystack : Entity<T>[]) {
  return !!haystack.find(e => e.id === needle.id);
}

function removeFrom<T>(needles : Entity<T>[], haystack : Entity<T>[]) {
  return haystack.filter(a => !needles.find(s => s.id === a.id));
}

type SectionProps<T> = {
    entities : Entity<T>[],
    label : string,
    side : string,
    onChange : (selection : Entity<T>[]) => void
    getEntityLabel : (entity : Entity<T>) => string
    sortable: boolean
    onSorted? : (items : Entity<T>[]) => void
}

export function Section<T>(props : SectionProps<T>) {
  const [selected, setSelected] = useState<Entity<T>[]>([]);
  const { label, entities, onSorted, sortable, getEntityLabel, onChange, side } = props;

  useEffect(() => {
    setSelected([]);
  }, [entities]);

  const onSelect = (entity : Entity<T> | undefined) => {
    if (!entity) return;
    if (inArray(entity, selected)) setSelected(removeFrom([entity], selected));
    else setSelected([...selected, entity]);
  };

  const onClick = () => {
    onChange(selected);
    setSelected([]);
  };

  const onClickAll = () => {
    onChange(entities);
    setSelected([]);
  };

  const sorted = sortable ? entities : entities.sort((a, b) => getEntityLabel(a).localeCompare(getEntityLabel(b)));

  return (
    <SectionContainer $side={side}>
      <Panel>
        <Header inline variant="medium">{label}</Header>
        <List
          items={sorted}
          onSelect={onSelect}
          getLabel={entity => getEntityLabel(entity)}
          sorting={sortable}
          onSorted={onSorted}
        />
      </Panel>
      <ButtonGroup $pull={side}>
        <Button onClick={onClick} disabled={selected.length === 0}>
          { side === 'left' && <TriangleRight size={18} /> }
          { side === 'right' && <TriangleLeft size={18} /> }
        </Button>
        <Button onClick={onClickAll}>
          { side === 'left' && <Forward /> }
          { side === 'right' && <Backward /> }
        </Button>
      </ButtonGroup>
    </SectionContainer>
  );
}

const SectionContainer = styled.div<{$side : string}>`
    display: flex;
    flex-direction: column;
    border-right: ${p => (p.$side === 'left' ? '1px' : '0')} solid #EEEEEE;
    padding-right: ${p => (p.$side === 'left' ? '14px' : '0')};
    padding-left: ${p => (p.$side === 'left' ? '0' : '15px')};
    width: 100%;
`;

const Panel = styled.div`
    height: calc(100vh - 320px);
    width: 100%;
    padding-bottom: 58px;
    box-sizing: border-box;
    overflow: hidden;
`;

const Forward = () => <Wrapper><Compact><TriangleRight size={18} /><TriangleRight size={18} /></Compact></Wrapper>;

const Backward = () => <Wrapper><Compact><TriangleLeft size={18} /><TriangleLeft size={18} /></Compact></Wrapper>;

const Wrapper = styled.div`
    display: block;
    width: 24px;
`;

const Compact = styled.div`

    span:last-child {
        margin-left: -8px;
    }
`;
