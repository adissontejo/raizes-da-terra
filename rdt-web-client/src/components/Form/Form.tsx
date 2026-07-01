import type { ReactNode } from "react";
import {
  FormProvider,
  type FieldValues,
  type UseFormReturn,
} from "react-hook-form";
import { FormDataContext } from "./consts";

export interface FormProps<T extends FieldValues> extends UseFormReturn<T> {
  children?: ReactNode;
  className?: string;
  onSubmit?: (data: T) => void;
  isLoading?: boolean;
}

export const Form = <T extends FieldValues>({
  children,
  className,
  onSubmit = () => [],
  isLoading = false,
  ...props
}: FormProps<T>) => {
  return (
    <FormProvider {...props}>
      <FormDataContext.Provider value={{ isLoading }}>
        <form className={className} onSubmit={props.handleSubmit(onSubmit)}>
          {children}
        </form>
      </FormDataContext.Provider>
    </FormProvider>
  );
};
