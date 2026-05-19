import { useFormContext } from "react-hook-form";
import { Input, type InputProps } from "../Input";

export interface FormInputProps extends InputProps {
  name: string;
}

export const FormInput = ({ name, ...props }: FormInputProps) => {
  const { register, formState } = useFormContext();

  return (
    <Input
      {...props}
      {...register(name)}
      error={formState.errors[name]?.message?.toString()}
    />
  );
};
