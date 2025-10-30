import { Autocomplete, AutocompleteItem } from '@heroui/react';
import { useTranslation } from 'react-i18next';
import { Key, useState } from 'react';
import { useFieldContext } from '@/components/form';

type FieldInputAutocompleteProps = {
  className?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  isLoading?: boolean;
  label?: string;
  placeholder?: string;
  options: Array<{ key: string; label: string }>;
  onChange?: (value: string) => void;
};

type FieldState = {
  selectedKey: Key | null;
  inputValue: string;
  items: Array<{ key: string; label: string }>;
};

const FieldInputAutocomplete = (props: FieldInputAutocompleteProps) => {
  const { t } = useTranslation('form');
  const field = useFieldContext<string>();

  const [fieldState, setFieldState] = useState<FieldState>({
    selectedKey: '',
    inputValue: '',
    items: props.options,
  });

  const onSelectionChange = (key: Key | null) => {
    setFieldState((prevState) => {
      let selectedItem = prevState.items.find((option) => option.key === key);

      field.handleChange(key as string);
      props.onChange && props.onChange(key as string);

      return {
        inputValue: selectedItem?.label || '',
        selectedKey: key,
        items: props.options.filter((item) => item.label.includes(selectedItem?.label || '')),
      };
    });
  };

  const onInputChange = (value: string) => {
    setFieldState((prevState) => {
      if (value === '') {
        field.handleChange('');
      } else {
        field.handleChange(prevState.selectedKey as string);
      }

      return {
        inputValue: value,
        selectedKey: value === '' ? null : prevState.selectedKey,
        items: props.options.filter((item) => item.label.includes(value)),
      };
    });
  };

  const onOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      setFieldState((prevState) => ({
        inputValue: prevState.inputValue,
        selectedKey: prevState.selectedKey,
        items: props.options,
      }));
    }
  };

  return (
    <Autocomplete
      inputValue={fieldState.inputValue}
      isDisabled={props.isDisabled}
      isLoading={props.isLoading}
      isRequired={props.isRequired}
      items={fieldState.items}
      label={props.label}
      labelPlacement={'outside'}
      listboxProps={{ emptyContent: t('autocomplete.empty_content') }}
      placeholder={props.placeholder}
      radius={'sm'}
      selectedKey={fieldState.selectedKey as string | null}
      size={'sm'}
      type={'text'}
      variant={'flat'}
      onInputChange={onInputChange}
      onOpenChange={onOpenChange}
      onSelectionChange={onSelectionChange}
    >
      {(item) => (
        <AutocompleteItem key={item.key} className="capitalize" textValue={item.label}>
          {item.label}
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
};

export default FieldInputAutocomplete;
