import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "~/components/Button";
import { ImageUpload } from "~/components/ImageUpload";
import { Input } from "~/components/Input";
import { CatalogProduct } from "./CatalogProduct";

// TO-DO: remove temp image imports
import product1Img from "~/assets/product-1-temp.png";
import product2Img from "~/assets/product-2-temp.png";
import { newProductSchema, type NewProductFormData } from "./consts";
import { EditProductModal } from "./EditProductModal";
import { useState } from "react";
import { FormPriceInput, FormSelect, FormTextArea } from "~/components/Form";

export const ProductsManagement = () => {
  const formProps = useForm<NewProductFormData>({
    resolver: zodResolver(newProductSchema),
    reValidateMode: "onBlur",
  });

  const [selectedProduct, setSelectedProduct] = useState<unknown | null>(null);

  return (
    <div className="w-full gap-16 flex flex-col">
      <Form
        {...formProps}
        onSubmit={(data) => console.log(data)}
        className="w-full rounded-lg bg-[#C9A97A0D] border border-[#C9A97A4D] p-8 grid grid-cols-3 gap-8"
      >
        <ImageUpload label="Imagem do Produto" className="w-full" />
        <div className="w-full col-span-2 grid grid-cols-2 gap-5">
          <Input
            name="name"
            label="Nome do Produto"
            placeholder="Ex: Goiabada Cascão de Corte"
            className="col-span-2"
          />
          <FormPriceInput name="price" label="Preço (R$)" placeholder="00,00" />
          <FormSelect
            name="category"
            label="Categoria"
            options={[{ label: "Doces", value: "sweets" }]}
          />
          <FormTextArea
            name="description"
            label="Breve Descrição"
            placeholder="Descreva os ingredientes, o modo de preparo ou detalhes do produto..."
            initialHeight={104}
            maxLength={500}
            className="col-span-2"
          />
          <Button
            type="submit"
            label="Cadastrar Produto"
            className="col-span-2 w-full max-w-47"
          />
        </div>
      </Form>

      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex items-center justify-between gap-4">
          <p className="font-ibm text-xl tracking-[-0.6px] text-base-title">
            Seu Catálogo
          </p>
          <div className="rounded-full border border-[#C9A97A4D] bg-[#C9A97A33] px-3 py-1">
            <span className="font-medium text-xs text-clay">2 itens</span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <CatalogProduct
            category="Doces & Geleias"
            name="Goiabada Cascão de Corte"
            price={35.0}
            imageSrc={product1Img}
            onEdit={() => setSelectedProduct(1)}
            onDelete={() => []}
          />
          <CatalogProduct
            category="Doces & Geleias"
            name="Doce de Leite do Sítio"
            price={28.8}
            imageSrc={product2Img}
            onEdit={() => setSelectedProduct(1)}
            onDelete={() => []}
          />
        </div>
      </div>

      <EditProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSave={() => setSelectedProduct(null)}
      />
    </div>
  );
};
