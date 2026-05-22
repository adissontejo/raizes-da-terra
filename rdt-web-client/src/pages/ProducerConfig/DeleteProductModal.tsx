import { TrashBinTrash } from "@solar-icons/react";
import { ConfirmModal } from "~/components/ConfirmModal";

// TO-DO: replace with actual product type
type Product = unknown;

export interface DeleteProductModalProps {
  product: Product | null;
  onClose: () => void;
  onConfirm: () => void;
}

export const DeleteProductModal = ({
  product,
  onClose,
  onConfirm,
}: DeleteProductModalProps) => {
  return (
    <ConfirmModal
      isOpen={!!product}
      onClose={onClose}
      onConfirm={onConfirm}
      title="Exclusão de Produto"
      subtitle="Confirme para excluir"
      solarIcon={TrashBinTrash}
      content={
        <p className="text-center text-sm text-base-title">
          Tem certeza que deseja excluir o produto{" "}
          <span className="font-bold">“Goiabada Cascão de Corte”</span>? Após a
          confirmação o produto será excluido permanentemente do nosso sistema.
        </p>
      }
      confirmText="Confirmar Exclusão"
    />
  );
};
