import { Settings } from 'lucide-react';
import { Button, CircularProgress, Tooltip } from '@heroui/react';
import { RowData, Table } from '@tanstack/table-core';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import ExcelIcon from '@/assets/excel-svgrepo-com.svg';
import PdfIcon from '@/assets/pdf-svgrepo-com.svg';
import WordIcon from '@/assets/word-svgrepo-com.svg';
import CsvIcon from '@/assets/csv-svgrepo-com.svg';

type CsTableSettingProps<TData> = {
  tsTable: Table<TData>;
  onClickExportExcel?: () => Promise<void>;
  onClickExportPdf?: () => Promise<void>;
  onClickExportCsv?: () => Promise<void>;
  onClickExportWord?: () => Promise<void>;
};

const CsTableSetting = <TData extends RowData>(props: CsTableSettingProps<TData>) => {
  const [isPending, setIsPending] = useState(false);
  const [fileTypeExport, setFileTypeExport] = useState<string | undefined>(undefined);

  const { t } = useTranslation('table');

  return (
    <div className={'flex gap-1'}>
      <div className={'flex gap-1'}>
        <Tooltip color="primary" content={t('button.setting')} delay={1000} size={'sm'}>
          <Button isIconOnly color={'primary'} radius={'sm'} size={'sm'}>
            <Settings size={16} />
          </Button>
        </Tooltip>
      </div>
      <div className={'flex gap-1'}>
        {props.onClickExportExcel && (
          <Tooltip color="primary" content={t('button.export_excel')} delay={1000} size={'sm'}>
            <Button
              isIconOnly
              className={'bg-green-100'}
              color={'primary'}
              isDisabled={isPending}
              radius={'sm'}
              size={'sm'}
              onPress={() => {
                if (props.onClickExportExcel) {
                  setIsPending(true);
                  setFileTypeExport('excel');
                  props.onClickExportExcel().finally(() => {
                    setIsPending(false);
                    setFileTypeExport(undefined);
                  });
                }
              }}
            >
              {!(isPending && fileTypeExport === 'excel') && (
                <img alt={'Excel'} src={ExcelIcon} style={{ width: 20, height: 20 }} />
              )}
              {isPending && fileTypeExport === 'excel' && (
                <div className="scale-50">
                  <CircularProgress color={'primary'} size={'sm'} />
                </div>
              )}
            </Button>
          </Tooltip>
        )}
        {props.onClickExportPdf && (
          <Tooltip color="primary" content={t('button.export_pdf')} delay={1000} size={'lg'}>
            <Button
              isIconOnly
              className={'bg-red-100'}
              color={'primary'}
              isDisabled={isPending}
              radius={'sm'}
              size={'sm'}
              onPress={() => {
                if (props.onClickExportPdf) {
                  setIsPending(true);
                  setFileTypeExport('pdf');
                  props.onClickExportPdf().finally(() => {
                    setIsPending(false);
                    setFileTypeExport(undefined);
                  });
                }
              }}
            >
              {!(isPending && fileTypeExport === 'pdf') && (
                <img alt={'Pdf'} src={PdfIcon} style={{ width: 16, height: 16 }} />
              )}
              {isPending && fileTypeExport === 'pdf' && (
                <div className="scale-50">
                  <CircularProgress color={'primary'} size={'sm'} />
                </div>
              )}
            </Button>
          </Tooltip>
        )}
        {props.onClickExportWord && (
          <Tooltip color="primary" content={t('button.export_word')} delay={1000} size={'sm'}>
            <Button
              isIconOnly
              className={'bg-blue-200'}
              color={'primary'}
              isDisabled={isPending}
              radius={'sm'}
              size={'sm'}
              onPress={() => {
                if (props.onClickExportWord) {
                  setIsPending(true);
                  setFileTypeExport('word');
                  props.onClickExportWord().finally(() => {
                    setIsPending(false);
                    setFileTypeExport(undefined);
                  });
                }
              }}
            >
              {!(isPending && fileTypeExport === 'word') && (
                <img alt={'Word'} src={WordIcon} style={{ width: 20, height: 20 }} />
              )}
              {isPending && fileTypeExport === 'word' && (
                <div className="scale-50">
                  <CircularProgress color={'primary'} size={'sm'} />
                </div>
              )}
            </Button>
          </Tooltip>
        )}
        {props.onClickExportCsv && (
          <Tooltip color="primary" content={t('button.export_csv')} delay={1000} size={'sm'}>
            <Button
              isIconOnly
              className={'bg-yellow-200'}
              color={'primary'}
              isDisabled={isPending}
              radius={'sm'}
              size={'sm'}
              onPress={() => {
                if (props.onClickExportCsv) {
                  setIsPending(true);
                  setFileTypeExport('csv');
                  props.onClickExportCsv().finally(() => {
                    setIsPending(false);
                    setFileTypeExport(undefined);
                  });
                }
              }}
            >
              {!(isPending && fileTypeExport === 'csv') && (
                <img alt={'Csv'} src={CsvIcon} style={{ width: 20, height: 20 }} />
              )}
              {isPending && fileTypeExport === 'csv' && (
                <div className="scale-50">
                  <CircularProgress color={'primary'} size={'sm'} />
                </div>
              )}
            </Button>
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default CsTableSetting;
