import { Select, SelectItem, Selection } from '@heroui/react';
import { useFieldContext } from '@/components/form';

type FieldSelectProps = {
  options: { key: string; label: string }[];
  className?: string;
  label?: string;
  placeholder?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
};

const FieldSelect = (props: FieldSelectProps) => {
  const field = useFieldContext<Selection>();

  return (
    <div className={props.className}>
      <Select
        isDisabled={props.isDisabled}
        isRequired={props.isRequired}
        label={props.label}
        labelPlacement={'outside'}
        placeholder={props.placeholder}
        selectedKeys={field.state.value}
        selectionMode={'single'}
        size={'sm'}
        variant={'flat'}
        onSelectionChange={(value) => {
          field.handleChange(value);
        }}
      >
        {props.options.map((option) => (
          <SelectItem key={option.key}>{option.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default FieldSelect;
