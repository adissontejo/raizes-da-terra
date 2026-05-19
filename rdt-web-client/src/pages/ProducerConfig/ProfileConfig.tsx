import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultPic } from "~/components/DefaultPic";
// TO-DO: delete asset
import pfpTemp from "~/assets/pfp-temp.png";
import { Button } from "~/components/Button";
import { profileSchema, type ProfileFormData } from "./consts";
import { Form, FormInput, FormSelect, FormTextArea } from "~/components/Form";

export const ProfileConfig = () => {
  const formProps = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    reValidateMode: "onBlur",
    defaultValues: {
      brandName: "Dona Maria do Carmo",
      email: "contato@donamariadoces.com.br",
      state: "RN",
      city: "São Gonçalo do Amarante",
      address: "Sítio Cajueiro",
      complement: "",
      phone: "(84) 99999-9999",
      instagram: "",
      bioPhrase: "Mãos que preservam a receita original da goiabada cascão...",
      bioTitle: "O tempo certo do fogo e do afeto.",
      bio: "Tudo começou com o tacho que era da minha avó...",
      productsTitle: "Feito no tacho de cobre",
      productsSubtitle:
        "As receitas que atravessaram gerações no Sítio Cajueiro.",
    },
  });

  const onSubmit = (data: ProfileFormData) => {
    formProps.reset(data);
  };

  return (
    <Form
      {...formProps}
      onSubmit={onSubmit}
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
        <FormInput
          name="brandName"
          label="Nome do Produtor(a) / Empresa"
          placeholder="Ex: João Batista"
        />
        <FormInput
          name="email"
          label="E-mail"
          placeholder="contato@seusitio.com"
        />
        <FormSelect
          name="state"
          label="Estado"
          options={[{ label: "Rio Grande do Norte (RN)", value: "RN" }]}
        />
        <FormSelect
          name="city"
          label="Cidade"
          options={[
            {
              label: "São Gonçalo do Amarante",
              value: "São Gonçalo do Amarante",
            },
          ]}
        />
        <FormInput
          name="address"
          label="Endereço"
          placeholder="Ex: Rua das Flores, 123"
        />
        <FormInput
          name="complement"
          label="Complemento"
          placeholder="(Opcional)"
        />
        <FormInput
          name="phone"
          label="Telefone"
          placeholder="(99) 99999-9999"
          mask={{
            mask: "(__) _____-____",
            replacement: { _: /\d/ },
          }}
        />
        <FormInput
          name="instagram"
          label="Instagram"
          placeholder="(Opcional)"
        />
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
          <FormTextArea
            name="bioPhrase"
            label="Qual frase melhor descreve sua marca?"
            maxLength={250}
            initialHeight={70}
            placeholder="Ex: A tradição que vem do coração."
            className="col-span-2"
          />
          <FormInput
            name="bioTitle"
            label="Crie um título curto para sua biografia"
            placeholder="Ex: Artesão do Cobre"
            className="col-span-2"
          />
          <FormTextArea
            name="bio"
            label="Conte a história da marca"
            maxLength={500}
            initialHeight={300}
            placeholder="Tudo começou quando..."
            className="col-span-2"
          />
          <FormInput
            name="productsTitle"
            label="Crie um título para sessão de produtos"
            placeholder="Ex: Nossos Produtos"
          />
          <FormInput
            name="productsSubtitle"
            label="Crie um subtítulo para sessão de produtos"
            placeholder="Ex: Nossos Produtos"
          />
        </div>
      </div>

      <div className="w-full border-t border-t-[#C9A97A4D] pt-4 flex justify-end">
        <Button
          type="submit"
          label="Salvar alterações"
          disabled={!formProps.formState.isDirty}
        />
      </div>
    </Form>
  );
};
