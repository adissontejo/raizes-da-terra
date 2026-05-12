import type { Icon } from "@solar-icons/react/lib/types";

interface MenuButtonProps {
  icon: Icon;
  label: string;
  onClick?: () => void;
  isSelected?: boolean;
  className?: string;
}

export const MenuButton = ({
  icon: Icon,
  label,
  onClick,
  isSelected,
  className,
}: MenuButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full rounded-lg py-2.5 px-4 flex items-center gap-3 transition-colors
        ${
          isSelected
            ? "bg-[#C9A97A33] text-base-title hover:bg-[#C9A97A50]"
            : "bg-base-background text-clay hover:bg-[#C9A97A20]"
        }
        ${className}
      `}
    >
      <Icon size={20} color="currentColor" />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};
