export const productsKeys = {
  base: ["products"] as const,
  getBase: () => [...productsKeys.base, "all"] as const,
  get: (name?: string, categories?: string[]) =>
    [...productsKeys.getBase(), name, categories?.sort()] as const,
  getByProducerId: (producerId: Nullable<number>) =>
    [...productsKeys.base, "producer", producerId] as const,
  getById: (id: number) => [...productsKeys.base, "byId", id] as const,
};
