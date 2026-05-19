import { useQuery } from "@tanstack/react-query";
import { producerKeys } from "../query-keys";
import { ProducersService } from "../services/producers.service";

export const useGetProducersQuery = () => {
  return useQuery({
    queryKey: producerKeys.get(),
    queryFn: ProducersService.getProducers,
  });
};
