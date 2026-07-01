import { useFormContext } from "react-hook-form";
import { Input, type InputProps } from "../Input";
import { useContext } from "react";
import { FormDataContext } from "./consts";

export interface FormInputProps extends InputProps {
  name: string;
}

export const FormInput = ({ name, isLoading, ...props }: FormInputProps) => {
  const { register, formState } = useFormContext();
  const { isLoading: isFormLoading } = useContext(FormDataContext);

  return (
    <Input
      {...props}
      {...register(name)}
      error={formState.errors[name]?.message?.toString()}
      isLoading={isLoading || isFormLoading}
    />
  );
};
