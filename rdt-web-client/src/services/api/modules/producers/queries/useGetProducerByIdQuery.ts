import { useQuery } from "@tanstack/react-query";
import { producersKeys } from "../query-keys";
import { ProducersService } from "../producers.service";

export const useGetProducerByIdQuery = (id: Nullable<number>) => {
  return useQuery({
    queryKey: producersKeys.getById(id),
    queryFn: () => ProducersService.getProducerById(id!),
    enabled: typeof id === "number",
  });
};
