import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
import { RowData, ColumnDef } from '@tanstack/table-core';
import CsTableHeader from '@/components/table/cs-table-header.tsx';
import CsTableBody from '@/components/table/cs-table-body.tsx';

type CsTableProps<TData extends RowData> = {
  columns: ColumnDef<TData, any>[];
  data: TData[];
};

const CsTable = <TData extends RowData>(props: CsTableProps<TData>) => {
  const tsTable = useReactTable<TData>({
    columns: props.columns,
    getCoreRowModel: getCoreRowModel(),
    onStateChange(): void {},
    columnResizeMode: 'onChange',
    columnResizeDirection: 'ltr',
    data: props.data,
    renderFallbackValue: undefined,
    state: undefined,
    defaultColumn: {
      size: 200,
      minSize: 50,
      maxSize: 500,
    },
  });

  return (
    <div className={'p-1'}>
      <div className={'overflow-hidden rounded-2xl border border-gray-300 p-1'}>
        <div className={'overflow-hidden rounded-2xl'}>
          <table
            className={'box-border w-full border-collapse divide-gray-200 rounded-xl'}
            {...{
              style: {
                width: tsTable.getCenterTotalSize(),
              },
            }}
          >
            <CsTableHeader tsTable={tsTable} />
            <CsTableBody tsTable={tsTable} />
          </table>
        </div>
      </div>
    </div>
  );
};

export default CsTable;
