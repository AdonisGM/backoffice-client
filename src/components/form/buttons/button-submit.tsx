import {Button, ButtonProps} from "@heroui/react";
import {useFormContext} from "@/components/form";

const ButtonSubmit = (props: ButtonProps) => {
    const form = useFormContext()

    return <form.Subscribe selector={(state) => state.isSubmitting}>
        {(isSubmitting) => (
            <Button
                type="submit"
                size={'sm'}

                isDisabled={isSubmitting}
                isLoading={isSubmitting}

                {...props}
            >
                {props.children || 'Submit'}
            </Button>
        )}
    </form.Subscribe>
}

export default ButtonSubmit;