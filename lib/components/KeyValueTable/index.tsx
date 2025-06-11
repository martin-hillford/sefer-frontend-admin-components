import styled from 'styled-components';

interface KeyValuePair { key : string; value : string | number }

export const KeyValueTable = (props : { data : KeyValuePair[] }) => {
  const { data } = props;
  return (
    <Table>
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        { data.map(p => <Row key={p.key} pair={p} />)}
      </tbody>
    </Table>
  );
};

const Row = (props : { pair : KeyValuePair }) => {
  const { pair } = props;
  return (
    <tr>
      <td>{pair.key}</td>
      <td>
        <span>{pair.value}</span>
      </td>
    </tr>
  );
};

const Table = styled.table`
    width: 100%;
    padding: 0;
    margin: 0;
    border-spacing:0;

    th {
        text-align: left;
        border-bottom: 1px solid #E5E5E5;
    }

    th:first-child { white-space: nowrap; width:150px; }
    th:last-child { padding-left: 16px; }

    td {
        padding-top: 4px;
        padding-bottom: 4px;
        border-top: 1px solid #E5E5E5;
        line-height: 1.846;
        vertical-align: top;

        span {
            overflow-wrap: break-word;
        }
    }

    td:first-child { white-space: nowrap; font-weight: bold; width:150px; }
    td:last-child { padding-left: 16px; }
`;
