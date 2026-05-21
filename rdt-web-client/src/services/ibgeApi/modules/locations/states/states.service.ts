import { ibgeApi } from "~/services/ibgeApi/client";
import type { StateDTO } from "./dtos/state.dto";
import type { CityDTO } from "./dtos/city.dto";

export class StatesService {
  public static async getStates(): Promise<StateDTO[]> {
    const response = await ibgeApi.get<StateDTO[]>("/v1/localidades/estados");

    return response.data;
  }

  public static async getCitiesByState(
    stateShortname: string,
  ): Promise<CityDTO[]> {
    const response = await ibgeApi.get<CityDTO[]>(
      `/v1/localidades/estados/${stateShortname}/municipios`,
    );

    return response.data;
  }
}
