export interface ProducerDTO {
  id: number;
  brandName: string;
  profilePhotoUrl?: Nullable<string>;
  cnpj: string;
  email: string;
  phone: string;
  address: string;
  state: string;
  city: string;
  complement?: Nullable<string>;
  instagram?: Nullable<string>;
  bioPhrase?: Nullable<string>;
  bioTitle?: Nullable<string>;
  bio?: Nullable<string>;
  productsTitle?: Nullable<string>;
  productsSubtitle?: Nullable<string>;
}
