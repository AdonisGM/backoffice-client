import { NumberInput, NumberInputProps } from '@heroui/react';

import { useFieldContext } from '@/components/form';

type FieldInputNumberProps = NumberInputProps & {
  maximumFractionDigits?: number | undefined;
};

const FieldInputNumber = (props: FieldInputNumberProps) => {
  const field = useFieldContext<number>();

  return (
    <div className={props.className}>
      <NumberInput
        autoComplete={'off'}
        classNames={{
          inputWrapper: 'shadow-xs',
          input: 'text-right',
        }}
        endContent={'%'}
        errorMessage={
          !field.state.meta.isValid
            ? field.state.meta.errors.map((e) => e.message).join('; ')
            : undefined
        }
        formatOptions={{
          maximumFractionDigits: props.maximumFractionDigits ? props.maximumFractionDigits : 0,
        }}
        hideStepper={true}
        isInvalid={!field.state.meta.isValid}
        isWheelDisabled={true}
        labelPlacement={'outside'}
        radius={'sm'}
        size={'sm'}
        type={'number'}
        value={field.state.value}
        variant={'flat'}
        {...props}
        onBlur={(e) => {
          field.handleBlur();
          props.onBlur && props.onBlur(e);
        }}
        onValueChange={(e) => {
          field.handleChange(e);
          props.onChange && props.onChange(e);
        }}
      />
    </div>
  );
};

export default FieldInputNumber;
