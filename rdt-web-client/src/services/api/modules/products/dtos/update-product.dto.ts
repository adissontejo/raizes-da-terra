import type { ProductDTO } from "./product.dto";

export type UpdateProductDTO = Partial<
  Omit<ProductDTO, "id" | "producerId" | "producerBrandName">
>;
