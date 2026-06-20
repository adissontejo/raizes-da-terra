import { useQuery } from "@tanstack/react-query";
import { producersKeys } from "../query-keys";
import { ProducersService } from "../producers.service";

export const useGetProducersQuery = (search?: string) => {
  return useQuery({
    queryKey: producersKeys.get(search),
    queryFn: () => ProducersService.getProducers(search),
  });
};
