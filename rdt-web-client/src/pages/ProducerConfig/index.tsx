import { useState } from "react";
import { useNavigate } from "react-router";
import { Box, Logout2, UserCircle } from "@solar-icons/react";
import { MenuButton } from "./MenuButton";
import { MenuDivider } from "./MenuDivider";
import { ProfileConfig } from "./ProfileConfig";
import { ProductsManagement } from "./ProductsManagement";

export const ProducerConfig = () => {
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState<"profile" | "products">(
    "profile",
  );

  return (
    <div className="w-full max-w-7xl py-16 px-8 flex gap-16">
      <aside className="w-56 flex flex-col gap-2">
        <MenuButton
          icon={UserCircle}
          label="Meu Perfil"
          isSelected={selectedTab === "profile"}
          onClick={() => setSelectedTab("profile")}
        />
        <MenuButton
          icon={Box}
          label="Meus Produtos"
          isSelected={selectedTab === "products"}
          onClick={() => setSelectedTab("products")}
        />
        <MenuDivider />
        <MenuButton
          icon={Logout2}
          label="Sair da conta"
          onClick={() => navigate("/")}
          className="text-argil-dark!"
        />
      </aside>

      <main className="w-full flex flex-col gap-8">
        <div className="w-full flex flex-col gap-2">
          <h2 className="font-ibm text-2xl tracking-[-0.75px]">
            {selectedTab === "profile"
              ? "Configurações do Perfil"
              : "Adicionar Produto"}
          </h2>
          <p className="text-sm text-clay">
            {selectedTab === "profile"
              ? "Gerencie as informações da sua fazenda e sua história."
              : "Cadastre um novo item ao seu catálogo."}
          </p>
        </div>
        {selectedTab === "profile" ? <ProfileConfig /> : <ProductsManagement />}
      </main>
    </div>
  );
};
