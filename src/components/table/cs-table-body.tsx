import { RowData, Table } from '@tanstack/table-core';
import { flexRender } from '@tanstack/react-table';

const CsTableBody = <TData extends RowData>(props: { tsTable: Table<TData> }) => {
  return (
    <tbody>
      {props.tsTable.getRowModel().rows.map((row) => {
        const isOddRow = row.index % 2 === 1;

        return (
          <tr key={row.id} className={`hover:bg-gray-100 ${isOddRow ? 'bg-gray-50' : ''}`}>
            {row.getVisibleCells().map((cell) => {
              const isFirstCell = cell.column.id === row.getVisibleCells()[0].column.id;

              return (
                <td
                  key={cell.id}
                  className={`px-2 py-1 text-xs text-gray-700 ${isFirstCell ? '' : 'border-l-1 border-gray-200'}`}
                  style={{ width: cell.column.getSize() }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default CsTableBody;
