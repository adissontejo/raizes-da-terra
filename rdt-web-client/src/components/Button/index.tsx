import type { Icon } from "@solar-icons/react/lib/types";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ButtonProps extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  label?: string;
  solarIcon?: Icon;
  iconPosition?: "left" | "right";
  variant?: "primary" | "danger" | "outline";
}

export const Button = ({
  label,
  solarIcon: Icon,
  iconPosition = "right",
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`
        ${className}
        px-8 py-3 rounded-lg flex justify-center items-center gap-2 text-sm font-medium
        disabled:cursor-not-allowed disabled:brightness-100 disabled:bg-base-label
        transition-[filter,background]
        ${variant === "primary" && "bg-base-title text-base-background hover:brightness-80"}
        ${variant === "danger" && "bg-argil-dark text-base-background hover:brightness-80"}
        ${variant === "outline" && "border border-clay text-base-title hover:bg-[#DDC6A44D]"}
      `}
    >
      {iconPosition === "left" && Icon && <Icon size={20} color="inherit" />}
      <span>{label}</span>
      {iconPosition === "right" && Icon && <Icon size={20} color="inherit" />}
    </button>
  );
};
