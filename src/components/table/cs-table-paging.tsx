import { Button, Select, SelectItem, Tooltip } from '@heroui/react';
import { RowData, Table } from '@tanstack/table-core';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { pageSizeOptions } from '@/configs/table-config.ts';

type CsTablePagingProps<TData> = {
  tsTable: Table<TData>;
};

const CsTablePaging = <TData extends RowData>(props: CsTablePagingProps<TData>) => {
  const [page, setPage] = useState<string>(
    String(props.tsTable.getState().pagination.pageIndex + 1)
  );

  const { t } = useTranslation('table');

  useEffect(() => {
    const timeout = setTimeout(() => {
      const pageIndex = Number(page) - 1;

      if (!isNaN(pageIndex) && pageIndex >= 0 && pageIndex < props.tsTable.getPageCount()) {
        props.tsTable.setPageIndex(pageIndex);
      } else {
        setPage(String(props.tsTable.getState().pagination.pageIndex + 1));
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [page]);

  return (
    <div className={'flex gap-1 p-1'}>
      <Tooltip color="primary" content={t('button.first_page')} delay={1000} size={'sm'}>
        <Button
          isIconOnly
          color={'primary'}
          isDisabled={!props.tsTable.getCanPreviousPage()}
          radius={'sm'}
          size={'sm'}
          onPress={() => props.tsTable.firstPage()}
        >
          <ChevronsLeft size={16} />
        </Button>
      </Tooltip>
      <Tooltip color="primary" content={t('button.previous_page')} delay={1000} size={'sm'}>
        <Button
          isIconOnly
          color={'primary'}
          isDisabled={!props.tsTable.getCanPreviousPage()}
          radius={'sm'}
          size={'sm'}
          onPress={() => props.tsTable.previousPage()}
        >
          <ChevronLeft size={16} />
        </Button>
      </Tooltip>
      <div className={'mx-2 flex items-center gap-1'}>
        <p className={'text-sm'}>
          {props.tsTable.getState().pagination.pageIndex + 1} {t('label.of')}{' '}
          {props.tsTable.getPageCount().toLocaleString()}
        </p>
      </div>
      <Tooltip color="primary" content={t('button.next_page')} delay={1000} size={'sm'}>
        <Button
          isIconOnly
          color={'primary'}
          isDisabled={!props.tsTable.getCanNextPage()}
          radius={'sm'}
          size={'sm'}
          onPress={() => props.tsTable.nextPage()}
        >
          <ChevronRight size={16} />
        </Button>
      </Tooltip>
      <Tooltip color="primary" content={t('button.last_page')} delay={1000} size={'sm'}>
        <Button
          isIconOnly
          color={'primary'}
          isDisabled={!props.tsTable.getCanNextPage()}
          radius={'sm'}
          size={'sm'}
          onPress={() => props.tsTable.lastPage()}
        >
          <ChevronsRight size={16} />
        </Button>
      </Tooltip>
      <div className={'ml-2 flex items-center gap-1'}>
        <p className={'text-sm'}>{t('label.page_size')}: </p>
        <Select
          aria-label={'Page Size'}
          className={'w-20'}
          selectedKeys={new Set([String(props.tsTable.getState().pagination.pageSize)])}
          size={'sm'}
          onSelectionChange={(keys) => {
            props.tsTable.setPageSize(Number(Array.from(keys)[0]));
          }}
        >
          {pageSizeOptions.map((pageSize) => (
            <SelectItem key={String(pageSize)}>{String(pageSize)}</SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default CsTablePaging;
