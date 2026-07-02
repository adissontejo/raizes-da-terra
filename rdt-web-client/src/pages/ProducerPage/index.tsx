import { useLocation, useParams, Navigate } from "react-router";
import { Camera, ChatRoundLine, Star, Leaf } from "@solar-icons/react";
import { DefaultPic } from "~/components/DefaultPic";
import { Button } from "~/components/Button";
import { useGetProducerByIdQuery } from "~/services/api/modules/producers/queries/useGetProducerByIdQuery";
import { useGetProductsByProducerQuery } from "~/services/api/modules/products/queries/useGetProductsByProducerQuery";
import type { ProducerDTO } from "~/services/api/modules/producers/dtos/producer.dto";
import { EmptyState } from "~/components/EmptyState";

const imageUrl = (path?: string | null): string | undefined => {
  if (!path) return undefined;
  return `${import.meta.env.VITE_SERVER_URL}${path}`;
};

export const ProducerPage = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  const stateProducer = location.state?.producer as ProducerDTO | undefined;

  const { data: fetchedProducer, isLoading: isLoadingProducer } = useGetProducerByIdQuery(
    !stateProducer && id ? Number(id) : null
  );

  const producer = stateProducer || fetchedProducer;

  const { data: products = [], isLoading: isLoadingProducts } = useGetProductsByProducerQuery(
    producer?.id ?? null
  );

  if (isLoadingProducer) {
    return <div className="w-full flex justify-center py-20 text-clay">Carregando produtor...</div>;
  }

  if (!producer) {
    return <Navigate to="/descobrir" />;
  }

  return (
    <section className="w-full max-w-7xl py-16 px-8 flex gap-16 flex-col items-center">
      <div className="w-full max-w-4xl flex flex-col items-center text-center px-8 mb-20">
        <p className="uppercase tracking-[1.4px] text-argil text-xs font-medium mb-4">
          {producer.city}, {producer.state}
        </p>
        <h1 className="text-5xl md:text-6xl font-ibm text-base-title mb-6 tracking-[-1.5px] font-medium">
          {producer.brandName}
        </h1>
        <p className="text-clay text-lg max-w-2xl leading-relaxed font-light">
          {producer.bioPhrase || "Uma história de amor e dedicação à terra."}
        </p>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16 px-8 mb-24">
        <DefaultPic
          src={imageUrl(producer.profilePhotoUrl)}
          className="w-full aspect-square object-cover rounded-xl"
        />
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-ibm text-base-title mb-6 tracking-[-0.9px]">
            {producer.bioTitle || "Nossa História"}
          </h2>
          <div className="text-base-text leading-relaxed text-sm whitespace-pre-line mb-8 font-light">
            {producer.bio || "Esta fazenda ainda não cadastrou uma biografia completa."}
          </div>
          <Button
            label="4.9 | Ver Avaliações"
            solarIcon={Star}
            iconPosition="left"
            className="w-fit"
          />
        </div>
      </div>

      <div className="flex justify-center mb-16">
        <Leaf size={28} color="#C9A97A" />
      </div>

      <div className="w-full max-w-5xl flex flex-col items-center px-8 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-ibm text-base-title mb-3 tracking-[-0.9px]">
            {producer.productsTitle || "Catálogo de Produtos"}
          </h2>
          <p className="text-clay text-sm">
            {producer.productsSubtitle || "Produzidos com excelência."}
          </p>
        </div>

        {isLoadingProducts ? (
          <div className="text-clay">Carregando produtos...</div>
        ) : products.length === 0 ? (
            <div className="w-full">
                <EmptyState type="produtos" />
            </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col">
                <DefaultPic
                  src={imageUrl(product.imageUrl)}
                  className="w-full aspect-[4/3] object-cover rounded-lg mb-4 bg-[#C9A97A1A]"
                />
                <h3 className="font-medium text-base-title text-base mb-2">
                  {product.name}
                </h3>
                <p className="text-base-text text-sm leading-relaxed mb-3 flex-1 line-clamp-3">
                  {product.description}
                </p>
                <p className="text-argil text-xs font-medium uppercase tracking-[0.5px]">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-full max-w-4xl px-8">
        <div className="w-full rounded-xl border border-[#C9A97A4D] bg-[#C9A97A0D] p-12 flex flex-col items-center text-center">
          <h3 className="text-3xl font-ibm text-base-title mb-4 tracking-[-0.9px]">
            Quer levar essa história para casa?
          </h3>
          <p className="text-base-text text-sm max-w-lg mb-8 leading-relaxed">
            Acreditamos que a melhor forma de apoiar quem produz é conversando
            direto com a fonte. Fale com <strong>{producer.brandName}</strong> para
            fazer sua encomenda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-6">
            <Button
              label="Chamar no WhatsApp"
              solarIcon={ChatRoundLine}
              iconPosition="left"
              TextColor="white"
              className="bg-green! hover:brightness-90!"
              onClick={() => {
                if (producer.phone) {
                  window.open(
                    `https://wa.me/55${producer.phone.replace(/\D/g, "")}`,
                    "_blank"
                  );
                }
              }}
            />
            {producer.instagram && (
              <Button
                label="Acompanhar no Instagram"
                solarIcon={Camera}
                iconPosition="left"
                TextColor="base-title"
                className="bg-transparent! border border-[#C9A97A4D] hover:bg-[#C9A97A1A]!"
                onClick={() =>
                  window.open(
                    `https://instagram.com/${producer.instagram?.replace("@", "")}`,
                    "_blank"
                  )
                }
              />
            )}
          </div>
          <p className="text-xs text-clay italic">
            Ao entrar em contato, diga que conheceu a história pelo Raízes da Terra.
          </p>
        </div>
      </div>
    </section>
  );
};
