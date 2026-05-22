export const producersKeys = {
  base: ["producers"] as const,
  get: () => [...producersKeys.base, "all"] as const,
  getById: (id: Nullable<number>) => [...producersKeys.base, id] as const,
};
