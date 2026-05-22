import type { ProducerDTO } from "./producer.dto";

export type CreateProducerDTO = Omit<ProducerDTO, "id">;
