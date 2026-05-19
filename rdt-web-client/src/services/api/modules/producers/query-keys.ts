export const producerKeys = {
  base: ["producers"] as const,
  get: () => [...producerKeys.base, "all"] as const,
  getById: (id: number) => [...producerKeys.base, id] as const,
};
