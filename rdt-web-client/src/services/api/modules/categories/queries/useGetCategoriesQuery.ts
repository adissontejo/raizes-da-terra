import { useQuery } from "@tanstack/react-query";
import { categoriesKeys } from "../query-keys";
import { CategoriesService } from "../categories.service";

export const useGetCategoriesQuery = () => {
  return useQuery({
    queryKey: categoriesKeys.all(),
    queryFn: () => CategoriesService.getCategories(),
  });
};
