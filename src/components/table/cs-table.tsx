import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  Row,
  OnChangeFn,
} from '@tanstack/react-table';
import { RowData, ColumnDef, ColumnPinningState, RowSelectionState } from '@tanstack/table-core';
import { useState } from 'react';
import { Chip, CircularProgress } from '@heroui/react';
import { useTranslation } from 'react-i18next';
import CsTableHeader from '@/components/table/cs-table-header.tsx';
import CsTableBody from '@/components/table/cs-table-body.tsx';
import { getDefaultColumnAccessor, pageSizeOptions } from '@/configs/table-config.ts';
import CsTablePaging from '@/components/table/cs-table-paging.tsx';
import CsTableSetting from '@/components/table/cs-table-setting.tsx';
import CsTableFooter from '@/components/table/cs-table-footer.tsx';
import CsTableCheckbox from '@/components/table/cs-table-checkbox.tsx';

type CsTableProps<TData extends RowData> = {
  columns: ColumnDef<TData, any>[];
  data: TData[];

  isOverflow?: boolean;
  isDisablePagination?: boolean;
  isLoading?: boolean;
  isShowFooter?: boolean;
  isShowSelectionColumn?: boolean | ((row: Row<TData>) => boolean) | undefined;

  rowId:
    | ((originalRow: TData, index: number, parent?: Row<TData> | undefined) => string)
    | undefined;
  columnPinning?: ColumnPinningState;
  rowSelection?: RowSelectionState | undefined;
  tableClassName?: string;

  onClickExportExcel?: () => Promise<void>;
  onClickExportPdf?: () => Promise<void>;
  onClickExportCsv?: () => Promise<void>;
  onClickExportWord?: () => Promise<void>;

  onRowSelectionChange?: OnChangeFn<RowSelectionState> | undefined;
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
    columns: props.isShowSelectionColumn
      ? [
          {
            ...getDefaultColumnAccessor<TData>(),
            id: 'select',
            size: 10,
            header: ({ table }) => (
              <CsTableCheckbox
                isIndeterminate={table.getIsSomePageRowsSelected()}
                isSelected={table.getIsAllPageRowsSelected()}
                onChange={table.getToggleAllPageRowsSelectedHandler()}
              />
            ),
            cell: ({ row }) => (
              <CsTableCheckbox
                isDisabled={!row.getCanSelect()}
                isIndeterminate={row.getIsSomeSelected()}
                isSelected={row.getIsSelected()}
                onChange={row.getToggleSelectedHandler()}
              />
            ),
          },
          ...props.columns,
        ]
      : props.columns,

    // Register core table
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: props.isDisablePagination ? undefined : getPaginationRowModel(),

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
    enableRowSelection: props.isShowSelectionColumn,
    getRowId: props.rowId,

    // State
    state: {
      columnPinning: columnPinning,
      columnVisibility: columnVisibility,
      pagination: pagination,
      rowSelection: props.rowSelection,
    },
    onStateChange(): void {},
    onColumnPinningChange: setColumnPinning,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: props.onRowSelectionChange,
    onPaginationChange: setPagination,

    // Debugging
    debugAll: false, // Only for development
  });

  const { t } = useTranslation('table');

  return (
    <div className={'w-full p-2'}>
      <div className={'w-full overflow-hidden rounded-2xl border border-gray-300 p-1'}>
        <div className={'w-full overflow-hidden rounded-2xl'}>
          <div
            className={`${props.isOverflow ? 'overflow-x-auto' : 'overflow-x-auto'} w-full ${props.tableClassName ? props.tableClassName : ''}`}
          >
            <table
              className={`box-border w-full border-collapse divide-gray-200 overflow-y-auto rounded-xl`}
              {...(() => {
                if (props.isOverflow) {
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
              {props.isShowFooter && <CsTableFooter tsTable={tsTable} />}
            </table>
          </div>
          {props.isLoading && (
            <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-white/70">
              <CircularProgress color={'primary'} size={'md'} />
            </div>
          )}
          <div
            className={'flex items-center justify-between border-t border-gray-200 bg-white pt-1'}
          >
            <div className={'flex items-center gap-2'}>
              {!props.isDisablePagination && <CsTablePaging tsTable={tsTable} />}
              {props.rowSelection && Object.keys(props.rowSelection).length > 0 && (
                <Chip size={'sm'}>
                  <p className={'text-sm'}>
                    <strong>{Object.keys(props.rowSelection).length}</strong>{' '}
                    {t('label.row_selected')}
                  </p>
                </Chip>
              )}
            </div>
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
