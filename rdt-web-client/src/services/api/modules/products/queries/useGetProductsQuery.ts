import { useQuery } from "@tanstack/react-query";
import { productsKeys } from "../query-keys";
import { ProductsService } from "../products.service";

export const useGetProductsQuery = (name?: string, categories?: string[]) => {
  return useQuery({
    queryKey: productsKeys.get(name, categories),
    queryFn: () => ProductsService.getProducts(name, categories),
  });
};
