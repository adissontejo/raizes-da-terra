import type { ReactNode } from "react";
import {
  FormProvider,
  type FieldValues,
  type UseFormReturn,
} from "react-hook-form";

export interface FormProps<T extends FieldValues> extends UseFormReturn<T> {
  children?: ReactNode;
  className?: string;
  onSubmit: (data: T) => void;
}

export const Form = <T extends FieldValues>({
  children,
  className,
  onSubmit,
  ...props
}: FormProps<T>) => {
  return (
    <FormProvider {...props}>
      <form className={className} onSubmit={props.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};
