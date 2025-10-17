import { Header, RowData, Table } from '@tanstack/table-core';
import { tableHeaderRowSpan } from 'tanstack-table-header-rowspan';
import { flexRender } from '@tanstack/react-table';
import { Pin, PinOff } from 'lucide-react';
import { Fragment } from 'react';
import { Tooltip } from '@heroui/react';
import { useTranslation } from 'react-i18next';
import { columnSizingHandler, getCommonPinningStyles } from '@/utils/table-utils.ts';

type CsTableHeaderCellProps<TData extends RowData> = {
  header: Header<TData, unknown>;
  tsTable: Table<TData>;
};

const CsTableHeaderCell = <TData extends RowData>(props: CsTableHeaderCellProps<TData>) => {
  const { t } = useTranslation('table');
  let rowSpan = tableHeaderRowSpan(props.header);

  if (!rowSpan) {
    return;
  }

  return (
    <th
      key={props.header.id}
      ref={(thElem) => columnSizingHandler(thElem, props.tsTable, props.header.column)}
      className={`relative h-10 border-b-1 border-l-1 border-white bg-gray-200 text-xs font-bold text-gray-800`}
      colSpan={props.header.colSpan}
      rowSpan={rowSpan}
      style={{
        width: props.header.getSize() !== 0 ? props.header.getSize() : undefined,
        ...getCommonPinningStyles(props.header.column),
      }}
    >
      <div
        className={`flex items-center ${props.header.column.getCanPin() ? 'justify-between' : 'justify-center'} gap-2`}
      >
        {props.header.column.getCanPin() && <div className={'w-6'} />}
        <div>{flexRender(props.header.column.columnDef.header, props.header.getContext())}</div>
        {props.header.column.getCanPin() && (
          <div className={'w-6'}>
            <Fragment>
              {props.header.column.getIsPinned() !== 'left' ? (
                <Tooltip color="primary" content={t('button.pin')} delay={1000} size={'sm'}>
                  <button
                    className={'cursor-pointer'}
                    onClick={() => {
                      props.header.column.pin('left');
                    }}
                  >
                    <Pin fill={'gray'} size={12} />
                  </button>
                </Tooltip>
              ) : null}
              {props.header.column.getIsPinned() ? (
                <Tooltip color="primary" content={t('button.unpin')} delay={1000} size={'sm'}>
                  <button
                    className={'cursor-pointer'}
                    onClick={() => {
                      props.header.column.pin(false);
                    }}
                  >
                    <PinOff fill={'gray'} size={12} />
                  </button>
                </Tooltip>
              ) : null}
            </Fragment>
          </div>
        )}
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
