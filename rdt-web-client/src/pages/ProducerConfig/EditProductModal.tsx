import { Button } from "~/components/Button";
import { Modal } from "~/components/Modal";
import {
  Form,
  FormImageUpload,
  FormInput,
  FormPriceInput,
  FormSelect,
  FormTextArea,
} from "~/components/Form";
import { useForm } from "react-hook-form";
import type { ProductDTO } from "~/services/api/modules/products/dtos/product.dto";
import { productSchema, type ProductFormData } from "./consts";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useEffect } from "react";
import { useUpdateProductMutation } from "~/services/api/modules/products/queries/useUpdateProductMutation";
import { UploadsService } from "~/services/api/modules/uploads/uploads.service";
import { toast } from "react-toastify";
import { useGetCategoriesQuery } from "~/services/api/modules/categories/queries/useGetCategoriesQuery";

export interface EditProductModalProps {
  product: ProductDTO | null;
  onClose: () => void;
}

export const EditProductModal = ({
  product,
  onClose,
}: EditProductModalProps) => {
  const formProps = useForm<ProductFormData>({
    defaultValues: {
      name: product?.name,
      price: product?.price,
      category: product?.category,
      description: product?.description ?? undefined,
    },
    resolver: zodResolver(productSchema),
  });

  const { mutate: updateProduct } = useUpdateProductMutation();

  const { data: categories, isLoading: isLoadingCategories } =
    useGetCategoriesQuery();

  useEffect(() => {
    if (product) {
      formProps.reset({
        name: product.name,
        price: product.price,
        category: product.category,
        description: product.description ?? undefined,
      });
    } else {
      formProps.reset({
        name: "",
        price: 0,
        category: undefined,
        description: undefined,
      });
    }
  }, [product]);

  const onSave = async (data: ProductFormData) => {
    if (!product) return;

    const updatedProduct: ProductDTO = {
      ...product,
      ...data,
    };

    const imageFile = formProps.getValues("imageFile");

    if (imageFile) {
      try {
        const { url } = await UploadsService.uploadImage(imageFile);

        updatedProduct.imageUrl = url;
      } catch {
        toast.error("Erro ao enviar a imagem. Tente novamente mais tarde.");

        return;
      }
    }

    updateProduct(
      { id: product.id, product: updatedProduct },
      {
        onSuccess: () => {
          toast.success("Produto atualizado com sucesso!");
          onClose();
        },
        onError: () => {
          toast.error(
            "Erro ao atualizar o produto. Tente novamente mais tarde.",
          );
        },
      },
    );
  };

  return (
    <Modal
      isOpen={!!product}
      onClose={onClose}
      title="Editar Produto"
      subtitle="Edite um produto do catálogo"
    >
      <Form
        {...formProps}
        onSubmit={onSave}
        className="w-full flex flex-col gap-8"
      >
        <div className="w-full rounded-lg border border-[#C9A97A4D] p-8 bg-[#C9A97A0D] grid grid-cols-3 gap-8">
          <FormImageUpload
            name="imageFile"
            label="Clique para alterar a imagem"
            preselectedSrc={
              product?.imageUrl
                ? `${import.meta.env.VITE_SERVER_URL}${product.imageUrl}`
                : undefined
            }
            className="w-full"
          />

          <div className="col-span-2 w-full grid grid-cols-2 gap-5">
            <FormInput
              name="name"
              label="Nome do Produto"
              className="col-span-2"
            />
            <FormPriceInput
              name="price"
              label="Preço (R$)"
              placeholder="00,00"
              className="col-span-1"
            />
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
              maxLength={500}
              className="col-span-2"
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={!formProps.formState.isDirty}
          className="self-end"
          label="Salvar Edição"
        />
      </Form>
    </Modal>
  );
};
