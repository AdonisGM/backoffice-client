import { ReactNode } from 'react';
import { Header, RowData } from '@tanstack/table-core';

type CsTableHeaderCellProps<TData extends RowData> = {
  children: ReactNode;
  header: Header<TData, unknown>;
  isFirstHeader: boolean;
};

const CsTableHeaderCell = <TData extends RowData>(props: CsTableHeaderCellProps<TData>) => {
  return (
    <th
      key={props.header.id}
      className={`h-10 bg-gray-200 text-sm font-medium text-gray-800 ${props.isFirstHeader ? '' : 'border-l-2 border-white'}`}
      colSpan={props.header.colSpan}
      style={{ width: props.header.getSize() }}
    >
      {props.children}
    </th>
  );
};

export default CsTableHeaderCell;
