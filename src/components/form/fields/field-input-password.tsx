import { Input, InputProps } from '@heroui/react';

import { useFieldContext } from '@/components/form';

const FieldInputPassword = (props: InputProps) => {
  const field = useFieldContext<string>();

  return (
    <div className={props.className}>
      <Input
        autoComplete={'off'}
        labelPlacement={'outside-top'}
        radius={'sm'}
        size={'sm'}
        type={'password'}
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
    </div>
  );
};

export default FieldInputPassword;
