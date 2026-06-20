import { api } from "@api/client";
import type { ProductDTO } from "./dtos/product.dto";

export class ProductsService {
  public static async getProducts(name?: string): Promise<ProductDTO[]> {
    const params = name ? { name } : undefined;
    const response = await api.get<ProductDTO[]>("/products", { params });

    return response.data;
  }
}
