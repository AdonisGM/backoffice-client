import { createFormHook, useStore } from '@tanstack/react-form';
import { useState } from 'react';
import { DateValue } from '@internationalized/date';
import { RangeValue } from '@heroui/react';
import FieldInputText from '@/components/form/fields/field-input-text.tsx';
import FieldInputPassword from '@/components/form/fields/field-input-password.tsx';
import ButtonSubmit from '@/components/form/buttons/button-submit.tsx';
import { fieldContext, formContext } from '@/components/form';
import FieldInputNumber from '@/components/form/fields/field-input-number.tsx';
import FieldInputAutocomplete from '@/components/form/fields/field-input-autocomplete.tsx';
import FieldSelect from '@/components/form/fields/field-select.tsx';
import FieldInputDate from '@/components/form/fields/field-input-date.tsx';
import FieldPickerDate from '@/components/form/fields/field-picker-date.tsx';
import FieldPickerDateRange from '@/components/form/fields/field-picker-date-range.tsx';

const { useAppForm } = createFormHook({
  fieldComponents: {
    FieldInputText,
    FieldInputPassword,
    FieldInputNumber,
    FieldInputAutocomplete,
    FieldSelect,
    FieldInputDate,
    FieldPickerDate,
    FieldPickerDateRange,
  },
  formComponents: {
    ButtonSubmit,
  },
  fieldContext,
  formContext,
});

type FormValues = {
  text: string;
  pass: string;
  number: number;
  autocomplete: string | null;
  autocompleteAsync: string | null;
  select: string | null;
  dateInput: DateValue | null;
  datePicker: DateValue | null;
  datePickerRange: RangeValue<DateValue> | null;
};

const defaultValues: FormValues = {
  text: '',
  pass: '',
  number: 0,
  autocomplete: null,
  autocompleteAsync: null,
  select: null,
  dateInput: null,
  datePicker: null,
  datePickerRange: null,
};

const PolicyPage = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [requireValidation, setRequireValidation] = useState(false);

  const form = useAppForm({
    defaultValues: defaultValues,
  });

  const firstName = useStore(form.store, (state) => state.values);

  return (
    <div className={'flex flex-row'}>
      <div className={'flex-1/2'}>
        <div>
          <input
            checked={isDisabled}
            id={'1'}
            type={'checkbox'}
            onChange={(e) => {
              setIsDisabled(e.target.checked);
            }}
          />
          <label className={'ml-2'} htmlFor={'1'}>
            Disable form submission
          </label>
        </div>
        <div>
          <input
            checked={requireValidation}
            id={'2'}
            type={'checkbox'}
            onChange={(e) => {
              setRequireValidation(e.target.checked);
            }}
          />
          <label className={'ml-2'} htmlFor={'2'}>
            Require field validation
          </label>
        </div>
        <form
          className={'m-4 grid grid-cols-2 gap-4'}
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit().then();
          }}
        >
          <form.AppField name="text">
            {(field) => (
              <field.FieldInputText
                isDisabled={isDisabled}
                isRequired={requireValidation}
                label={'Input text'}
                placeholder={'Enter text here'}
              />
            )}
          </form.AppField>
          <form.AppField name="pass">
            {(field) => (
              <field.FieldInputPassword
                isDisabled={isDisabled}
                isRequired={requireValidation}
                label={'Input password'}
                placeholder={'Enter password here'}
              />
            )}
          </form.AppField>
          <form.AppField name="number">
            {(field) => (
              <field.FieldInputNumber
                isDisabled={isDisabled}
                isRequired={requireValidation}
                label={'Input number'}
                placeholder={'Enter number here'}
              />
            )}
          </form.AppField>
          <form.AppField name="autocomplete">
            {(field) => (
              <field.FieldInputAutocomplete
                isDisabled={isDisabled}
                isRequired={requireValidation}
                label={'Input autocomplete'}
                options={[
                  {
                    key: 'option1',
                    label: 'Option 1',
                  },
                  {
                    key: 'option2',
                    label: 'Option 2',
                  },
                  {
                    key: 'option3',
                    label: 'Option 3',
                  },
                ]}
                placeholder={'Enter value here'}
              />
            )}
          </form.AppField>
          <form.AppField name="select">
            {(field) => (
              <field.FieldSelect
                isDisabled={isDisabled}
                isRequired={requireValidation}
                label={'Select input'}
                options={[
                  {
                    key: 'optionA',
                    label: 'Option A',
                  },
                  {
                    key: 'optionB',
                    label: 'Option B',
                  },
                  {
                    key: 'optionC',
                    label: 'Option C',
                  },
                ]}
                placeholder={'Select an option'}
              />
            )}
          </form.AppField>
          <form.AppField name="dateInput">
            {(field) => (
              <field.FieldInputDate
                isDisabled={isDisabled}
                isRequired={requireValidation}
                label={'Date input'}
              />
            )}
          </form.AppField>
          <form.AppField name="datePicker">
            {(field) => (
              <field.FieldPickerDate
                isDisabled={isDisabled}
                isRequired={requireValidation}
                label={'Date picker'}
              />
            )}
          </form.AppField>
          <form.AppField name="datePickerRange">
            {(field) => (
              <field.FieldPickerDateRange
                isDisabled={isDisabled}
                isRequired={requireValidation}
                label={'Date picker range'}
              />
            )}
          </form.AppField>
        </form>
      </div>
      <div className={'flex-1/2'}>
        <h2 className={'mt-8 text-lg font-bold'}>Form State:</h2>
        <pre className={'mt-4 rounded border bg-gray-100 p-4'}>
          {JSON.stringify(firstName, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default PolicyPage;
