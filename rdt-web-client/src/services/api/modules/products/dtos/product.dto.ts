export interface ProductDTO {
  id: number;
  producerId: number;
  producerBrandName: string;
  name: string;
  imageUrl?: Nullable<string>;
  price: number;
  category: string;
  description?: Nullable<string>;
}
