import { Bell } from 'lucide-react';
import { Badge } from '@heroui/react';
import { useState } from 'react';

const NotificationComponent = () => {
  const [countNotifications] = useState<number>(0);

  return (
    <div
      className={
        'flex h-8 w-8 cursor-pointer flex-row items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200'
      }
    >
      <Badge
        color="danger"
        content={countNotifications}
        isInvisible={countNotifications === 0}
        shape="circle"
        size={'md'}
      >
        <Bell size={18} />
      </Badge>
    </div>
  );
};

export default NotificationComponent;
