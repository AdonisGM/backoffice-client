import { RowData, Table } from '@tanstack/table-core';
import { flexRender } from '@tanstack/react-table';

const CsTableFooter = <TData extends RowData>(props: { tsTable: Table<TData> }) => {
  return (
    <tfoot>
      {props.tsTable.getFooterGroups().map((footerGroup) => (
        <tr key={footerGroup.id}>
          {footerGroup.headers.map((header) => (
            <th key={header.id}>
              {header.isPlaceholder
                ? null
                : flexRender(header.column.columnDef.footer, header.getContext())}
            </th>
          ))}
        </tr>
      ))}
    </tfoot>
  );
};

export default CsTableFooter;
