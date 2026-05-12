import z from "zod";

export const profileSchema = z.object({
  name: z
    .string()
    .nonempty("Preencha este campo")
    .min(3, "Mínimo 3 caracteres")
    .max(100, "Máximo 100 caracteres"),
  email: z.email("E-mail inválido").max(100, "Máximo 100 caracteres"),
  state: z.string().nonempty("Preencha este campo"),
  city: z.string().nonempty("Preencha este campo"),
  address: z
    .string()
    .nonempty("Preencha este campo")
    .min(3, "Mínimo 3 caracteres")
    .max(100, "Máximo 100 caracteres"),
  complement: z.string().max(100, "Máximo 100 caracteres"),
  phone: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Telefone inválido"),
  instagram: z.string().max(100, "Máximo 100 caracteres"),
  bioPhrase: z.string().max(250, "Máximo 250 caracteres"),
  bioTitle: z.string().max(100, "Máximo 100 caracteres"),
  bio: z.string().max(500, "Máximo 500 caracteres"),
  productsTitle: z.string().max(100, "Máximo 100 caracteres"),
  productsSubtitle: z.string().max(100, "Máximo 100 caracteres"),
});

export type ProfileFormData = z.infer<typeof profileSchema>;

export const newProductSchema = z.object({
  name: z
    .string()
    .nonempty("Preencha este campo")
    .min(3, "Mínimo 3 caracteres")
    .max(100, "Máximo 100 caracteres"),
  price: z.number("Preço inválido").positive("Preço inválido"),
  category: z.string().nonempty("Preencha este campo"),
  description: z.string().max(500, "Máximo 500 caracteres"),
});

export type NewProductFormData = z.infer<typeof newProductSchema>;
