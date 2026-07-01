import { api } from "@api/client";
import type { CategoryDTO } from "./dtos/category.dto";

export class CategoriesService {
  public static async getCategories(): Promise<CategoryDTO[]> {
    const response = await api.get<CategoryDTO[]>("/products/categories");
    return response.data;
  }
}
