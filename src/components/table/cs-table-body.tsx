import { RowData, Table } from '@tanstack/table-core';
import { flexRender } from '@tanstack/react-table';

const CsTableBody = <TData extends RowData>(props: { tsTable: Table<TData> }) => {
  return (
    <tbody>
      {props.tsTable.getRowModel().rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => {
            const isOddRow = row.index % 2 === 1;
            const isFirstCell = cell.column.id === row.getVisibleCells()[0].column.id;

            return (
              <td
                key={cell.id}
                className={`h-8 px-2 text-sm text-gray-700 ${isOddRow ? 'bg-gray-50' : ''} ${isFirstCell ? '' : 'border-l-2 border-gray-50'}`}
                style={{ width: cell.column.getSize() }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default CsTableBody;
