import z from "zod";

export const registerSchema = z.object({
  brandName: z
    .string()
    .nonempty("Preencha este campo")
    .min(2, "Mínimo 2 caracteres")
    .max(100, "Máximo 255 caracteres"),
  cnpj: z
    .string()
    .nonempty("Preencha este campo")
    .regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, "CNPJ inválido")
    .transform((value) => value.replace(/\D/g, "")),
  email: z.email("E-mail inválido").max(100, "Máximo 100 caracteres"),
  password: z
    .string()
    .nonempty("Preencha este campo")
    .min(6, "Mínimo 6 caracteres")
    .max(100, "Máximo 255 caracteres"),
  state: z.string().nonempty("Preencha este campo"),
  city: z.string().nonempty("Preencha este campo"),
  address: z
    .string()
    .nonempty("Preencha este campo")
    .min(3, "Mínimo 3 caracteres")
    .max(100, "Máximo 255 caracteres"),
  phone: z
    .string()
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Telefone inválido")
    .transform((value) => value.replace(/\D/g, "")),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
