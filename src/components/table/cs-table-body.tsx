import { RowData, Table } from '@tanstack/table-core';
import { flexRender } from '@tanstack/react-table';
import { useState } from 'react';
import { getCommonPinningStyles } from '@/utils/table-utils.ts';

const CsTableBody = <TData extends RowData>(props: { tsTable: Table<TData> }) => {
  const [hoverRowId, setHoverRowId] = useState<Set<string>>(new Set());

  return (
    <tbody>
      {props.tsTable.getRowModel().rows.map((row) => {
        const isOddRow = row.index % 2 === 1;

        return (
          <tr
            key={row.id}
            className={`${isOddRow ? 'bg-gray-50' : 'bg-white-50'}`}
            onMouseEnter={() => {
              hoverRowId.add(row.id);
              setHoverRowId(new Set(hoverRowId));
            }}
            onMouseLeave={() => {
              hoverRowId.delete(row.id);
              setHoverRowId(new Set(hoverRowId));
            }}
          >
            {row.getVisibleCells().map((cell) => {
              const isFirstCell = cell.column.id === row.getVisibleCells()[0].column.id;

              return (
                <td
                  key={cell.id}
                  className={`px-2 py-1.5 text-xs text-gray-700 ${isFirstCell ? '' : 'border-l-1 border-gray-200'} ${isOddRow ? (hoverRowId.has(row.id) ? 'bg-gray-100' : 'bg-gray-50') : hoverRowId.has(row.id) ? 'bg-gray-100' : 'bg-white'}`}
                  style={{
                    width: cell.column.getSize(),
                    ...getCommonPinningStyles(cell.column),
                  }}
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
