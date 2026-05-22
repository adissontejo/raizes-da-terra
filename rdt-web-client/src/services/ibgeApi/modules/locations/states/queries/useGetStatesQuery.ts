import { useQuery } from "@tanstack/react-query";
import { statesKeys } from "../query-keys";
import { StatesService } from "../states.service";

export const useGetStatesQuery = () => {
  return useQuery({
    queryKey: statesKeys.get(),
    queryFn: StatesService.getStates,
  });
};
