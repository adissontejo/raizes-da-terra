import { useMutation, useQueryClient } from "@tanstack/react-query";
import { producerKeys } from "../query-keys";
import { ProducersService } from "../services/producers.service";
import type { CreateProducerDTO } from "../dtos/create-producer.dto";

export const useCreateProducerMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (variables: { producer: CreateProducerDTO }) =>
      ProducersService.createProducer(variables.producer),
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
