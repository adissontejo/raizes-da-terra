import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMask } from "@react-input/mask";
import { mergeRefs } from "react-merge-refs";
import { DefaultPic } from "~/components/DefaultPic";
// TO-DO: delete asset
import pfpTemp from "~/assets/pfp-temp.png";
import { Button } from "~/components/Button";
import { Input } from "~/components/Input";
import { Select } from "~/components/Select";
import { TextArea } from "~/components/TextArea";
import { profileSchema, type ProfileFormData } from "./consts";

export const ProfileConfig = () => {
  const { register, handleSubmit, formState, reset } = useForm<ProfileFormData>(
    {
      resolver: zodResolver(profileSchema),
      reValidateMode: "onBlur",
      defaultValues: {
        name: "Dona Maria do Carmo",
        email: "contato@donamariadoces.com.br",
        state: "RN",
        city: "São Gonçalo do Amarante",
        address: "Sítio Cajueiro",
        complement: "",
        phone: "(84) 99999-9999",
        instagram: "",
        bioPhrase:
          "Mãos que preservam a receita original da goiabada cascão...",
        bioTitle: "O tempo certo do fogo e do afeto.",
        bio: "Tudo começou com o tacho que era da minha avó...",
        productsTitle: "Feito no tacho de cobre",
        productsSubtitle:
          "As receitas que atravessaram gerações no Sítio Cajueiro.",
      },
    },
  );

  const { ref: phoneFormRef, ...phoneProps } = register("phone");
  const maskRef = useMask({
    mask: "(__) _____-____",
    replacement: { _: /\d/ },
  });
  const phoneRef = mergeRefs([phoneFormRef, maskRef]);

  const onSubmit = (data: ProfileFormData) => {
    reset(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full rounded-xs border border-[#C9A97A4D] p-8 flex flex-col gap-8"
    >
      <div className="w-full flex items-center justify-start gap-6">
        <DefaultPic src={pfpTemp} className="size-24 rounded-full" />
        <div className="flex flex-col gap-1">
          <Button label="Alterar foto" className="h-8" />
          <p className="text-xs text-clay">JPG, GIF ou PNG. Máximo de 2MB.</p>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 gap-6">
        <Input
          label="Nome do Produtor(a) / Empresa"
          placeholder="Ex: João Batista"
          error={formState.errors.name?.message}
          {...register("name")}
        />
        <Input
          label="E-mail"
          placeholder="contato@seusitio.com"
          error={formState.errors.email?.message}
          {...register("email")}
        />
        <Select
          label="Estado"
          value="RN"
          options={[{ label: "Rio Grande do Norte (RN)", value: "RN" }]}
        />
        <Select
          label="Cidade"
          value="São Gonçalo do Amarante"
          options={[
            {
              label: "São Gonçalo do Amarante",
              value: "São Gonçalo do Amarante",
            },
          ]}
        />
        <Input
          label="Endereço"
          placeholder="Ex: Rua das Flores, 123"
          error={formState.errors.address?.message}
          {...register("address")}
        />
        <Input
          label="Complemento"
          placeholder="(Opcional)"
          {...register("complement")}
        />
        <Input
          ref={phoneRef}
          label="Telefone"
          placeholder="(99) 99999-9999"
          error={formState.errors.phone?.message}
          {...phoneProps}
        />
        <Input
          label="Instagram"
          placeholder="(Opcional)"
          {...register("instagram")}
        />
        <Select label="Categorias de Produtos" className="col-span-2" />
      </div>

      <div className="w-full flex flex-col gap-12">
        <div className="w-full flex flex-col gap-2">
          <p className="font-ibm text-xl tracking-[-0.75px]">
            Conte sua história
          </p>
          <p className="text-sm text-clay">
            Use esse espaço para dar vida aos produtos.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 gap-6 pb-24">
          <TextArea
            label="Qual frase melhor descreve sua marca?"
            maxLength={250}
            initialHeight={70}
            placeholder="Ex: A tradição que vem do coração."
            className="col-span-2"
            error={formState.errors.bioPhrase?.message}
            {...register("bioPhrase")}
          />
          <Input
            label="Crie um título curto para sua biografia"
            placeholder="Ex: Artesão do Cobre"
            className="col-span-2"
            error={formState.errors.bioTitle?.message}
            {...register("bioTitle")}
          />
          <TextArea
            label="Conte a história da marca"
            maxLength={500}
            initialHeight={300}
            placeholder="Tudo começou quando..."
            className="col-span-2"
            error={formState.errors.bio?.message}
            {...register("bio")}
          />
          <Input
            label="Crie um título para sessão de produtos"
            placeholder="Ex: Nossos Produtos"
            error={formState.errors.productsTitle?.message}
            {...register("productsTitle")}
          />
          <Input
            label="Crie um subtítulo para sessão de produtos"
            placeholder="Ex: Nossos Produtos"
            error={formState.errors.productsSubtitle?.message}
            {...register("productsSubtitle")}
          />
        </div>
      </div>

      <div className="w-full border-t border-t-[#C9A97A4D] pt-4 flex justify-end">
        <Button label="Salvar alterações" disabled={!formState.isDirty} />
      </div>
    </form>
  );
};
