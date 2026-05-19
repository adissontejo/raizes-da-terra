import { useMutation, useQueryClient } from "@tanstack/react-query";
import { producerKeys } from "../query-keys";
import { ProducersService } from "../services/producers.service";
import type { UpdateProducerDTO } from "../dtos/update-producer.dto";

export const useUpdateProducerMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (variables: { id: number; producer: UpdateProducerDTO }) =>
      ProducersService.updateProducer(variables.id, variables.producer),
    onSuccess: (result) => {
      queryClient.invalidateQueries({
        queryKey: producerKeys.get(),
        exact: true,
      });
      queryClient.invalidateQueries({
        queryKey: producerKeys.getById(result.id),
        exact: true,
      });
    },
  });
};
