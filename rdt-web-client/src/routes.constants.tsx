import type { RouteObject } from "react-router";
import { Main } from "./pages/Main";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Main />,
  },
];
