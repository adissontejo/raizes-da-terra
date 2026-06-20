import { api } from "@api/client";
import type { ProductDTO } from "./dtos/product.dto";

export class ProductsService {
  public static async getProducts(
    name?: string,
    categories?: string[]
  ): Promise<ProductDTO[]> {
    const params: Record<string, unknown> = {};
    if (name) params.name = name;
    if (categories && categories.length > 0) params.categories = categories;
    const response = await api.get<ProductDTO[]>("/products", {
      params,
    });

    return response.data;
  }
}
