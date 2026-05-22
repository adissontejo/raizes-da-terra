const producerIdKey = "producer-id";

export const storeProducerId = (producerId: number) =>
  localStorage.setItem(producerIdKey, producerId.toString());

export const retrieveProducerId = (): number | null => {
  const value = localStorage.getItem(producerIdKey);
  const producerId = Number(value);

  return isNaN(producerId) ? null : producerId;
};
