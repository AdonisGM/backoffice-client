import { Button, ButtonProps } from '@heroui/react';

import { useFormContext } from '@/components/form';

const ButtonSubmit = (props: ButtonProps) => {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button
          isDisabled={isSubmitting}
          isLoading={isSubmitting}
          size={'sm'}
          type="submit"
          {...props}
        >
          {props.children || 'Submit'}
        </Button>
      )}
    </form.Subscribe>
  );
};

export default ButtonSubmit;
