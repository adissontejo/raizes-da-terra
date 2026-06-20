export const productsKeys = {
  base: ["products"] as const,
  get: (name?: string, categories?: string[]) =>
    [...productsKeys.base, "all", name, categories?.sort()] as const,
};
