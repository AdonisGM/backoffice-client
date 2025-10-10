import { RowData, Table } from '@tanstack/table-core';
import CsTableHeaderCell from './cs-table-header-cell';

type CsTableHeaderProps<TData extends RowData> = {
  tsTable: Table<TData>;
};

const CsTableHeader = <TData extends RowData>(props: CsTableHeaderProps<TData>) => {
  return (
    <thead className={'sticky top-0 z-10'}>
      {props.tsTable.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return <CsTableHeaderCell key={header.id} header={header} tsTable={props.tsTable} />;
          })}
        </tr>
      ))}
    </thead>
  );
};

export default CsTableHeader;
