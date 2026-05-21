import { Controller, useFormContext } from "react-hook-form";
import { useContext } from "react";
import { FormDataContext } from "./consts";
import { ImageUpload, type ImageUploadProps } from "../ImageUpload";

export interface FormImageUploadProps extends ImageUploadProps {
  name: string;
}

export const FormImageUpload = ({
  name,
  isLoading,
  ...props
}: FormImageUploadProps) => {
  const { control } = useFormContext();
  const { isLoading: isFormLoading } = useContext(FormDataContext);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <ImageUpload
          {...field}
          {...props}
          isLoading={isLoading || isFormLoading}
        />
      )}
    />
  );
};
