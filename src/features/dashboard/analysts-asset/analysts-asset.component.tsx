import { useMemo, useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import CsTable from '@/components/table/cs-table.tsx';
import { getDefaultColumnAccessor } from '@/configs/table-config.ts';

type User = {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
};

const AnalystsAssetComponent = () => {
  const columnHelper = createColumnHelper<User>();
  const columns = useMemo(
    () => [
      columnHelper.group({
        header: 'User Info',
        footer: () => `Total Users:`,
        columns: [
          columnHelper.accessor('id', {
            header: 'ID',
            ...getDefaultColumnAccessor<User>(),
            size: 50,
          }),
          columnHelper.accessor('name', {
            header: 'Name',
            ...getDefaultColumnAccessor<User>(),
            size: 50,
          }),
        ],
      }),
      columnHelper.accessor('email', {
        header: 'Email',
        ...getDefaultColumnAccessor<User>(),
        size: 50,
      }),
      columnHelper.accessor('address', {
        header: 'Address',
        ...getDefaultColumnAccessor<User>(),
        size: 50,
      }),
      columnHelper.accessor('phone', {
        header: 'Phone',
        ...getDefaultColumnAccessor<User>(),
        size: 50,
      }),
    ],
    []
  );

  const [data] = useState(() => [
    {
      id: 1,
      name: 'John Doe',
      email: 'demo@example.com',
      address:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      phone: '555-123-4567',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'demo1@example.com',
      address:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      phone: '555-987-6543',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'demo2@example.com',
      address:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      phone: '555-456-7890',
    },
    {
      id: 4,
      name: 'Bob Brown',
      email: 'demo3@example.com',
      address:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      phone: '555-321-6549',
    },
  ]);

  return (
    <div className={'w-screen'}>
      <CsTable<User> columns={columns} data={data} />
    </div>
  );
};

export default AnalystsAssetComponent;
