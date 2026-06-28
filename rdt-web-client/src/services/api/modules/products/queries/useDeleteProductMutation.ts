import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductsService } from "../products.service";
import { productsKeys } from "../query-keys";
import type { ProductDTO } from "../dtos/product.dto";

export const useDeleteProductMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (variables: { id: number; producerId?: number }) =>
      ProductsService.deleteProduct(variables.id),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: productsKeys.getBase() });

      if (variables.producerId) {
        queryClient.setQueryData<ProductDTO[]>(
          productsKeys.getByProducerId(variables.producerId),
          (oldData) => {
            if (!oldData) return [];

            return oldData.filter((product) => product.id !== variables.id);
          },
        );
      }

      queryClient.removeQueries({
        queryKey: productsKeys.getById(variables.id),
        exact: true,
      });
    },
  });
};
