import {
  forwardRef,
  useId,
  useState,
  type DetailedHTMLProps,
  type TextareaHTMLAttributes,
} from "react";

export interface TextAreaProps extends DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> {
  label?: string;
  error?: string;
  initialHeight?: number;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      value,
      maxLength,
      className,
      error,
      onChange,
      initialHeight = 60,
      ...props
    },
    ref,
  ) => {
    const id = useId();

    const [numCharacters, setNumCharacters] = useState<number>(
      value?.toString().length ?? 0,
    );

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setNumCharacters(event.target.value.length);

      onChange?.(event);
    };

    return (
      <div className={`${className} flex flex-col gap-1.5 relative`}>
        {label && (
          <label
            htmlFor={props.id ?? id}
            className="text-xs font-medium text-base-title"
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={id}
          value={value}
          maxLength={maxLength}
          onChange={handleChange}
          {...props}
          className={`
            text-sm border border-[#C9A97A4D] bg-[#C9A97A0D]
            px-4 py-3 rounded-lg w-full text-base-title
            placeholder:text-[#7A4E2D80] placeholder:text-sm
            focus:bg-[#C9A97A1A]
            transition-colors
            ${error ? "border-red-500" : "focus:border-base-hover"}
          `}
          style={{ height: initialHeight }}
        />

        {error && (
          <p className="absolute -bottom-4 text-xs text-red-500">{error}</p>
        )}
        {maxLength && (
          <p className="absolute -bottom-4 right-0 text-xs font-medium text-base-subtitle">
            {numCharacters}/{maxLength}
          </p>
        )}
      </div>
    );
  },
);
