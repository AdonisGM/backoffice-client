import { useMemo, useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import CsTable from '@/components/table/cs-table.tsx';

type User = {
  id: number;
  name: string;
  email: string;
};

const AnalystsAssetComponent = () => {
  const columnHelper = createColumnHelper<User>();
  const columns = useMemo(
    () => [
      columnHelper.accessor('id', {
        header: 'ID',
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('name', {
        header: 'Name',
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('email', {
        header: 'Email',
        cell: (info) => info.getValue(),
      }),
    ],
    []
  );

  const [data] = useState(() => [
    { id: 1, name: 'John Doe', email: 'demo@example.com' },
    { id: 2, name: 'Jane Smith', email: 'demo1@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'demo2@example.com' },
  ]);

  return <CsTable<User> columns={columns} data={data} />;
};

export default AnalystsAssetComponent;
