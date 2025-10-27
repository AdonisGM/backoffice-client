import { createFormHook, useStore } from '@tanstack/react-form';
import { useState } from 'react';
import FieldInputText from '@/components/form/fields/field-input-text.tsx';
import FieldInputPassword from '@/components/form/fields/field-input-password.tsx';
import ButtonSubmit from '@/components/form/buttons/button-submit.tsx';
import { fieldContext, formContext } from '@/components/form';
import FieldInputNumber from '@/components/form/fields/field-input-number.tsx';
import FieldInputAutocomplete from '@/components/form/fields/field-input-autocomplete.tsx';
import FieldSelect from '@/components/form/fields/field-input-select.tsx';

const { useAppForm } = createFormHook({
  fieldComponents: {
    FieldInputText,
    FieldInputPassword,
    FieldInputNumber,
    FieldInputAutocomplete,
    FieldSelect,
  },
  formComponents: {
    ButtonSubmit,
  },
  fieldContext,
  formContext,
});

const PolicyPage = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [requireValidation, setRequireValidation] = useState(false);

  const form = useAppForm({
    defaultValues: {
      text: '',
      pass: '',
      number: '',
      autocomplete: '',
      autocompleteAsync: '',
      select: '',
    },
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
          className={'w-4/10'}
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit().then();
          }}
        >
          <form.AppField name="text">
            {(field) => (
              <field.FieldInputText
                className={'mt-4'}
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
                className={'mt-4'}
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
                className={'mt-4'}
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
                className={'mt-4'}
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
                className={'mt-4'}
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
