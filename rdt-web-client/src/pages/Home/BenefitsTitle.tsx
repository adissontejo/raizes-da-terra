import type { Icon } from "@solar-icons/react/lib/types";

interface BenefitsTitleProps {
  icon: Icon;
  label: string;
}

export const BenefitsTitle = ({ icon: Icon, label }: BenefitsTitleProps) => {
  return (
    <div className="w-full pb-4 border-b border-b-[#C9A97A4D] flex gap-3 items-center">
      <Icon size={28} color="var(--color-argil)" />
      <span className="text-xl tracking-[-0.6px] text-base-title">{label}</span>
    </div>
  );
};
