import { useFormContext } from "react-hook-form";
import { TextArea, type TextAreaProps } from "../TextArea";

export interface FormTextAreaProps extends TextAreaProps {
  name: string;
}

export const FormTextArea = ({ name, ...props }: FormTextAreaProps) => {
  const { register, formState } = useFormContext();

  return (
    <TextArea
      {...props}
      {...register(name)}
      error={formState.errors[name]?.message?.toString()}
    />
  );
};
