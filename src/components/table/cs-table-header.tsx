import { RowData, Table } from '@tanstack/table-core';
import { flexRender } from '@tanstack/react-table';
import CsTableHeaderCell from './cs-table-header-cell';

const CsTableHeader = <TData extends RowData>(props: { tsTable: Table<TData> }) => {
  return (
    <thead>
      {props.tsTable.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            const isFirstHeader = header.index === 0;

            return (
              <CsTableHeaderCell key={header.id} header={header} isFirstHeader={isFirstHeader}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </CsTableHeaderCell>
            );
          })}
        </tr>
      ))}
    </thead>
  );
};

export default CsTableHeader;
