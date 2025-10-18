import { RowData, Table } from '@tanstack/table-core';
import CsTableFooterCell from '@/components/table/cs-table-footer-cell.tsx';

type CsTableFooterProps<TData> = {
  tsTable: Table<TData>;
};

const CsTableFooter = <TData extends RowData>(props: CsTableFooterProps<TData>) => {
  return (
    <tfoot className={'sticky bottom-0 z-10'}>
      <tr>
        {props.tsTable
          .getFooterGroups()
          .map((footerGroup) => {
            return footerGroup.headers;
          })
          .flat()
          .filter((header) => {
            return header.getLeafHeaders().length === 1;
          })
          .map((header) => {
            return <CsTableFooterCell key={header.id} header={header} tsTable={props.tsTable} />;
          })}
      </tr>
    </tfoot>
  );
};

export default CsTableFooter;
