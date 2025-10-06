import { Input, InputProps } from '@heroui/react';

import { useFieldContext } from '@/components/form';

const FieldInputText = (props: InputProps) => {
  const field = useFieldContext<string>();

  return (
    <Input
      className={props.className}
      classNames={{
        label: 'pb-1',
        input: 'text-xs',
      }}
      labelPlacement={'outside-top'}
      radius={'sm'}
      size={'sm'}
      type={'text'}
      variant={'flat'}
      {...props}
      // Tanstack Form props
      errorMessage={
        !field.state.meta.isValid
          ? field.state.meta.errors.map((e) => e.message).join('; ')
          : undefined
      }
      isInvalid={!field.state.meta.isValid}
      value={field.state.value}
      onBlur={(e) => {
        field.handleBlur();
        props.onBlur && props.onBlur(e);
      }}
      onChange={(e) => {
        field.handleChange(e.target.value);
        props.onChange && props.onChange(e);
      }}
    />
  );
};

export default FieldInputText;
