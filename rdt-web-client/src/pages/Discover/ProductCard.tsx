import { Icon } from "@iconify/react";

export interface ProductCardProps {
  name: string;
  producer: string;
  priceFrom: number;
  imageSrc?: string;
}

export const ProductCard = ({
  name,
  producer,
  priceFrom,
  imageSrc,
}: ProductCardProps) => {
  return (
    <div className="flex flex-col items-start gap-[3.5px]">
      {imageSrc ? (
        <div className="w-full h-[350px] rounded-lg overflow-hidden">
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="w-full h-[350px] rounded-lg bg-[#C9A97A33] flex items-center justify-center text-argil">
          <Icon icon="mdi:seed-outline" width={48} height={48} />
        </div>
      )}

      <div className="w-full pt-3">
        <p className="text-xs leading-4 text-argil">{producer}</p>
        <h4 className="text-[15px] leading-7 tracking-[-0.45px] text-base-title">
          {name}
        </h4>
        <p className="text-sm text-clay">
          A partir de{" "}
          {priceFrom.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
    </div>
  );
};
