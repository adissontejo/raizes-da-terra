import type { RouteObject } from "react-router";
import { Home } from "./pages/Home";
import { RegisterProducer } from "./pages/RegisterProducer";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cadastro-produtor",
    element: <RegisterProducer />,
  },
];
