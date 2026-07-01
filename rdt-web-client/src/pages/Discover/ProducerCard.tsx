import { Icon } from "@iconify/react";

export interface ProducerCardProps {
  name: string;
  state: string;
  category: string;
  rating: number;
  description: string;
  imageSrc?: string;
}

export const ProducerCard = ({
  name,
  state,
  category,
  rating,
  description,
  imageSrc,
}: ProducerCardProps) => {
  return (
    <div className="w-full rounded-lg border border-[#C9A97A4D] bg-[#C9A97A0D] overflow-hidden">
      {imageSrc ? (
        <div className="w-full h-[238.75px]">
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="w-full h-[238.75px] bg-[#C9A97A33] flex items-center justify-center text-argil">
          <Icon icon="solar:shop-outline" width={32} height={32} />
        </div>
      )}

      <div className="w-full p-6 pt-0 flex flex-col gap-2">
        <div className="w-full pt-6">
          <p className="font-medium text-xs tracking-[1.2px] uppercase text-argil-dark">
            {state} &bull; {category}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <h3 className="text-[17.5px] leading-7 tracking-[-0.5px] text-base-title">
            {name}
          </h3>
          <div className="flex items-center gap-1 bg-base-subtitle rounded-lg px-3 py-1">
            <Icon icon="solar:star-line-duotone" width={12} height={12} className="text-base-background" />
            <span className="text-[10px] font-medium text-base-background">
              {rating}
            </span>
          </div>
        </div>

        <p className="text-sm leading-[23px] text-clay">{description}</p>

        <div className="flex items-center gap-2 pt-1.5">
          <span className="text-xs font-medium text-base-title">
            Conhecer história
          </span>
          <Icon icon="solar:arrow-right-linear" width={14} height={14} />
        </div>
      </div>
    </div>
  );
};
