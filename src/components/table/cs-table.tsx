import { useReactTable, getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table';
import { RowData, ColumnDef, ColumnPinningState } from '@tanstack/table-core';
import { useState } from 'react';
import CsTableHeader from '@/components/table/cs-table-header.tsx';
import CsTableBody from '@/components/table/cs-table-body.tsx';
import { pageSizeOptions } from '@/configs/table-config.ts';
import CsTablePaging from '@/components/table/cs-table-paging.tsx';
import CsTableSetting from '@/components/table/cs-table-setting.tsx';

type CsTableProps<TData extends RowData> = {
  columns: ColumnDef<TData, any>[];
  data: TData[];
  overflow?: boolean;
  columnPinning?: ColumnPinningState;
  disablePagination?: boolean;
  tableClassName?: string;
  onClickExportExcel?: () => Promise<void>;
  onClickExportPdf?: () => Promise<void>;
  onClickExportCsv?: () => Promise<void>;
  onClickExportWord?: () => Promise<void>;
};

const CsTable = <TData extends RowData>(props: CsTableProps<TData>) => {
  const [columnPinning, setColumnPinning] = useState<ColumnPinningState>(
    props.columnPinning || { left: [], right: [] }
  );
  const [columnVisibility, setColumnVisibility] = useState({});
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: pageSizeOptions[0],
  });

  const tsTable = useReactTable<TData>({
    // Rows and Columns
    data: props.data,
    columns: props.columns,

    // Register core table
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: props.disablePagination ? undefined : getPaginationRowModel(),

    // Configurations
    defaultColumn: {
      size: 200,
      minSize: 50,
      maxSize: 500,
    },
    columnResizeMode: 'onChange',
    columnResizeDirection: 'ltr',
    groupedColumnMode: 'reorder',
    renderFallbackValue: undefined,
    autoResetPageIndex: true,

    // State
    state: {
      columnPinning: columnPinning,
      columnVisibility: columnVisibility,
      pagination: pagination,
    },
    onStateChange(): void {},
    onColumnPinningChange: setColumnPinning,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
  });

  return (
    <div className={'h-full w-full p-1'}>
      <div className={'overflow-hidden rounded-2xl border border-gray-300 p-1'}>
        <div className={'overflow-hidden rounded-2xl'}>
          <div
            className={`${props.overflow ? 'overflow-x-auto' : 'overflow-x-auto'} w-full ${props.tableClassName ? props.tableClassName : ''}`}
          >
            <table
              className={`box-border w-full border-collapse divide-gray-200 overflow-y-auto rounded-xl`}
              {...(() => {
                if (props.overflow) {
                  return {
                    style: {
                      width: tsTable.getCenterTotalSize(),
                    },
                  };
                }
              })()}
            >
              <CsTableHeader tsTable={tsTable} />
              <CsTableBody tsTable={tsTable} />
            </table>
          </div>
          <div
            className={'flex items-center justify-between border-t border-gray-200 bg-white pt-1'}
          >
            {!props.disablePagination && <CsTablePaging tsTable={tsTable} />}
            {props.disablePagination && <div />}
            <CsTableSetting
              tsTable={tsTable}
              onClickExportCsv={props.onClickExportCsv}
              onClickExportExcel={props.onClickExportExcel}
              onClickExportPdf={props.onClickExportPdf}
              onClickExportWord={props.onClickExportWord}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CsTable;
