import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProducersService } from "../producers.service";
import { producersKeys } from "../query-keys";

export const useDeleteProducerMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (variables: { id: number }) =>
      ProducersService.deleteProducer(variables.id),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: producersKeys.get(),
        exact: true,
      });
      queryClient.invalidateQueries({
        queryKey: producersKeys.getById(variables.id),
        exact: true,
      });
    },
  });
};
