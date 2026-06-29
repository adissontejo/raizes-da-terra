import type { Icon } from "@solar-icons/react/lib/types";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ButtonProps extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  label?: string;
  solarIcon?: Icon;
  iconPosition?: "left" | "right";
  TextColor?: string;
}

export const Button = ({
  label,
  solarIcon: Icon,
  iconPosition = "right",
  TextColor = "base-background",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`
        ${className}
        px-8 py-3 rounded-lg bg-base-title flex justify-center items-center gap-2
        text-sm text-5xl text-${TextColor} font-medium
        hover:brightness-80 disabled:cursor-not-allowed disabled:brightness-100 disabled:bg-base-label
        transition-[filter,background]
      `}
    >
      {iconPosition === "left" && Icon && <Icon size={20} color="var(--color-${TextColor})" />}
      <span>{label}</span>
      {iconPosition === "right" && Icon && <Icon size={20} color="var(--color-${TextColor})" />}
    </button>
  );
};
