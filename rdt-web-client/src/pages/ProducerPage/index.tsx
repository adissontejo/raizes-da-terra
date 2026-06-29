import { useNavigate } from "react-router";
import { defaultProducer } from "./defaultProducer";

export const ProducerPage = () => {
    const navigate = useNavigate();

    return (
    <section className="bg-[#F3E8D7] min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-[#B86F4B] text-sm mb-6">
            {defaultProducer.city}, {defaultProducer.state}
          </p>
          <h1 className="text-5xl md:text-6xl font-serif text-[#2E1A12] mb-6">
            {defaultProducer.brandName}
          </h1>
          <p className="text-[#7A5B4A] text-lg max-w-2xl mx-auto leading-relaxed">
            {defaultProducer.bioPhrase}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://placehold.co/600x600"
              alt={defaultProducer.brandName}
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-serif text-[#2E1A12] leading-tight mb-8">
              {defaultProducer.bioTitle}
            </h2>

            <div className="text-[#5C4638] leading-8 text-[17px] whitespace-pre-line">
              {defaultProducer.bio}
            </div>
            <button className="mt-10 bg-[#2E140B] hover:bg-[#442114] transition-colors text-white px-6 py-4 rounded-xl flex items-center gap-3 shadow-md">
              <span>⭐</span>
              <span className="font-medium">
                4.9 | Ver Avaliações
              </span>
            </button>
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-14">
                <div className="w-6 h-6 border border-[#C9A46B] rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 border border-[#C9A46B] rounded-full" />
                </div>
            </div>
            <div className="text-center mb-16">
                <h2 className="text-4xl font-serif text-[#3B2418] mb-4">
                    {defaultProducer.productsTitle}
                </h2>
                <p className="text-[#8A654F] text-lg">
                    {defaultProducer.productsSubtitle}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <div>
                <img
                    src="https://placehold.co/600x600"
                    alt={defaultProducer.p1Title}
                    className="w-full h-[320px] object-cover rounded-xl"
                />

                <h3 className="mt-5 text-3xl font-serif text-[#3B2418]">
                    {defaultProducer.p1Title}
                </h3>

                <p className="mt-4 text-[#7A5B4A] text-lg leading-8">
                    {defaultProducer.p1Description}
                </p>

                <p className="mt-4 text-[#D17B47] text-lg">
                    {defaultProducer.p1Embalagem}
                </p>
              </div>

              <div>
                <img
                    src="https://placehold.co/600x600"
                    alt={defaultProducer.p2Title}
                    className="w-full h-[320px] object-cover rounded-xl"
                />

                <h3 className="mt-5 text-3xl font-serif text-[#3B2418]">
                    {defaultProducer.p2Title}
                </h3>

                <p className="mt-4 text-[#7A5B4A] text-lg leading-8">
                    {defaultProducer.p2Description}
                </p>

                <p className="mt-4 text-[#D17B47] text-lg">
                    {defaultProducer.p2Embalagem}
                </p>
              </div>
            </div>

            <div className="border border-[#D9C4AE] bg-[#F1E3D1] rounded-sm py-20 px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-5xl font-serif text-[#3B2418] leading-tight mb-8">
                    Quer levar essa história para casa?
                    </h3>
                    <p className="text-[#8A654F] text-lg leading-8 mb-12">
                    Acreditamos que a melhor forma de apoiar quem produz é
                    conversando direto com a fonte. Fale com {defaultProducer.brandName}
                    para fazer sua encomenda.
                    </p>
                    <div className="flex flex-col md:flex-row gap-5 justify-center mb-8">
                    <a
                        href={`https://wa.me/${defaultProducer.phone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#537C58] hover:bg-[#466A4B] transition-colors text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 min-w-[260px]"
                    >
                        <span>💬</span>
                        <span>Chamar no WhatsApp</span>
                    </a>
                    <a
                        href={`https://instagram.com/${defaultProducer.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-[#B99270] text-[#4A2D20] hover:bg-[#EAD9C7] transition-colors px-8 py-4 rounded-xl flex items-center justify-center gap-3 min-w-[260px]"
                    >
                        <span>📷</span>
                        <span>Acompanhar no Instagram</span>
                    </a>
                    </div>
                    <p className="text-sm italic text-[#9B7A63]">
                    Ao entrar em contato, diga que conheceu a história
                    pelo Raízes da Terra.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}