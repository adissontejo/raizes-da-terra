export const producersKeys = {
  base: ["producers"] as const,
  get: (search?: string) => [...producersKeys.base, "all", search] as const,
  getById: (id: Nullable<number>) => [...producersKeys.base, id] as const,
};
