import { RowData, Table } from '@tanstack/table-core';
import CsTableFooterCell from '@/components/table/cs-table-footer-cell.tsx';

type CsTableFooterProps<TData> = {
  tsTable: Table<TData>;
};

const CsTableFooter = <TData extends RowData>(props: CsTableFooterProps<TData>) => {
  return (
    <tfoot className={'sticky bottom-0 z-10'}>
      {props.tsTable.getFooterGroups().map((footerGroup) => (
        <tr key={footerGroup.id}>
          {footerGroup.headers.map((header) => (
            <CsTableFooterCell key={header.id} header={header} tsTable={props.tsTable} />
          ))}
        </tr>
      ))}
    </tfoot>
  );
};

export default CsTableFooter;
