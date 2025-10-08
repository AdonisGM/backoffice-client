import { Header, RowData } from '@tanstack/table-core';
import { tableHeaderRowSpan } from 'tanstack-table-header-rowspan';
import { flexRender } from '@tanstack/react-table';
import { Pin, PinOff } from 'lucide-react';
import { Fragment } from 'react';

type CsTableHeaderCellProps<TData extends RowData> = {
  header: Header<TData, unknown>;
};

const CsTableHeaderCell = <TData extends RowData>(props: CsTableHeaderCellProps<TData>) => {
  let rowSpan = tableHeaderRowSpan(props.header);

  if (!rowSpan) {
    return;
  }

  return (
    <th
      key={props.header.id}
      className={`relative h-10 border-b-1 border-l-1 border-white bg-gray-200 text-xs font-bold text-gray-800`}
      colSpan={props.header.colSpan}
      rowSpan={rowSpan}
      style={{ width: props.header.getSize() !== 0 ? props.header.getSize() : undefined }}
    >
      <div className={'flex items-center justify-between gap-2'}>
        <div />
        <div>{flexRender(props.header.column.columnDef.header, props.header.getContext())}</div>
        <div>
          {props.header.column.getCanPin() && (
            <Fragment>
              {props.header.column.getIsPinned() !== 'left' ? (
                <button
                  className="rounded border px-2"
                  onClick={() => {
                    props.header.column.pin('left');
                  }}
                >
                  <Pin fill={'gray'} size={12} />
                </button>
              ) : null}
              {props.header.column.getIsPinned() ? (
                <button
                  className="rounded border px-2"
                  onClick={() => {
                    props.header.column.pin(false);
                  }}
                >
                  <PinOff fill={'gray'} size={12} />
                </button>
              ) : null}
            </Fragment>
          )}
        </div>
      </div>
      {props.header.column.getCanResize() && (
        <div
          {...{
            onDoubleClick: () => props.header.column.resetSize(),
            onMouseDown: props.header.getResizeHandler(),
            onTouchStart: props.header.getResizeHandler(),
            className: `bg-black/50 cursor-col-resize h-full absolute right-0 top-0 touch-none select-none w-[4px] ${props.header.column.getIsResizing() ? 'isResizing' : 'bg-blue-500'}`,
          }}
        />
      )}
    </th>
  );
};

export default CsTableHeaderCell;
