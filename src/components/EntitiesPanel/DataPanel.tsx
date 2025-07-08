import { useEffect, useState } from 'react';
import { useLocalization } from "../../hooks/useLocalization";
import { isEmpty } from "../../util/isEmpty";
import { Header } from "../Header";
import { List } from "../List";
import { TextField } from "../TextField";

import { Buttons } from './Buttons';
import { Entity } from './index';
import { Body, Container, Entities, ListGroupPanel, SearchList, SearchPanel } from './Styled';
import { storeSelectedEntity } from './storing';
import { PanelProps } from './types';
import { useRestoreSelection } from './useRestoreSelection';
import { localization } from './localization';

export const DataPanel = (props: PanelProps) => {
  const { header, onChange, selectedId, onAdd, children, name, onAddIcon } = props;
  const { onAddLabel, sort, additionalButtons, data, searchable = true } = props;
  const [search, setSearch] = useState<string>();
  const [sorting, setSorting] = useState(false);
  const [entities, setEntities] = useState<Entity[]>(data as Entity[]);
  const selected = useRestoreSelection(name, entities,selectedId, onChange);
  const terms = useLocalization(localization);

  // This effect is dealing with reloading of the data
  useEffect(() => { setEntities(data as Entity[]); }, [data]);

  const onItemClick = (entity?: Entity) => {
    if (!entity) return;
    if (onChange) {
      const result = onChange(entity);
      if (result === false) return false;
    }
    storeSelectedEntity(name, entity);

  };

  const onRenderItemContent = (entity: Entity) => (
    <>
      {!entity.node && entity.label}
      {entity.node && entity.node}
    </>
  );

  const sortProps = !sort ? undefined : {
    ...sort,
    save: async () => sort.save(entities),
  };

  return (
    <Container>
      <SearchPanel>
        <Header variant="large">{header}</Header>
        <form autoComplete="off" style={{ display: searchable ? 'unset' : 'none' }}>
          <TextField name="search" placeholder={terms.search} onChange={setSearch} />
        </form>
        <SearchList>
          <ListGroupPanel>
            <List
              items={filter(search, sorting, entities)}
              onRenderItemContent={onRenderItemContent}
              onSelect={onItemClick}
              getLabel={entity => entity.label}
              selected={selected}
              sorting={sorting}
              onSorted={setEntities}
            />
          </ListGroupPanel>
        </SearchList>
        <Buttons
          onAddClick={onAdd}
          onAddIcon={onAddIcon}
          onAddLabel={onAddLabel}
          setSorting={setSorting}
          sorting={sorting}
          sort={sortProps}
          additionalButtons={additionalButtons}
        />
      </SearchPanel>
      <Entities>
        <Header variant="large">{terms.details}</Header>
        <Body>{children}</Body>
      </Entities>
    </Container>
  );
};

const filter = (search: string | null | undefined, sorting: boolean, entities: Entity[]) => {
  if (sorting || isEmpty(search)) return entities;
  return entities.filter(entity => entity.search?.includes((search as string).toLowerCase().trim()));
};
