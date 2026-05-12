import type { Icon } from "@solar-icons/react/lib/types";

interface BenefitCardProps {
  icon: Icon;
  title: string;
  label: string;
}

export const BenefitCard = ({ icon: Icon, title, label }: BenefitCardProps) => {
  return (
    <div className="w-full flex gap-5 group">
      <div
        className="
          min-w-12 h-12 rounded-lg flex items-center justify-center
          group-odd:bg-[#C9A97A33] group-even:bg-[#2C1A0E0D] group-even:border group-even:border-[#2C1A0E1A]
        "
      >
        <Icon size={24} color="var(--color-base-title)" />
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="font-medium text-sm text-base-title">{title}</p>
        <p className="text-sm text-clay">{label}</p>
      </div>
    </div>
  );
};
