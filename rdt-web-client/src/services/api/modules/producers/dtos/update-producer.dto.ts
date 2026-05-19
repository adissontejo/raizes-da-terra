import type { ProducerDTO } from "./producer.dto";

export type UpdateProducerDTO = Partial<Omit<ProducerDTO, "id">>;
