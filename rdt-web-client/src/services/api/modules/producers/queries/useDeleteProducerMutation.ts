import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProducersService } from "../services/producers.service";
import { producerKeys } from "../query-keys";

export const useDeleteProducerMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (variables: { id: number }) =>
      ProducersService.deleteProducer(variables.id),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: producerKeys.get(),
        exact: true,
      });
      queryClient.invalidateQueries({
        queryKey: producerKeys.getById(variables.id),
        exact: true,
      });
    },
  });
};
