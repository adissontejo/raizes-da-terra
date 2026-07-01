import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "~/components/Button";
import { CatalogProduct } from "./CatalogProduct";
import { productSchema, type ProductFormData } from "./consts";
import { EditProductModal } from "./EditProductModal";
import { useState } from "react";
import {
  Form,
  FormImageUpload,
  FormInput,
  FormPriceInput,
  FormSelect,
  FormTextArea,
} from "~/components/Form";
import { DeleteProductModal } from "./DeleteProductModal";
import { UploadsService } from "~/services/api/modules/uploads/uploads.service";
import type { CreateProductDTO } from "~/services/api/modules/products/dtos/create-product.dto";
import { toast } from "react-toastify";
import { useCreateProductMutation } from "~/services/api/modules/products/queries/useCreateProductMutation";
import { retrieveProducerId } from "~/store/producer";
import { Navigate } from "react-router";
import { useGetProductsByProducerQuery } from "~/services/api/modules/products/queries/useGetProductsByProducerQuery";
import { EmptyState } from "~/components/EmptyState";
import type { ProductDTO } from "~/services/api/modules/products/dtos/product.dto";
import { useGetCategoriesQuery } from "~/services/api/modules/categories/queries/useGetCategoriesQuery";

export const ProductsManagement = () => {
  const producerId = retrieveProducerId();

  const formProps = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    reValidateMode: "onBlur",
  });

  const [editProduct, setEditProduct] = useState<ProductDTO | null>(null);
  const [deleteProduct, setDeleteProduct] = useState<ProductDTO | null>(null);

  const { mutate: createProduct } = useCreateProductMutation();

  const {
    data: products,
    isLoading: isLoadingProducts,
    isError,
  } = useGetProductsByProducerQuery(producerId);
  const { data: categories, isLoading: isLoadingCategories } =
    useGetCategoriesQuery();

  const onSubmit = async (data: ProductFormData) => {
    const product: CreateProductDTO = {
      ...data,
      producerId: producerId!,
    };

    const imageFile = formProps.getValues("imageFile");

    if (imageFile) {
      try {
        const { url } = await UploadsService.uploadImage(imageFile);

        product.imageUrl = url;
      } catch {
        toast.error("Erro ao enviar a imagem. Tente novamente mais tarde.");

        return;
      }
    }

    createProduct(
      { product },
      {
        onSuccess: () => {
          toast.success("Produto cadastrado com sucesso!");

          formProps.reset({
            price: 0,
          });
        },
        onError: () => {
          toast.error(
            "Erro ao cadastrar o produto. Tente novamente mais tarde.",
          );
        },
      },
    );
  };

  if (typeof producerId !== "number" || isError) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-full gap-16 flex flex-col">
      <Form
        {...formProps}
        onSubmit={onSubmit}
        className="w-full rounded-lg bg-[#C9A97A0D] border border-[#C9A97A4D] p-8 grid grid-cols-3 gap-8"
      >
        <FormImageUpload
          name="imageFile"
          label="Imagem do Produto"
          className="w-full"
        />
        <div className="w-full col-span-2 grid grid-cols-2 gap-5">
          <FormInput
            name="name"
            label="Nome do Produto"
            placeholder="Ex: Goiabada Cascão de Corte"
            className="col-span-2"
          />
          <FormPriceInput name="price" label="Preço (R$)" placeholder="00,00" />
          <FormSelect
            name="category"
            label="Categoria"
            options={
              categories?.map((cat) => ({
                label: cat.description,
                value: cat.name,
              })) || []
            }
            isLoading={isLoadingCategories}
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
            <span className="font-medium text-xs text-clay">
              {isLoadingProducts
                ? "Carregando..."
                : `${products?.length} ${products?.length === 1 ? "item" : "itens"}`}
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          {isLoadingProducts ? (
            <div className="w-full py-12 flex items-center justify-center text-clay text-sm">
              Carregando produtos...
            </div>
          ) : !products?.length ? (
            <div className="w-full">
              <EmptyState type="produtos" />
            </div>
          ) : (
            products.map((product) => (
              <CatalogProduct
                key={product.id}
                category={
                  categories?.find((cat) => cat.name === product.category)
                    ?.description || product.category
                }
                name={product.name}
                price={product.price}
                imageSrc={product.imageUrl}
                onEdit={() => setEditProduct(product)}
                onDelete={() => setDeleteProduct(product)}
              />
            ))
          )}
        </div>
      </div>

      <EditProductModal
        product={editProduct}
        onClose={() => setEditProduct(null)}
      />

      <DeleteProductModal
        product={deleteProduct}
        onClose={() => setDeleteProduct(null)}
      />
    </div>
  );
};
