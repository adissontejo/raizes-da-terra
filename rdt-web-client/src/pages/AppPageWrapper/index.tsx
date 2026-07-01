import logoImg from "~/assets/logo-dark.svg";
import { DefaultPic } from "~/components/DefaultPic";
import { NavButton } from "./NavButton";
import { retrieveProducerId } from "~/store/producer";
import { useGetProducerByIdQuery } from "~/services/api/modules/producers/queries/useGetProducerByIdQuery";
import { Navigate, useNavigate } from "react-router";

export interface PageWrapperProps {
  children: React.ReactNode;
}

export const AppPageWrapper = ({ children }: PageWrapperProps) => {
  const producerId = retrieveProducerId();

  const {
    data: producer,
    isLoading: isLoadingProducer,
    isError,
  } = useGetProducerByIdQuery(producerId);

  const navigate = useNavigate();

  if (isError) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-base-background w-full min-h-screen flex flex-col gap-2.5">
      <header className="w-full border-b border-b-[#C9A97A4D] py-6 px-8 flex gap-2 justify-between">
        <img src={logoImg} className="h-11.25" />
        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-6">
            <NavButton label="Descobrir" to="/descobrir" />
          </nav>
          {!!producerId && (
            <button
              className="rounded-full border border-[#2C1A0E33] py-2 px-5 flex items-center justify-start gap-4"
              onClick={() => navigate("/configuracoes-produtor")}
            >
              <span className="font-medium text-sm text-base-title">
                {isLoadingProducer ? "Carregando..." : producer?.brandName}
              </span>
              <DefaultPic
                src={
                  producer?.profilePhotoUrl
                    ? `${import.meta.env.VITE_SERVER_URL}${producer.profilePhotoUrl}`
                    : undefined
                }
                className="size-8 rounded-full"
              />
            </button>
          )}
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center">{children}</div>

      <footer className="py-12 px-8 border-t border-t-[#C9A97A4D] flex items-center justify-center">
        <div className="w-full max-w-7xl flex items-center justify-between gap-2">
          <div className="flex flex-col gap-1">
            <p className="text-sm tracking-[-0.7px] uppercase">
              Raízes da Terra
            </p>
            <p className="text-xs text-clay">
              Dando visibilidade a quem tem raízes profundas.
            </p>
          </div>
          <p className="text-sm text-clay">Seja um produtor</p>
        </div>
      </footer>
    </div>
  );
};
