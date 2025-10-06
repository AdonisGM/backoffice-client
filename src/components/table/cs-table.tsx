import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
import { RowData, ColumnDef } from '@tanstack/table-core';
import CsTableHeader from '@/components/table/cs-table-header.tsx';
import CsTableBody from '@/components/table/cs-table-body.tsx';
import CsTableFooter from '@/components/table/cs-table-footer.tsx';

type CsTableProps<TData extends RowData> = {
  columns: ColumnDef<TData, any>[];
  data: TData[];
};

const CsTable = <TData extends RowData>(props: CsTableProps<TData>) => {
  const tsTable = useReactTable<TData>({
    columns: props.columns,
    getCoreRowModel: getCoreRowModel(),
    onStateChange(): void {},
    data: props.data,
    renderFallbackValue: undefined,
    state: undefined,
  });

  return (
    <div className={'p-1'}>
      <div className={'rounded-2xl border border-gray-300 p-1'}>
        <table
          className={'box-border w-full border-collapse divide-gray-200 overflow-hidden rounded-xl'}
        >
          <CsTableHeader tsTable={tsTable} />
          <CsTableBody tsTable={tsTable} />
          <CsTableFooter tsTable={tsTable} />
        </table>
      </div>
    </div>
  );
};

export default CsTable;
