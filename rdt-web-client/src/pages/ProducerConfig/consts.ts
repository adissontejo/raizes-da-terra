import z from "zod";

export const profileSchema = z.object({
  brandName: z
    .string()
    .nonempty("Preencha este campo")
    .min(3, "Mínimo 3 caracteres")
    .max(100, "Máximo 100 caracteres"),
  cnpj: z
    .string()
    .nonempty("Preencha este campo")
    .regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, "CNPJ inválido")
    .transform((value) => value.replace(/\D/g, "")),
  email: z.email("E-mail inválido").max(100, "Máximo 100 caracteres"),
  state: z.string().nonempty("Preencha este campo"),
  city: z.string().nonempty("Preencha este campo"),
  address: z
    .string()
    .nonempty("Preencha este campo")
    .min(3, "Mínimo 3 caracteres")
    .max(100, "Máximo 100 caracteres"),
  complement: z.string().max(100, "Máximo 100 caracteres").nullable(),
  phone: z
    .string()
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Telefone inválido")
    .transform((value) => value.replace(/\D/g, "")),
  instagram: z.string().max(100, "Máximo 100 caracteres").nullable(),
  bioPhrase: z.string().max(250, "Máximo 250 caracteres").nullable(),
  bioTitle: z.string().max(100, "Máximo 100 caracteres").nullable(),
  bio: z.string().max(500, "Máximo 500 caracteres").nullable(),
  productsTitle: z.string().max(100, "Máximo 100 caracteres").nullable(),
  productsSubtitle: z.string().max(100, "Máximo 100 caracteres").nullable(),
});

export type ProfileFormData = z.infer<typeof profileSchema> & {
  profilePhotoFile?: File;
};

export const productSchema = z.object({
  name: z
    .string("Preencha este campo")
    .nonempty("Preencha este campo")
    .min(3, "Mínimo 3 caracteres")
    .max(100, "Máximo 100 caracteres"),
  price: z.number("Preço inválido").positive("Preço inválido"),
  category: z.string("Preencha este campo").nonempty("Preencha este campo"),
  description: z
    .string("Preencha este campo")
    .max(500, "Máximo 500 caracteres"),
});

export type ProductFormData = z.infer<typeof productSchema> & {
  imageFile?: File;
};
