import { GalleryAdd } from "@solar-icons/react";
import {
  forwardRef,
  useMemo,
  useRef,
  type DetailedHTMLProps,
  type InputHTMLAttributes,
} from "react";
import { mergeRefs } from "react-merge-refs";

type HtmlInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface ImageUploadProps extends Omit<
  HtmlInputProps,
  "type" | "value" | "onChange"
> {
  value?: File;
  onChange?: (value: File) => void;
  label?: string;
  className?: string;
  preselectedSrc?: string;
  accept?: string;
  circular?: boolean;
  uploadText?: string | false;
  isLoading?: boolean;
}

export const ImageUpload = forwardRef<HTMLInputElement, ImageUploadProps>(
  (
    {
      value,
      onChange,
      label,
      className,
      preselectedSrc,
      accept = "image/png,image/jpeg,image/gif",
      circular,
      uploadText = "Fazer upload",
      isLoading,
      ...props
    },
    ref,
  ) => {
    const internalRef = useRef<HTMLInputElement>(null);
    const inputRef = mergeRefs([ref, internalRef]);

    const src = useMemo(() => {
      if (!value) {
        return preselectedSrc;
      }

      return URL.createObjectURL(value);
    }, [value, preselectedSrc]);

    const onClick = () => {
      internalRef.current?.click();
    };

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (file) {
        onChange?.(file);
      }
    };

    return (
      <div className={`${className} flex flex-col gap-1.5`}>
        {label && (
          <p className="font-medium text-xs text-base-title">{label}</p>
        )}

        <input
          {...props}
          ref={inputRef}
          type="file"
          accept={accept}
          onChange={onInputChange}
          className="hidden"
        />

        <button
          type="button"
          onClick={onClick}
          className="w-full aspect-square"
          disabled={isLoading}
        >
          {src && !isLoading ? (
            <img
              src={src}
              className={`w-full h-full aspect-square object-cover cursor-pointer ${circular ? "rounded-full" : "rounded-lg"}`}
            />
          ) : (
            <div
              className={`
                w-full h-full border-2 border-[#C9A97A80] border-dashed [dashes:6,4] p-4 text-clay
                flex flex-col justify-center items-center gap-3 hover:bg-[#C9A97A20] transition-colors
                ${circular ? "rounded-full" : "rounded-lg"}
              `}
            >
              <GalleryAdd size={32} color="inherit" />
              {uploadText && (
                <p className="font-medium text-xs">{uploadText}</p>
              )}
            </div>
          )}
        </button>
      </div>
    );
  },
);
