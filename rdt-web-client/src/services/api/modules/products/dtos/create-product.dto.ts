import type { ProductDTO } from "./product.dto";

export type CreateProductDTO = Omit<ProductDTO, "id" | "producerBrandName">;
