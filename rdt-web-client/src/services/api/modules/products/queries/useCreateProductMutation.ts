import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductsService } from "../products.service";
import { productsKeys } from "../query-keys";
import type { CreateProductDTO } from "../dtos/create-product.dto";
import type { ProductDTO } from "../dtos/product.dto";

export const useCreateProductMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (variables: { product: CreateProductDTO }) =>
      ProductsService.createProduct(variables.product),
    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: productsKeys.getBase() });
      queryClient.setQueryData<ProductDTO[]>(
        productsKeys.getByProducerId(result.producerId),
        (oldData) => {
          if (!oldData) return [result];

          return [...oldData, result];
        },
      );
      queryClient.setQueryData(productsKeys.getById(result.id), result);
    },
  });
};
