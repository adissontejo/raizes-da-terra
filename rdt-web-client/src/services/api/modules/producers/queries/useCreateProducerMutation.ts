import { useMutation, useQueryClient } from "@tanstack/react-query";
import { producersKeys } from "../query-keys";
import { ProducersService } from "../producers.service";
import type { CreateProducerDTO } from "../dtos/create-producer.dto";

export const useCreateProducerMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (variables: { producer: CreateProducerDTO }) =>
      ProducersService.createProducer(variables.producer),
    onSuccess: (result) => {
      queryClient.invalidateQueries({
        queryKey: producersKeys.get(),
        exact: true,
      });
      queryClient.setQueryData(producersKeys.getById(result.id), result);
    },
  });
};
