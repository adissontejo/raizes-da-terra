import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "~/components/Button";
import { profileSchema, type ProfileFormData } from "./consts";
import {
  Form,
  FormImageUpload,
  FormInput,
  FormSelect,
  FormTextArea,
} from "~/components/Form";
import { useGetStatesQuery } from "~/services/ibgeApi/modules/locations/states/queries/useGetStatesQuery";
import { useGetCitiesByStateQuery } from "~/services/ibgeApi/modules/locations/states/queries/useGetCitiesByStateQuery";
import { useEffect, useMemo, useRef } from "react";
import { retrieveProducerId } from "~/store/producer";
import { Navigate } from "react-router";
import { useGetProducerByIdQuery } from "~/services/api/modules/producers/queries/useGetProducerByIdQuery";
import { useUpdateProducerMutation } from "~/services/api/modules/producers/queries/useUpdateProducerMutation";
import { toast } from "react-toastify";
import { UploadsService } from "~/services/api/modules/uploads/uploads.service";
import type { UpdateProducerDTO } from "~/services/api/modules/producers/dtos/update-producer.dto";

export const ProfileConfig = () => {
  const producerId = retrieveProducerId();

  const formProps = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    reValidateMode: "onBlur",
  });

  const selectedState = useWatch({
    name: "state",
    control: formProps.control,
  });

  const {
    data: producer,
    isLoading: isLoadingProducer,
    isError,
  } = useGetProducerByIdQuery(producerId);
  const { data: states, isLoading: isLoadingStates } = useGetStatesQuery();
  const { data: cities, isLoading: isLoadingCities } =
    useGetCitiesByStateQuery(selectedState);
  const { mutate: updateProducer } = useUpdateProducerMutation();

  const imageUploadRef = useRef<HTMLInputElement>(null);

  const stateOptions = useMemo(() => {
    return (
      states
        ?.map((state) => ({
          label: state.nome,
          value: state.sigla,
        }))
        .sort((a, b) => a.label.localeCompare(b.label)) ?? []
    );
  }, [states]);

  const cityOptions = useMemo(() => {
    return (
      cities
        ?.map((city) => ({
          label: city.nome,
          value: city.nome,
        }))
        .sort((a, b) => a.label.localeCompare(b.label)) ?? []
    );
  }, [cities]);

  useEffect(() => {
    if (producer) {
      formProps.reset({
        ...producer,
        phone:
          producer.phone?.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3") ?? "",
        cnpj:
          producer.cnpj?.replace(
            /(\d{2})(\d{3})(\d{3})(\d{4})/,
            "$1.$2.$3/$4-",
          ) ?? "",
        profilePhotoFile: undefined,
      });
    }
  }, [producer]);

  const onSubmit = async (data: ProfileFormData) => {
    const producer: UpdateProducerDTO = {
      ...data,
    };

    const profilePhotoFile = formProps.getValues("profilePhotoFile");

    if (profilePhotoFile) {
      try {
        const { url } = await UploadsService.uploadImage(profilePhotoFile);

        producer.profilePhotoUrl = url;
      } catch {
        toast.error("Erro ao enviar imagem. Tente novamente mais tarde.");

        return;
      }
    }

    updateProducer(
      { id: producerId!, producer },
      {
        onSuccess: () => {
          toast.success("Perfil atualizado com sucesso!");
        },
        onError: () => {
          toast.error("Erro ao atualizar perfil.");
        },
      },
    );
  };

  if (typeof producerId !== "number" || isError) {
    return <Navigate to="/" />;
  }

  return (
    <Form
      {...formProps}
      onSubmit={onSubmit}
      className="w-full rounded-xs border border-[#C9A97A4D] p-8 flex flex-col gap-8"
      isLoading={isLoadingProducer}
    >
      <div className="w-full flex items-center justify-start gap-6">
        <FormImageUpload
          ref={imageUploadRef}
          name="profilePhotoFile"
          preselectedSrc={
            producer?.profilePhotoUrl
              ? `${import.meta.env.VITE_SERVER_URL}${producer.profilePhotoUrl}`
              : undefined
          }
          className="w-24 h-24"
          circular
          uploadText={false}
          isLoading={isLoadingProducer}
        />
        <div className="flex flex-col gap-1">
          <Button
            type="button"
            label="Alterar foto"
            className="h-8"
            disabled={isLoadingProducer}
            onClick={() => imageUploadRef.current?.click()}
          />
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
          name="cnpj"
          label="CNPJ"
          placeholder="00.000.000/0000-00"
          mask={{
            mask: "__.___.___/____-__",
            replacement: { _: /\d/ },
          }}
        />
        <FormInput
          name="email"
          label="E-mail"
          placeholder="contato@seusitio.com"
        />
        <FormSelect
          name="state"
          label="Estado"
          options={stateOptions}
          isLoading={isLoadingStates}
        />
        <FormSelect
          name="city"
          label="Cidade"
          options={cityOptions}
          isLoading={isLoadingCities}
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
          disabled={
            !formProps.formState.isDirty ||
            isLoadingProducer ||
            isLoadingCities ||
            isLoadingStates
          }
        />
      </div>
    </Form>
  );
};
