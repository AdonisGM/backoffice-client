import { DateRangePicker, DateRangePickerProps, RangeValue } from '@heroui/react';
import { DateValue } from '@internationalized/date';
import { useFieldContext } from '@/components/form';
import LocaleProvider from '@/components/language/locale-provider.tsx';

const FieldPickerDateRange = (props: DateRangePickerProps) => {
  const field = useFieldContext<RangeValue<DateValue> | null>();

  return (
    <LocaleProvider>
      <DateRangePicker
        labelPlacement={'outside'}
        radius={'sm'}
        size={'sm'}
        variant={'flat'}
        {...props}
        errorMessage={
          !field.state.meta.isValid
            ? field.state.meta.errors.map((e) => e.message).join('; ')
            : undefined
        }
        isInvalid={!field.state.meta.isValid}
        label={props.label}
        placeholderValue={null}
        showMonthAndYearPickers={true}
        value={field.state.value}
        onBlur={(e) => {
          field.handleBlur();
          props.onBlur && props.onBlur(e);
        }}
        onChange={(e) => {
          field.handleChange(e);
          props.onChange && props.onChange(e);
        }}
      />
    </LocaleProvider>
  );
};

export default FieldPickerDateRange;
