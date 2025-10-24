import { LockKeyhole, LockKeyholeOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const StatusSystemComponent = () => {
  const { t } = useTranslation('header');
  const [locked] = useState(false);

  return (
    <div
      className={`flex flex-row items-center gap-2 rounded-full ${locked ? 'bg-red-50 hover:bg-red-100' : 'bg-green-50 hover:bg-green-100'} px-3 py-1 text-sm`}
    >
      {locked && <LockKeyhole className={'text-red-500'} size={16} />}
      {!locked && <LockKeyholeOpen className={'text-green-500'} size={16} />}
      <p className={`font-semibold ${locked ? 'text-red-600' : 'text-green-600'}`}>
        {t(locked ? 'locked' : 'unlocked')}
      </p>
    </div>
  );
};

export default StatusSystemComponent;
