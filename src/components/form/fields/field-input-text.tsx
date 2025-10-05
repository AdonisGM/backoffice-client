import {Input, InputProps} from "@heroui/react";
import {useFieldContext} from "@/components/form";

const FieldInputText = (props: InputProps) => {
    const field = useFieldContext<string>()

    return <Input
        radius={"sm"}
        size={"sm"}
        type={"text"}
        variant={"flat"}
        labelPlacement={"outside-top"}

        className={props.className}
        classNames={{
            label: 'pb-1',
            input: 'text-xs',
        }}

        {...props}

        // Tanstack Form props
        onChange={e => {
            field.handleChange(e.target.value);
            props.onChange && props.onChange(e);
        }}
        onBlur={e => {
            field.handleBlur();
            props.onBlur && props.onBlur(e);
        }}
        value={field.state.value}
        isInvalid={!field.state.meta.isValid}
        errorMessage={!field.state.meta.isValid ? field.state.meta.errors.map(e => e.message).join('; ') : undefined}
    />;
}

export default FieldInputText;