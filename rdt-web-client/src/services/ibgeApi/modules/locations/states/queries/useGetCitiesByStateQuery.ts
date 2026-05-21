import { useQuery } from "@tanstack/react-query";
import { statesKeys } from "../query-keys";
import { StatesService } from "../states.service";

export const useGetCitiesByStateQuery = (stateShortname: Nullable<string>) => {
  return useQuery({
    queryKey: statesKeys.getCities(stateShortname),
    queryFn: () => StatesService.getCitiesByState(stateShortname!),
    enabled: !!stateShortname,
  });
};
