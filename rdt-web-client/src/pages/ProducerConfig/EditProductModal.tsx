import { Button } from "~/components/Button";
import { ImageUpload } from "~/components/ImageUpload";
import { Input } from "~/components/Input";
import { Modal } from "~/components/Modal";
import { PriceInput } from "~/components/PriceInput";
import { Select } from "~/components/Select";
import { TextArea } from "~/components/TextArea";
// TO-DO: remove temp image imports
import product1Img from "~/assets/product-1-temp.png";

// TO-DO: replace with actual product type
type Product = unknown;

export interface EditProductModalProps {
  product: Product | null;
  onClose: () => void;
  onSave: (product: Product) => void;
}

export const EditProductModal = ({
  product,
  onClose,
  onSave,
}: EditProductModalProps) => {
  return (
    <Modal
      isOpen={!!product}
      onClose={onClose}
      title="Editar Produto"
      subtitle="Edite um produto do catálogo"
    >
      <div className="w-full rounded-lg border border-[#C9A97A4D] p-8 bg-[#C9A97A0D] grid grid-cols-3 gap-8">
        <ImageUpload
          label="Clique para alterar a imagem"
          preselectedSrc={product1Img}
          className="w-full"
        />

        <div className="col-span-2 w-full grid grid-cols-2 gap-5">
          <Input
            label="Nome do Produto"
            value="Goiabada Cascão de Corte"
            className="col-span-2"
          />
          <PriceInput label="Preço (R$)" placeholder="00,00" value={35} />
          <Select
            label="Categoria"
            options={[{ label: "Doces & Geleias", value: 0 }]}
            value={0}
          />
          <TextArea
            label="Breve Descrição"
            value="Feita apenas com goiabas maduras do quintal e açúcar. Ponto firme, ideal para comer com queijo."
            maxLength={500}
            className="col-span-2"
          />
        </div>
      </div>

      <Button className="self-end" label="Salvar Edição" onClick={onSave} />
    </Modal>
  );
};
