export const statesKeys = {
  base: ["ibge", "localions", "states"],
  get: () => [...statesKeys.base, "all"] as const,
  getCities: (stateShortname: Nullable<string>) =>
    [...statesKeys.base, stateShortname, "cities"] as const,
};
