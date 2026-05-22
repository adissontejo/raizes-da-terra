import { Controller, useFormContext } from "react-hook-form";
import { PriceInput, type PriceInputProps } from "../PriceInput";
import { useContext } from "react";
import { FormDataContext } from "./consts";

export interface FormPriceInputProps extends PriceInputProps {
  name: string;
}

export const FormPriceInput = ({
  name,
  isLoading,
  ...props
}: FormPriceInputProps) => {
  const { control, formState } = useFormContext();
  const { isLoading: isFormLoading } = useContext(FormDataContext);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <PriceInput
          {...field}
          {...props}
          error={formState.errors[name]?.message?.toString()}
          isLoading={isLoading || isFormLoading}
        />
      )}
    />
  );
};
