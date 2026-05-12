import { BagSmile, TrashBinTrash } from "@solar-icons/react";
import { DefaultPic } from "~/components/DefaultPic";

interface CatalogProductProps {
  category: string;
  name: string;
  price: number;
  imageSrc?: string;
}

export const CatalogProduct = ({
  category,
  name,
  price,
  imageSrc,
}: CatalogProductProps) => {
  return (
    <div className="w-full rounded-lg border border-[#C9A97A4D] flex items-center justify-between p-4 gap-4">
      <div className="flex items-center gap-4">
        <DefaultPic
          icon={BagSmile}
          src={imageSrc}
          className="size-20 rounded-xs"
        />
        <div className="flex flex-col gap-[3.5px]">
          <p className="font-medium text-[10px] tracking-[0.5px] uppercase text-argil">
            {category}
          </p>
          <p className="text-[13.3px] tracking-[-0.4px] text-base-title">
            {name}
          </p>
          <p className="text-sm text-clay">
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      </div>
      <button className="p-2 rounded-full text-argil hover:bg-[#C9A97A30] transition-colors">
        <TrashBinTrash color="inherit" size={20} />
      </button>
    </div>
  );
};
