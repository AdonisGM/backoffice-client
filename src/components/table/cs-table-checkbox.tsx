import { Checkbox } from '@heroui/react';
import { ChangeEventHandler } from 'react';

type CsTableCheckboxProps = {
  isSelected: boolean;
  isDisabled?: boolean;
  isIndeterminate: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const CsTableCheckbox = (props: CsTableCheckboxProps) => {
  return (
    <div className={'flex items-center justify-center'}>
      <Checkbox
        classNames={{
          wrapper: 'm-0 p-0',
          hiddenInput: 'm-0 p-0 h-0 w-0',
          base: 'm-0 p-0',
        }}
        isDisabled={props.isDisabled}
        isIndeterminate={props.isIndeterminate}
        isSelected={props.isSelected}
        onChange={props.onChange}
      />
    </div>
  );
};

export default CsTableCheckbox;
