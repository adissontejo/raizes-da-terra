import { Controller, useFormContext } from "react-hook-form";
import { Select, type SelectProps } from "../Select";
import { useContext } from "react";
import { FormDataContext } from "./consts";

export interface FormSelectProps<
  T extends string | number,
> extends SelectProps<T> {
  name: string;
}

export const FormSelect = <T extends string | number>({
  name,
  isLoading,
  ...props
}: FormSelectProps<T>) => {
  const { control, formState } = useFormContext();
  const { isLoading: isFormLoading } = useContext(FormDataContext);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Select
          {...field}
          {...props}
          error={formState.errors[name]?.message?.toString()}
          isLoading={isLoading || isFormLoading}
        />
      )}
    />
  );
};
