import { useState } from 'react';
import styled from 'styled-components';
import { useLocalization } from "../../hooks/useLocalization";
import { Entity } from "../../types/Entity";
import { Button } from "../Button";
import { ButtonGroup } from "../ButtonGroup";
import { Header } from "../Header";
import { Line } from "../Line";
import { Section } from './Section';
import { localization } from './localization';

function removeFrom<T>(needles : Entity<T>[], haystack : Entity<T>[]) {
  return haystack.filter(a => !needles.find(s => s.id === a.id));
}

type DivisionListProps<T> = {
    available : Entity<T>[],
    selected : Entity<T>[],
    availableLabel : string,
    selectedLabel : string
    onSave : (selected: Entity<T>[], available: Entity<T>[]) => void,
    onCancel? : () => void,
    header : string;
    getEntityLabel : (entity : Entity<T>) => string;
    saveLabel? : string;
    sortable? : 'left' | 'right' | 'both' | 'none'
}

export function DivisionList<T>(props : DivisionListProps<T>) {
  const { available, availableLabel, getEntityLabel, header, selectedLabel, onSave, sortable = 'none', onCancel, selected, saveLabel } = props;
  const [stateAvailable, setAvailable] = useState(available);
  const [stateSelected, setSelected] = useState(selected);
  const terms = useLocalization(localization);

  const onChange = (newAvailable : Entity<T>[], newSelected : Entity<T>[]) => {
    setAvailable(newAvailable);
    setSelected(newSelected);
  };

  const onAddToSelected = (selection : Entity<T>[]) => {
    const newSelected = [...stateSelected, ...selection];
    const newAvailable = removeFrom(selection, stateAvailable);
    onChange(newAvailable, newSelected);
  };

  const onRemoveFromSelected = (selection : Entity<T>[]) => {
    const newSelected = removeFrom(selection, stateSelected);
    const newAvailable = [...stateAvailable, ...selection];
    onChange(newAvailable, newSelected);
  };

  const onSaveHandler = () => {
    onSave(stateSelected, stateAvailable);
  };

  const onSortedHandler = (side: 'left' | 'right', items: Entity<T>[]) => {
    setSelected([...items]);
  };

  return (
    <Container>
      <Header variant="large">{header}</Header>
      <Sections>
        <Section
          entities={stateAvailable}
          label={availableLabel}
          side="left"
          onChange={onAddToSelected}
          getEntityLabel={getEntityLabel}
          sortable={sortable === 'both' || sortable === 'left'}
          onSorted={items => onSortedHandler('left', items)}
        />
        <Section
          entities={stateSelected}
          label={selectedLabel}
          side="right"
          onChange={onRemoveFromSelected}
          getEntityLabel={getEntityLabel}
          sortable={sortable === 'both' || sortable === 'right'}
          onSorted={items => onSortedHandler('right', items)}
        />

      </Sections>
      <div><Line $margin={16} /></div>
      <ButtonGroup $pull="right">
        { onCancel && <Button variant="default" onClick={onCancel} label={terms.cancel} />}
        <Button variant="primary" onClick={onSaveHandler} label={saveLabel ?? terms.save } />
      </ButtonGroup>
    </Container>
  );
}

const Container = styled.div`
    display:flex;
    flex-wrap: wrap;
    flex-direction:column;
`;

const Sections = styled.div`
    height: calc(100vh - 320px);
    overflow: hidden;
    display: flex;
    flex-direction: row;
`;
