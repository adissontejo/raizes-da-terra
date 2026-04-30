import {
  AltArrowDown,
  ArrowRight,
  Box,
  Heart,
  Leaf,
  MapPoint,
  Star,
  UsersGroupTwoRounded,
  WalletMoney,
  Widget,
} from "@solar-icons/react";
import type { Icon } from "@solar-icons/react/lib/types";
import { useRef } from "react";
import { Link, useNavigate } from "react-router";
import backgroundImg from "~/assets/home-background.png";
import logoImg from "~/assets/logo.svg";
import { Button } from "~/components/Button";
import { Input } from "~/components/Input";

interface BenefitsTitleProps {
  icon: Icon;
  label: string;
}

const BenefitsTitle = ({ icon: Icon, label }: BenefitsTitleProps) => {
  return (
    <div className="w-full pb-4 border-b border-b-[#C9A97A4D] flex gap-3 items-center">
      <Icon size={28} color="var(--color-argil)" />
      <span className="text-xl tracking-[-0.6px] text-base-title">{label}</span>
    </div>
  );
};

interface BenefitCardProps {
  icon: Icon;
  title: string;
  label: string;
}

const BenefitCard = ({ icon: Icon, title, label }: BenefitCardProps) => {
  return (
    <div className="w-full flex gap-5 group">
      <div
        className="
          min-w-12 h-12 rounded-lg flex items-center justify-center
          group-odd:bg-[#C9A97A33] group-even:bg-[#2C1A0E0D] group-even:border group-even:border-[#2C1A0E1A]
        "
      >
        <Icon size={24} color="var(--color-base-title)" />
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="font-medium text-sm text-base-title">{title}</p>
        <p className="text-sm text-clay">{label}</p>
      </div>
    </div>
  );
};

export const Home = () => {
  const productViewRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col">
      <div className="w-full h-screen relative">
        <img
          src={backgroundImg}
          className="object-cover w-full h-full absolute z-0"
        />

        <div
          className="w-full h-full py-6 px-8  relative z-10 flex flex-col justify-between items-center"
          style={{
            background:
              "linear-gradient(90deg, rgba(26, 15, 8, 0.9) 0%, rgba(44, 26, 14, 0.8) 50%, rgba(44, 26, 14, 0.5) 100%)",
          }}
        >
          <header className="flex justify-between w-full">
            <img src={logoImg} className="h-11.25" />

            <button
              className="
                flex px-5 py-2 border border-[#F5E9D680] rounded-full gap-2 items-center
                hover:brightness-70 transition-[filter]
              "
            >
              <p className="font-medium text-sm text-base-background">
                Conheça a plataforma
              </p>
              <ArrowRight size={16} color="var(--color-base-background)" />
            </button>
          </header>

          <div className="flex items-center w-full max-w-7xl px-8 gap-16">
            <aside className="flex flex-col gap-6 max-w-152">
              <p className="text-sm uppercase text-[#C9A97ACC] font-medium tracking-[1.4px]">
                Para quem cria com as mãos
              </p>
              <h1 className="text-6xl font-ibm text-base-background tracking-[-1.5px">
                Muito além do produto: leve a história de quem faz.
              </h1>
              <p className="text-lg font-medium text-base-subtitle max-w-lg">
                Conectamos produtores rurais, artesãos e pequenos criadores
                diretamente a quem valoriza a verdadeira essência de cada
                criação. Sem intermediários e com muito mais propósito.
              </p>
            </aside>

            <main className="bg-base-background w-full max-w-md rounded-xs border border-[#C9A97A4D] p-8 gap-6 flex flex-col">
              <div className="w-full gap-6 flex border-b border-b-[#C9A97A4D]">
                <button className="relative top-0.5 pb-3 text-sm border-b-2 transition-colors pt-0.5 text-base-title font-medium  border-b-base-title">
                  Entrar
                </button>
                <button
                  className="relative top-0.5 pb-3 text-sm border-b-2 border-b-transparent transition-colors pt-0.5 text-clay"
                  onClick={() => navigate("/configuracoes-produtor")}
                >
                  Criar conta
                </button>
              </div>

              <div className="pt-2 gap-1 flex flex-col">
                <h2 className="font-ibm text-xl text-base-title tracking-[-0.6px]">
                  Acesse seu painel
                </h2>
                <p className="text-xs text-clay">
                  Gerencie seus produtos, pedidos e história.
                </p>
              </div>

              <form
                className="flex flex-col gap-5"
                onSubmit={(e) => [
                  e.preventDefault(),
                  navigate("/configuracoes-produtor"),
                ]}
              >
                <Input label="E-mail" placeholder="seu@email.com" />
                <Input label="Senha" type="password" placeholder="••••••••" />
                <Button label="Entrar na Plataforma" solarIcon={ArrowRight} />
              </form>

              <p className="text-xs text-clay self-center">
                Quer vender suas criações?{" "}
                <Link
                  to="/cadastro-produtor"
                  className="font-medium text-base-title"
                >
                  Cadastre seu negócio
                </Link>
              </p>
            </main>
          </div>

          <button
            className="flex flex-col items-center gap-2 hover:brightness-80 transition-[filter]"
            onClick={() =>
              productViewRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="font-medium text-lg tracking-[1px] uppercase text-base-subtitle">
              Descubra
            </span>
            <AltArrowDown size={20} color={"var(--color-base-subtitle)"} />
          </button>
        </div>
      </div>

      <div
        ref={productViewRef}
        className="w-full h-screen bg-base-background flex flex-col"
      >
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="w-full max-w-7xl flex flex-col items-center gap-24">
            <div className="max-w-2xl flex flex-col items-center gap-3">
              <p className="font-medium text-xs tracking-[0.6px] uppercase text-argil">
                Nosso Propósito
              </p>
              <h2 className="font-ibm text-3xl tracking-[-0.9px] text-base-title text-center">
                Valorizamos as raízes de quem produz e transformamos a
                experiência de quem compra.
              </h2>
            </div>

            <div className="w-full grid grid-cols-2 gap-x-24 gap-y-10">
              <BenefitsTitle icon={Leaf} label="Para quem produz e cria" />
              <BenefitsTitle icon={Heart} label="Para quem compra" />
              <BenefitCard
                icon={WalletMoney}
                title="Valorização Real"
                label="Sem intermediários ou taxas abusivas. Você define seu preço e recebe o valor justo pela sua arte e dedicação."
              />
              <BenefitCard
                icon={Star}
                title="Propósito e Autenticidade"
                label="Adquira produtos únicos com alma, feitos de forma artesanal e com profundo respeito às raízes e à terra."
              />
              <BenefitCard
                icon={MapPoint}
                title="Alcance Nacional"
                label="Sua arte, colheita e história expostas para clientes de todo o país que valorizam o consumo autêntico e consciente."
              />
              <BenefitCard
                icon={Box}
                title="Apoio Direto"
                label="Acesso a pequenos lotes e peças exclusivas, garantindo que seu dinheiro apoie diretamente as famílias produtoras."
              />
              <BenefitCard
                icon={Widget}
                title="Conte sua História"
                label="Um painel fácil de usar pelo celular para cadastrar produtos, gerenciar estoque e acompanhar seus pedidos."
              />
              <BenefitCard
                icon={UsersGroupTwoRounded}
                title="Conexão Real"
                label="Conheça quem faz. Mais do que receber um pacote em casa, você descobre o rosto e a trajetória por trás de cada criação."
              />
            </div>
          </div>
        </div>

        <footer className="p-8 w-full bg-base-title border-t border-t-[#C9A97A33] flex justify-center items-center">
          <div className="w-full max-w-7xl flex justify-between items-center">
            <img src={logoImg} className="w-20" />
            <p className="text-xs text-[#F5E9D699]">
              © 2026 Raízes da Terra. Conectando tradições.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
