import { Select, SelectedItems, SelectItem } from '@heroui/react';
import { useTranslation } from 'react-i18next';
import { FlagComponent, US, VN } from 'country-flag-icons/react/1x1';
import { createElement } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/redux-hook.ts';
import { change } from '@/redux/slices/languageSlice.ts';

const languages = [
  { label: 'language.en', value: 'en', icon: US },
  { label: 'language.vi', value: 'vi', icon: VN },
];

const ChangeLanguage = () => {
  const { t } = useTranslation('setting');

  const language = useAppSelector((state) => state.language.value);
  const dispatch = useAppDispatch();

  return (
    <Select
      aria-label={'Change Language'}
      className={'w-fit'}
      classNames={{
        trigger: 'rounded-full w-40',
      }}
      items={languages}
      renderValue={(
        items: SelectedItems<{
          label: string;
          value: string;
          icon: FlagComponent;
        }>
      ) => {
        return items.map((item) => (
          <div key={item.data?.value} className="flex items-center gap-2">
            <div>
              {item.data?.icon &&
                createElement(item.data.icon, {
                  className: 'w-4 h-4 rounded-full object-contain',
                })}
            </div>
            <div className="flex flex-col">
              <span className="text-small">{t(item.data!.label)}</span>
            </div>
          </div>
        ));
      }}
      selectedKeys={[language]}
      size={'sm'}
      onSelectionChange={(value) => {
        if (!value.currentKey) {
          return;
        }
        dispatch(change(value.currentKey));
      }}
    >
      {(language) => (
        <SelectItem key={language.value} textValue={language.label}>
          <div className="flex items-center gap-2">
            <div>
              <language.icon className="h-5 w-5 rounded-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-small">{t(language.label)}</span>
            </div>
          </div>
        </SelectItem>
      )}
    </Select>
  );
};

export default ChangeLanguage;
