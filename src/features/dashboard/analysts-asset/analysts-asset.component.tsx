import { useEffect, useMemo, useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { getDefaultColumnAccessor, getDefaultColumnGroup } from '@/configs/table-config.ts';
import CsTable from '@/components/table/cs-table.tsx';

type User = {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  nickname: string;
  age: number;
  t: string;
};

const AnalystsAssetComponent = () => {
  const columnHelper = createColumnHelper<User>();
  const [data, setData] = useState<User[]>([]);

  const columns = useMemo(
    () => [
      columnHelper.accessor('id', {
        ...getDefaultColumnAccessor<User>(),
        header: 'ID',
        size: 50,
        enablePinning: true,
      }),
      columnHelper.group({
        ...getDefaultColumnGroup<User>(),
        header: 'User Info',
        columns: [
          columnHelper.accessor('name', {
            ...getDefaultColumnAccessor<User>(),
            header: 'Name',
            size: 250,
          }),
          columnHelper.accessor('email', {
            ...getDefaultColumnAccessor<User>(),
            header: 'Email',
            size: 450,
          }),
          columnHelper.accessor('address', {
            ...getDefaultColumnAccessor<User>(),
            header: 'Address',
            size: 450,
          }),
          columnHelper.accessor('phone', {
            ...getDefaultColumnAccessor<User>(),
            header: 'Phone',
            size: 350,
          }),
        ],
      }),
      columnHelper.accessor('website', {
        ...getDefaultColumnAccessor<User>(),
        header: 'Website',
        size: 350,
      }),
      columnHelper.group({
        ...getDefaultColumnGroup<User>(),
        header: 'Company Info',
        columns: [
          columnHelper.accessor((row) => row.company.name, {
            ...getDefaultColumnAccessor<User>(),
            id: 'companyName',
            header: 'Company Name',
            size: 250,
          }),
          columnHelper.accessor((row) => row.company.catchPhrase, {
            ...getDefaultColumnAccessor<User>(),
            id: 'catchPhrase',
            header: 'Catch Phrase',
            size: 350,
          }),
          columnHelper.accessor((row) => row.company.bs, {
            ...getDefaultColumnAccessor<User>(),
            id: 'bs',
            header: 'BS',
            size: 250,
          }),
        ],
      }),
      columnHelper.accessor('nickname', {
        ...getDefaultColumnAccessor<User>(),
        header: 'Nickname',
        size: 150,
      }),
      columnHelper.accessor('age', {
        ...getDefaultColumnAccessor<User>(),
        header: 'Age',
        size: 100,
      }),
      columnHelper.accessor('t', {
        ...getDefaultColumnAccessor<User>(),
        header: 'Type',
        size: 150,
      }),
    ],
    []
  );

  useEffect(() => {
    setData([
      {
        id: 1,
        name: 'John Doe',
        email: 'john1@example.com',
        address: '123 Main St, City A',
        phone: '555-123-4567',
        website: 'johndoe.com',
        company: { name: 'Company A', catchPhrase: 'Innovate!', bs: 'tech' },
        nickname: 'Johnny',
        age: 28,
        t: 'Alpha',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane2@example.com',
        address: '456 Elm St, City B',
        phone: '555-987-6543',
        website: 'janesmith.com',
        company: { name: 'Company B', catchPhrase: 'Create!', bs: 'design' },
        nickname: 'Janey',
        age: 32,
        t: 'Beta',
      },
      {
        id: 3,
        name: 'Alice Johnson',
        email: 'alice3@example.com',
        address: '789 Oak St, City C',
        phone: '555-456-7890',
        website: 'alicejohnson.com',
        company: { name: 'Company C', catchPhrase: 'Build!', bs: 'construction' },
        nickname: 'Ally',
        age: 25,
        t: 'Gamma',
      },
      {
        id: 4,
        name: 'Bob Brown',
        email: 'bob4@example.com',
        address: '321 Pine St, City D',
        phone: '555-321-6549',
        website: 'bobbrown.com',
        company: { name: 'Company D', catchPhrase: 'Grow!', bs: 'agriculture' },
        nickname: 'Bobby',
        age: 40,
        t: 'Delta',
      },
      {
        id: 5,
        name: 'Charlie Black',
        email: 'charlie5@example.com',
        address: '654 Maple St, City E',
        phone: '555-654-3210',
        website: 'charlieblack.com',
        company: { name: 'Company E', catchPhrase: 'Expand!', bs: 'marketing' },
        nickname: 'Chuck',
        age: 29,
        t: 'Epsilon',
      },
      {
        id: 6,
        name: 'Diana White',
        email: 'diana6@example.com',
        address: '987 Cedar St, City F',
        phone: '555-789-0123',
        website: 'dianawhite.com',
        company: { name: 'Company F', catchPhrase: 'Connect!', bs: 'networking' },
        nickname: 'Di',
        age: 35,
        t: 'Zeta',
      },
      {
        id: 7,
        name: 'Ethan Green',
        email: 'ethan7@example.com',
        address: '159 Spruce St, City G',
        phone: '555-159-7536',
        website: 'ethangreen.com',
        company: { name: 'Company G', catchPhrase: 'Deliver!', bs: 'logistics' },
        nickname: 'E',
        age: 27,
        t: 'Eta',
      },
      {
        id: 8,
        name: 'Fiona Blue',
        email: 'fiona8@example.com',
        address: '753 Willow St, City H',
        phone: '555-753-1598',
        website: 'fionablue.com',
        company: { name: 'Company H', catchPhrase: 'Secure!', bs: 'security' },
        nickname: 'Fi',
        age: 31,
        t: 'Theta',
      },
      {
        id: 9,
        name: 'George Red',
        email: 'george9@example.com',
        address: '852 Birch St, City I',
        phone: '555-852-9637',
        website: 'georgered.com',
        company: { name: 'Company I', catchPhrase: 'Support!', bs: 'services' },
        nickname: 'Geo',
        age: 38,
        t: 'Iota',
      },
      {
        id: 10,
        name: 'Hannah Gold',
        email: 'hannah10@example.com',
        address: '963 Aspen St, City J',
        phone: '555-963-8521',
        website: 'hannahgold.com',
        company: { name: 'Company J', catchPhrase: 'Lead!', bs: 'management' },
        nickname: 'Han',
        age: 26,
        t: 'Kappa',
      },
      {
        id: 11,
        name: 'Ian Silver',
        email: 'ian11@example.com',
        address: '147 Chestnut St, City K',
        phone: '555-147-2583',
        website: 'iansilver.com',
        company: { name: 'Company K', catchPhrase: 'Guide!', bs: 'consulting' },
        nickname: 'I',
        age: 33,
        t: 'Lambda',
      },
      {
        id: 12,
        name: 'Julia Bronze',
        email: 'julia12@example.com',
        address: '258 Walnut St, City L',
        phone: '555-258-1476',
        website: 'juliabronze.com',
        company: { name: 'Company L', catchPhrase: 'Teach!', bs: 'education' },
        nickname: 'Jules',
        age: 30,
        t: 'Mu',
      },
      {
        id: 13,
        name: 'Kevin Copper',
        email: 'kevin13@example.com',
        address: '369 Poplar St, City M',
        phone: '555-369-7412',
        website: 'kevincopper.com',
        company: { name: 'Company M', catchPhrase: 'Design!', bs: 'architecture' },
        nickname: 'Kev',
        age: 36,
        t: 'Nu',
      },
      {
        id: 14,
        name: 'Laura Steel',
        email: 'laura14@example.com',
        address: '741 Sycamore St, City N',
        phone: '555-741-3698',
        website: 'laurasteel.com',
        company: { name: 'Company N', catchPhrase: 'Invent!', bs: 'engineering' },
        nickname: 'Laur',
        age: 24,
        t: 'Xi',
      },
      {
        id: 15,
        name: 'Mike Iron',
        email: 'mike15@example.com',
        address: '852 Redwood St, City O',
        phone: '555-852-1473',
        website: 'mikeiron.com',
        company: { name: 'Company O', catchPhrase: 'Analyze!', bs: 'analytics' },
        nickname: 'Mikey',
        age: 39,
        t: 'Omicron',
      },
      {
        id: 16,
        name: 'Nina Platinum',
        email: 'nina16@example.com',
        address: '963 Magnolia St, City P',
        phone: '555-963-2584',
        website: 'ninaplatinum.com',
        company: { name: 'Company P', catchPhrase: 'Plan!', bs: 'strategy' },
        nickname: 'Nin',
        age: 28,
        t: 'Pi',
      },
      {
        id: 17,
        name: 'Oscar Zinc',
        email: 'oscar17@example.com',
        address: '147 Palm St, City Q',
        phone: '555-147-3695',
        website: 'oscarzinc.com',
        company: { name: 'Company Q', catchPhrase: 'Test!', bs: 'quality' },
        nickname: 'Oz',
        age: 34,
        t: 'Rho',
      },
      {
        id: 18,
        name: 'Paula Lead',
        email: 'paula18@example.com',
        address: '258 Fir St, City R',
        phone: '555-258-9632',
        website: 'paulalead.com',
        company: { name: 'Company R', catchPhrase: 'Train!', bs: 'fitness' },
        nickname: 'Pau',
        age: 29,
        t: 'Sigma',
      },
      {
        id: 19,
        name: 'Quentin Tin',
        email: 'quentin19@example.com',
        address: '369 Alder St, City S',
        phone: '555-369-2587',
        website: 'quentintin.com',
        company: { name: 'Company S', catchPhrase: 'Care!', bs: 'health' },
        nickname: 'Q',
        age: 37,
        t: 'Tau',
      },
      {
        id: 20,
        name: 'Rachel Nickel',
        email: 'rachel20@example.com',
        address: '741 Beech St, City T',
        phone: '555-741-9634',
        website: 'rachelnickel.com',
        company: { name: 'Company T', catchPhrase: 'Serve!', bs: 'hospitality' },
        nickname: 'Rach',
        age: 27,
        t: 'Upsilon',
      },
    ]);
  }, []);

  return (
    <div className={'w-full'}>
      <CsTable<User>
        columnPinning={{
          left: ['id'],
          right: ['t'],
        }}
        columns={columns}
        data={data}
        isLoading={false}
        isOverflow={true}
        rowId={(originalRow) => String(originalRow.id)}
        onClickExportCsv={async () => {
          return new Promise<void>((resolve) => {
            setTimeout(() => {
              resolve();
            }, 2000);
          });
        }}
        onClickExportExcel={async () => {
          return new Promise<void>((resolve) => {
            setTimeout(() => {
              resolve();
            }, 2000);
          });
        }}
        onClickExportPdf={async () => {
          return new Promise<void>((resolve) => {
            setTimeout(() => {
              resolve();
            }, 2000);
          });
        }}
        onClickExportWord={async () => {
          return new Promise<void>((resolve) => {
            setTimeout(() => {
              resolve();
            }, 2000);
          });
        }}
      />
    </div>
  );
};

export default AnalystsAssetComponent;
