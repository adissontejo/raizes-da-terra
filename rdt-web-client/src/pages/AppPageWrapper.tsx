import { Link } from "react-router";
import logoImg from "~/assets/logo-dark.svg";
import { ProfilePic } from "~/components/ProfilePic";

// TO-DO: delete asset
import pfpTemp from "~/assets/pfp-temp.png";

interface NavButtonProps {
  label: string;
  to: string;
}

const NavButton = ({ label, to }: NavButtonProps) => {
  return (
    <Link
      to={to}
      className="text-sm text-clay hover:brightness-50 transition-[filter]"
    >
      {label}
    </Link>
  );
};

export interface PageWrapperProps {
  children: React.ReactNode;
}

export const AppPageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className="bg-base-background w-full min-h-screen flex flex-col gap-2.5">
      <header className="w-full border-b border-b-[#C9A97A4D] py-6 px-8 flex gap-2 justify-between">
        <img src={logoImg} className="h-11.25" />
        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-6">
            <NavButton label="Descobrir" to="/descobrir" />
            <NavButton label="Produtores" to="/produtores" />
          </nav>
          <button className="rounded-full border border-[#2C1A0E33] py-2 px-5 flex items-center justify-start gap-4">
            <span className="font-medium text-sm text-base-title">
              Dona Maria do Carmo
            </span>
            <ProfilePic src={pfpTemp} className="size-8 rounded-full" />
          </button>
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
