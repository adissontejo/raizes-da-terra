import { Icon } from "@iconify/react";

interface EmptyStateProps {
  type: "produtos" | "produtores";
}

export const EmptyState = ({ type }: EmptyStateProps) => {
  const isProdutos = type === "produtos";

  return (
    <div className="w-full flex flex-col items-center gap-6 py-16 px-8 border border-[#C9A97A4D] rounded-lg bg-[#C9A97A0D]">
      <div className="flex items-center justify-center">
        <Icon
          icon={isProdutos ? "mdi:seed-outline" : "solar:shop-outline"}
          width={32}
          height={32}
          className="text-[#C9A97A]"
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        {isProdutos ? (
          <p className="text-sm text-clay text-center">
            Nenhum produto encontrado.
          </p>
        ) : (
          <p className="text-sm text-clay text-center">
            Nenhum produtor encontrado.
          </p>
        )}
      </div>
    </div>
  );
};
