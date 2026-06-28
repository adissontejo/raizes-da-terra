import { TrashBinTrash } from "@solar-icons/react";
import { toast } from "react-toastify";
import { ConfirmModal } from "~/components/ConfirmModal";
import type { ProductDTO } from "~/services/api/modules/products/dtos/product.dto";
import { useDeleteProductMutation } from "~/services/api/modules/products/queries/useDeleteProductMutation";

export interface DeleteProductModalProps {
  product: ProductDTO | null;
  onClose: () => void;
}

export const DeleteProductModal = ({
  product,
  onClose,
}: DeleteProductModalProps) => {
  const { mutate: deleteProduct } = useDeleteProductMutation();

  const onConfirm = () => {
    if (!product) return;

    deleteProduct(
      { id: product.id, producerId: product.producerId },
      {
        onSuccess: () => {
          toast.success("Produto excluído com sucesso!");

          onClose();
        },
        onError: () => {
          toast.error("Erro ao excluir o produto. Tente novamente mais tarde.");
        },
      },
    );
  };

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
          <span className="font-bold">“{product?.name}”</span>? Após a
          confirmação o produto será excluido permanentemente do nosso sistema.
        </p>
      }
      confirmText="Confirmar Exclusão"
    />
  );
};
