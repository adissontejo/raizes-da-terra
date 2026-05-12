import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "~/components/Button";
import { ImageUpload } from "~/components/ImageUpload";
import { Input } from "~/components/Input";
import { Select } from "~/components/Select";
import { TextArea } from "~/components/TextArea";
import { CatalogProduct } from "./CatalogProduct";

// TO-DO: remove temp image imports
import product1Img from "~/assets/product-1-temp.png";
import product2Img from "~/assets/product-2-temp.png";
import { PriceInput } from "~/components/PriceInput";
import { newProductSchema, type NewProductFormData } from "./consts";

export const ProductsManagement = () => {
  const { register, control, handleSubmit, formState } =
    useForm<NewProductFormData>({
      resolver: zodResolver(newProductSchema),
      reValidateMode: "onBlur",
    });

  return (
    <div className="w-full gap-16 flex flex-col">
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="w-full rounded-lg bg-[#C9A97A0D] border border-[#C9A97A4D] p-8 grid grid-cols-3 gap-8"
      >
        <ImageUpload label="Imagem do Produto" className="w-full h-full" />
        <div className="w-full col-span-2 grid grid-cols-2 gap-5">
          <Input
            label="Nome do Produto"
            placeholder="Ex: Goiabada Cascão de Corte"
            className="col-span-2"
            error={formState.errors.name?.message}
            {...register("name")}
          />
          <Controller
            control={control}
            name="price"
            render={({ field }) => (
              <PriceInput
                label="Preço (R$)"
                placeholder="00,00"
                error={formState.errors.price?.message}
                {...field}
              />
            )}
          />
          <Select
            label="Categoria"
            options={[{ label: "Doces", value: "sweets" }]}
          />
          <TextArea
            label="Breve Descrição"
            placeholder="Descreva os ingredientes, o modo de preparo ou detalhes do produto..."
            initialHeight={104}
            maxLength={500}
            className="col-span-2"
            error={formState.errors.description?.message}
            {...register("description")}
          />
          <Button
            type="submit"
            label="Cadastrar Produto"
            className="col-span-2 w-full max-w-47"
          />
        </div>
      </form>

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
          />
          <CatalogProduct
            category="Doces & Geleias"
            name="Doce de Leite do Sítio"
            price={28.8}
            imageSrc={product2Img}
          />
        </div>
      </div>
    </div>
  );
};
