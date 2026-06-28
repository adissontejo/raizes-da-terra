import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductsService } from "../products.service";
import type { UpdateProductDTO } from "../dtos/update-product.dto";
import { productsKeys } from "../query-keys";
import type { ProductDTO } from "../dtos/product.dto";

export const useUpdateProductMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (variables: { id: number; product: UpdateProductDTO }) =>
      ProductsService.updateProduct(variables.id, variables.product),
    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: productsKeys.getBase() });
      queryClient.setQueryData(productsKeys.getById(result.id), result);
      queryClient.setQueryData<ProductDTO[]>(
        productsKeys.getByProducerId(result.producerId),
        (oldData) => {
          if (!oldData) return [result];

          return oldData.map((product) =>
            product.id === result.id ? result : product,
          );
        },
      );
    },
  });
};
