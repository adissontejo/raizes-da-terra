import { Camera, ChatRoundLine, Star, Leaf } from "@solar-icons/react";
import { DefaultPic } from "~/components/DefaultPic";
import { Button } from "~/components/Button";
import { defaultProducer } from "./defaultProducer";

// Importando os assets temporários que você já usa no projeto
import pfpTemp from "~/assets/pfp-temp.png";
import product1Temp from "~/assets/product-1-temp.png";
import product2Temp from "~/assets/product-2-temp.png";

export const ProducerPage = () => {
  return (
    <section className="w-full max-w-7xl py-16 px-8 flex gap-16 flex-col items-center">

      <div className="w-full max-w-4xl flex flex-col items-center text-center px-8 mb-20">
        <p className="uppercase tracking-[1.4px] text-argil text-xs font-medium mb-4">
          {defaultProducer.city}, {defaultProducer.state}
        </p>
        <h1 className="text-5xl md:text-6xl font-ibm text-base-title mb-6 tracking-[-1.5px] font-medium">
          {defaultProducer.brandName}
        </h1>
        <p className="text-clay text-lg max-w-2xl leading-relaxed font-light">
          {defaultProducer.bioPhrase}
        </p>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16 px-8 mb-24">
        <DefaultPic
          src={pfpTemp}
          className="w-full aspect-square object-cover rounded-xl"
        />
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-ibm text-base-title mb-6 tracking-[-0.9px]">
            {defaultProducer.bioTitle}
          </h2>
          <div className="text-base-text leading-relaxed text-sm whitespace-pre-line mb-8 font-light">
            "{defaultProducer.bio}"
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
            {defaultProducer.productsTitle}
          </h2>
          <p className="text-clay text-sm">
            {defaultProducer.productsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="flex flex-col">
            <DefaultPic
              src={product1Temp}
              className="w-full aspect-[4/3] object-cover rounded-lg mb-4"
            />
            <h3 className="font-medium text-base-title text-base mb-2">
              {defaultProducer.p1Title}
            </h3>
            <p className="text-base-text text-sm leading-relaxed mb-3 flex-1">
              {defaultProducer.p1Description}
            </p>
            <p className="text-argil text-xs font-medium uppercase tracking-[0.5px]">
              {defaultProducer.p1Embalagem}
            </p>
          </div>

          <div className="flex flex-col">
            <DefaultPic
              src={product2Temp}
              className="w-full aspect-[4/3] object-cover rounded-lg mb-4"
            />
            <h3 className="font-medium text-base-title text-base mb-2">
              {defaultProducer.p2Title}
            </h3>
            <p className="text-base-text text-sm leading-relaxed mb-3 flex-1">
              {defaultProducer.p2Description}
            </p>
            <p className="text-argil text-xs font-medium uppercase tracking-[0.5px]">
              {defaultProducer.p2Embalagem}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl px-8">
        <div className="w-full rounded-xl border border-[#C9A97A4D] bg-[#C9A97A0D] p-12 flex flex-col items-center text-center">
          <h3 className="text-3xl font-ibm text-base-title mb-4 tracking-[-0.9px]">
            Quer levar essa história para casa?
          </h3>
          <p className="text-base-text text-sm max-w-lg mb-8 leading-relaxed">
            Acreditamos que a melhor forma de apoiar quem produz é conversando
            direto com a fonte. Fale com a {defaultProducer.brandName} para
            fazer sua encomenda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-6">
            <Button
              label="Chamar no WhatsApp"
              solarIcon={ChatRoundLine}
              iconPosition="left"
              TextColor="white"
              className="bg-green! hover:brightness-90!"
              onClick={() =>
                window.open(
                  `https://wa.me/${defaultProducer.phone.replace(/\D/g, "")}`,
                  "_blank"
                )
              }
            />
            <Button
              label="Acompanhar no Instagram"
              solarIcon={Camera}
              iconPosition="left"
              TextColor="base-title"
              className="bg-transparent! border border-[#C9A97A4D] hover:bg-[#C9A97A1A]!"
              onClick={() =>
                window.open(
                  `https://instagram.com/${defaultProducer.instagram}`,
                  "_blank"
                )
              }
            />
          </div>
          <p className="text-xs text-clay italic">
            Ao entrar em contato, diga que conheceu a história pelo Raízes da
            Terra.
          </p>
        </div>
      </div>
    </section>
  );
};
