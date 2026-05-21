import { useFormContext } from "react-hook-form";
import { TextArea, type TextAreaProps } from "../TextArea";
import { useContext } from "react";
import { FormDataContext } from "./consts";

export interface FormTextAreaProps extends TextAreaProps {
  name: string;
}

export const FormTextArea = ({ name, ...props }: FormTextAreaProps) => {
  const { register, formState } = useFormContext();
  const { isLoading: isFormLoading } = useContext(FormDataContext);

  return (
    <TextArea
      {...props}
      {...register(name)}
      error={formState.errors[name]?.message?.toString()}
      isLoading={isFormLoading}
    />
  );
};
