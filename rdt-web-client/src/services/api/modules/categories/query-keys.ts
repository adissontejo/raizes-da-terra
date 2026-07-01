export const categoriesKeys = {
  base: ["categories"] as const,
  all: () => [...categoriesKeys.base, "all"] as const,
};
