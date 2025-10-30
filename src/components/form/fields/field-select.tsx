import { Select, SelectItem } from '@heroui/react';
import { useFieldContext } from '@/components/form';

type FieldSelectProps = {
  options: { key: string; label: string }[];
  className?: string;
  label?: string;
  placeholder?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  onChange?: (value: string | null) => void;
};

const FieldSelect = (props: FieldSelectProps) => {
  const field = useFieldContext<string | null>();

  return (
    <div className={props.className}>
      <Select
        isDisabled={props.isDisabled}
        isRequired={props.isRequired}
        label={props.label}
        labelPlacement={'outside'}
        placeholder={props.placeholder}
        selectedKeys={field.state.value ? new Set([field.state.value]) : new Set()}
        selectionMode={'single'}
        size={'sm'}
        variant={'flat'}
        onSelectionChange={(value) => {
          field.handleChange(value.currentKey || null);
          props.onChange && props.onChange(value.currentKey || null);
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
