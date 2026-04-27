import { Eye } from "@solar-icons/react";
import {
  forwardRef,
  useId,
  useState,
  type DetailedHTMLProps,
  type InputHTMLAttributes,
} from "react";

export interface InputProps extends DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, className, error, ...props }, ref) => {
    const id = useId();

    const [showPassword, setShowPassword] = useState(false);

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
        <input
          ref={ref}
          id={id}
          type={showPassword ? "text" : type}
          {...props}
          className={`
            text-sm border border-[#C9A97A4D] bg-[#C9A97A0D] pl-4 pr-8 py-2.5 rounded-lg h-10 w-full text-base-title
            placeholder:text-[#7A4E2D80] placeholder:text-sm focus:bg-[#C9A97A1A]
            transition-colors relative ${error ? "border-red-500" : "focus:border-base-hover"}
          `}
        />
        {type === "password" && (
          <button
            type="button"
            className={`absolute bottom-2.5 right-4 ${showPassword ? "brightness-65" : ""} hover:brightness-80 transition-[filter]`}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <Eye size={20} color="#C9A97A" />
          </button>
        )}
        {error && (
          <p className="absolute -bottom-4 text-xs text-red-500">{error}</p>
        )}
      </div>
    );
  },
);
