export const productsKeys = {
  base: ["products"] as const,
  get: (name?: string) => [...productsKeys.base, "all", name] as const,
};
