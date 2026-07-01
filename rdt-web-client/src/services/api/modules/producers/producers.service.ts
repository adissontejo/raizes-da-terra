import { api } from "@api/client";
import type { ProducerDTO } from "./dtos/producer.dto";
import type { CreateProducerDTO } from "./dtos/create-producer.dto";
import type { UpdateProducerDTO } from "./dtos/update-producer.dto";

export class ProducersService {
  public static async getProducers(search?: string): Promise<ProducerDTO[]> {
    const params = search ? { search } : undefined;
    const response = await api.get<ProducerDTO[]>("/producers", { params });

    return response.data;
  }

  public static async getProducerById(id: number): Promise<ProducerDTO> {
    const response = await api.get<ProducerDTO>(`/producers/${id}`);

    return response.data;
  }

  public static async createProducer(
    data: CreateProducerDTO,
  ): Promise<ProducerDTO> {
    const response = await api.post<ProducerDTO>("/producers", data);

    return response.data;
  }

  public static async updateProducer(
    id: number,
    data: UpdateProducerDTO,
  ): Promise<ProducerDTO> {
    const response = await api.put<ProducerDTO>(`/producers/${id}`, data);

    return response.data;
  }

  public static async deleteProducer(id: number): Promise<void> {
    await api.delete(`/producers/${id}`);
  }
}
