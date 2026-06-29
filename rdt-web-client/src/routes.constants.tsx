import { Outlet, type RouteObject } from "react-router";
import { Home } from "./pages/Home";
import { RegisterProducer } from "./pages/RegisterProducer";
import { AppPageWrapper } from "./pages/AppPageWrapper";
import { ProducerConfig } from "./pages/ProducerConfig";
import { ProducerPage } from "./pages/ProducerPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cadastro-produtor",
    element: <RegisterProducer />,
  },
  {
    path: "/",
    element: (
      <AppPageWrapper>
        <Outlet />
      </AppPageWrapper>
    ),
    children: [
      {
        path: "configuracoes-produtor",
        element: <ProducerConfig />,
      },
      {
        path: "pagina-produtor",
        element: <ProducerPage />,
      }
    ],
  },
];
