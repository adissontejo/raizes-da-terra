import z from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .nonempty("Preencha este campo")
    .min(2, "Mínimo 2 caracteres")
    .max(100, "Máximo 100 caracteres"),
  email: z.email("E-mail inválido").max(100, "Máximo 100 caracteres"),
  password: z
    .string()
    .nonempty("Preencha este campo")
    .min(6, "Mínimo 6 caracteres")
    .max(100, "Máximo 100 caracteres"),
  state: z
    .string()
    .nonempty("Preencha este campo")
    .min(2, "Mínimo 2 caracteres")
    .max(100, "Máximo 100 caracteres"),
  city: z
    .string()
    .nonempty("Preencha este campo")
    .min(2, "Mínimo 2 caracteres")
    .max(100, "Máximo 100 caracteres"),
  address: z
    .string()
    .nonempty("Preencha este campo")
    .min(3, "Mínimo 3 caracteres")
    .max(100, "Máximo 100 caracteres"),
  phone: z
    .string()
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Telefone inválido")
    .transform((value) => value.replace(/\D/g, "")),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
