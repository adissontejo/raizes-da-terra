import { useNavigate } from "react-router";
import { mergeRefs } from "react-merge-refs";
import { useMask } from "@react-input/mask";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Leaf } from "@solar-icons/react";
import z from "zod";
import logoDarkImg from "~/assets/logo-dark.svg";
import backgroundImg from "~/assets/register-producer-background.jpg";
import { Input } from "~/components/Input";
import { Button } from "~/components/Button";
import { Select } from "~/components/Select";

const registerSchema = z.object({
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

type FormData = z.infer<typeof registerSchema>;

export const RegisterProducer = () => {
  const { register, formState, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
    reValidateMode: "onBlur",
  });

  const { ref: phoneInputFormRef, ...phoneInputProps } = register("phone");
  const phoneInputMaskRef = useMask({
    mask: "(__) _____-____",
    replacement: { _: /\d/ },
  });
  const phoneInputRef = mergeRefs([phoneInputFormRef, phoneInputMaskRef]);

  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    console.log(data);

    navigate("/configuracoes-produtor");
  };

  return (
    <div className="flex w-full h-screen border">
      <aside className="flex flex-col relative flex-1 max-w-4xl border-r border-r-[#C9A97A4D">
        <img
          src={backgroundImg}
          className="object-cover w-full h-full absolute z-0 opacity-80 mix-blend-multiply bg-white"
        />

        <div
          className="flex-1 flex flex-col justify-end p-12 relative z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(26, 15, 8, 0.54) 0%, rgba(44, 26, 14, 0.48) 50%, rgba(44, 26, 14, 0.3) 100%)",
          }}
        >
          <div className="flex flex-col w-full max-w-4xl border-l border-l-[#C9A97A80] pb-8 pl-6 gap-4">
            <Leaf size={24} color="#C9A97A" />
            <h1 className="pt-2 text-[25.5px] tracking-[-0.75px] text-[#F5E9D6]">
              “O tempo do fazer não segue o relógio — ele respeita o processo.
              Somos a plataforma que conecta quem valoriza a origem, o cuidado e
              o ritmo de cada criação.”
            </h1>
            <p className="font-medium text-sm tracking-[1.4px] uppercase text-[#C9A97ACC]">
              Espaço Exclusivo
            </p>
          </div>
        </div>
      </aside>

      <main className="bg-base-background flex-1 min-w-1/2 max-h-screen overflow-y-auto py-12 px-24">
        <div className="flex flex-col justify-center w-full min-h-full max-w-5xl">
          <img src={logoDarkImg} className="h-11.25 pb-20" />

          <div className="pb-10 flex flex-col gap-2.5 max-w-md">
            <p className="font-medium text-xs tracking-[1.2px] uppercase text-[#D4845A]">
              Apenas Produtores
            </p>
            <h2 className="pt-0.5 font-ibm font-medium text-3xl tracking-[-0.9px] text-[#2C1A0E]">
              Cultive sua história
            </h2>
            <p className="text-sm text-[#7A4E2D]">
              Crie sua conta para construir seu catálogo e compartilhar as
              tradições da sua fazenda. O palco é seu.
            </p>
          </div>

          <form
            className="pb-16 flex flex-col gap-6 w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full grid grid-cols-2 gap-6">
              <Input
                label="Nome do Produtor(a) / Empresa"
                placeholder="Ex: João Batista"
                className="col-span-2"
                error={formState.errors.name?.message}
                {...register("name")}
              />
              <Input
                label="E-mail"
                placeholder="contato@seusitio.com.br"
                error={formState.errors.email?.message}
                {...register("email")}
              />
              <Input
                label="Senha"
                type="password"
                placeholder="••••••••"
                error={formState.errors.password?.message}
                {...register("password")}
              />
              <Select
                label="Estado"
                options={[{ label: "Rio Grande do Norte (RN)", value: "RN" }]}
              />
              <Select
                label="Cidade"
                options={[{ label: "Natal (RN)", value: "Natal" }]}
              />
              <Input
                label="Endereço"
                placeholder="Ex: Rua das Flores, 123"
                error={formState.errors.address?.message}
                {...register("address")}
              />
              <Input
                ref={phoneInputRef}
                label="Telefone"
                placeholder="(99) 99999-9999"
                error={formState.errors.phone?.message}
                {...phoneInputProps}
              />
            </div>
            <Button label="Criar conta de produtor" solarIcon={ArrowRight} />
          </form>

          <div className="flex justify-between items-center border-t border-t-[#C9A97A4D] pt-8">
            <p className="text-xs text-[#7A4E2D]">
              Já faz parte das nossas raízes?
            </p>
            <button
              className="
                rounded-xs border border-[#C9A97A66] py-2 px-6 bg-[#C9A97A1A] text-sm font-medium text-[#2C1A0E]
                hover:brightness-80 transition-[filter]
              "
              onClick={() => navigate("/")}
            >
              Acessar painel
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
