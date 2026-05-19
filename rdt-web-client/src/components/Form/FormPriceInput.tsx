import { Controller, useFormContext } from "react-hook-form";
import { PriceInput, type PriceInputProps } from "../PriceInput";

export interface FormPriceInputProps extends PriceInputProps {
  name: string;
}

export const FormPriceInput = ({ name, ...props }: FormPriceInputProps) => {
  const { control, formState } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <PriceInput
          {...field}
          {...props}
          error={formState.errors[name]?.message?.toString()}
        />
      )}
    />
  );
};
