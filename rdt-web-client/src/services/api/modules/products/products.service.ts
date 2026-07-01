import { api } from "@api/client";
import type { ProductDTO } from "./dtos/product.dto";
import type { CreateProductDTO } from "./dtos/create-product.dto";
import type { UpdateProductDTO } from "./dtos/update-product.dto";

export class ProductsService {
  public static async getProducts(
    name?: string,
    categories?: string[],
  ): Promise<ProductDTO[]> {
    const params: Record<string, unknown> = {};
    if (name) params.name = name;
    if (categories && categories.length > 0) params.categories = categories;
    const response = await api.get<ProductDTO[]>("/products", {
      params,
    });

    return response.data;
  }

  public static async getProductsByProducerId(
    producerId: number,
  ): Promise<ProductDTO[]> {
    const response = await api.get<ProductDTO[]>(
      `/products/producer/${producerId}`,
    );

    return response.data;
  }

  public static async getProductById(id: number): Promise<ProductDTO> {
    const response = await api.get<ProductDTO>(`/products/${id}`);

    return response.data;
  }

  public static async createProduct(
    product: CreateProductDTO,
  ): Promise<ProductDTO> {
    const response = await api.post<ProductDTO>("/products", product);

    return response.data;
  }

  public static async updateProduct(
    id: number,
    product: UpdateProductDTO,
  ): Promise<ProductDTO> {
    const response = await api.put<ProductDTO>(`/products/${id}`, product);

    return response.data;
  }

  public static async deleteProduct(id: number): Promise<void> {
    await api.delete(`/products/${id}`);
  }
}
