import { Controller, useFormContext } from "react-hook-form";
import { Select, type SelectProps } from "../Select";

export interface FormSelectProps<
  T extends string | number,
> extends SelectProps<T> {
  name: string;
}

export const FormSelect = <T extends string | number>({
  name,
  ...props
}: FormSelectProps<T>) => {
  const { control, formState } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Select
          {...field}
          {...props}
          error={formState.errors[name]?.message?.toString()}
        />
      )}
    />
  );
};
