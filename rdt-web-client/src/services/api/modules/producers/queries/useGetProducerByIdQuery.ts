import { useQuery } from "@tanstack/react-query";
import { producerKeys } from "../query-keys";
import { ProducersService } from "../services/producers.service";

export const useGetProducerByIdQuery = (id: number) => {
  return useQuery({
    queryKey: producerKeys.getById(id),
    queryFn: () => ProducersService.getProducerById(id),
  });
};
