import { Header, RowData, Table } from '@tanstack/table-core';
import { flexRender } from '@tanstack/react-table';
import { tableFooterRowSpan } from 'tanstack-table-header-rowspan';
import { columnSizingHandler, getCommonPinningStyles } from '@/utils/table-utils.ts';

type CsTableFooterCellProps<TData extends RowData> = {
  header: Header<TData, unknown>;
  tsTable: Table<TData>;
};

const CsTableFooterCell = <TData extends RowData>(props: CsTableFooterCellProps<TData>) => {
  let rowSpan = tableFooterRowSpan(props.header);

  if (!rowSpan) {
    return;
  }

  return (
    <th
      key={props.header.id}
      ref={(thElem) => columnSizingHandler(thElem, props.tsTable, props.header.column)}
      className={`relative h-7 border-b-1 border-l-1 border-white bg-gray-200 px-2 text-left text-xs font-bold text-gray-800`}
      colSpan={props.header.colSpan}
      rowSpan={rowSpan}
      style={{
        width: props.header.getSize() !== 0 ? props.header.getSize() : undefined,
        ...getCommonPinningStyles(props.header.column),
      }}
    >
      {flexRender(props.header.column.columnDef.footer, props.header.getContext())}
    </th>
  );
};

export default CsTableFooterCell;
