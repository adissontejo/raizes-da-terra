import { useMutation, useQueryClient } from "@tanstack/react-query";
import { producersKeys } from "../query-keys";
import { ProducersService } from "../producers.service";
import type { UpdateProducerDTO } from "../dtos/update-producer.dto";

export const useUpdateProducerMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (variables: { id: number; producer: UpdateProducerDTO }) =>
      ProducersService.updateProducer(variables.id, variables.producer).then(
        (result) => {
          queryClient.invalidateQueries({
            queryKey: producersKeys.get(),
            exact: true,
          });
          queryClient.setQueryData(producersKeys.getById(variables.id), result);

          return result;
        },
      ),
  });
};
