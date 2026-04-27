import type { Icon } from "@solar-icons/react/lib/types";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ButtonProps extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  label?: string;
  solarIcon?: Icon;
}

export const Button = ({
  label,
  solarIcon: Icon,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`
        ${className}
        px-8 py-3 rounded-lg bg-base-title flex justify-center items-center gap-2
        hover:brightness-80 transition-[filter]
      `}
    >
      <p className="text-sm text-base-background font-medium">{label}</p>
      {Icon && <Icon size={20} color="var(--color-base-background)" />}
    </button>
  );
};
