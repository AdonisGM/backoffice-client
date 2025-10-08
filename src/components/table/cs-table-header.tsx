import { RowData, Table } from '@tanstack/table-core';
import CsTableHeaderCell from './cs-table-header-cell';

const CsTableHeader = <TData extends RowData>(props: { tsTable: Table<TData> }) => {
  return (
    <thead>
      {props.tsTable.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return <CsTableHeaderCell key={header.id} header={header} />;
          })}
        </tr>
      ))}
    </thead>
  );
};

export default CsTableHeader;
