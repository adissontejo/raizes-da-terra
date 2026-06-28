import { useQuery } from "@tanstack/react-query";
import { ProductsService } from "../products.service";
import { productsKeys } from "../query-keys";

export const useGetProductsByProducerQuery = (producerId: Nullable<number>) => {
  return useQuery({
    queryKey: productsKeys.getByProducerId(producerId),
    queryFn: () => ProductsService.getProductsByProducerId(producerId!),
    enabled: typeof producerId === "number",
  });
};
