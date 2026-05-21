import { useQuery } from "@tanstack/react-query";
import { producersKeys } from "../query-keys";
import { ProducersService } from "../producers.service";

export const useGetProducersQuery = () => {
  return useQuery({
    queryKey: producersKeys.get(),
    queryFn: ProducersService.getProducers,
  });
};
