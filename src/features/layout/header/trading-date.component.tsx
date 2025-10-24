import { useTranslation } from 'react-i18next';

const TradingDateComponent = () => {
  const { t } = useTranslation('header');

  return (
    <div
      className={
        'flex flex-row items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm hover:bg-gray-200'
      }
    >
      <p>{t('system_date')}:</p>
      <p>
        <strong>12/11/2025</strong>
      </p>
    </div>
  );
};

export default TradingDateComponent;
