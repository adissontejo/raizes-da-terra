import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./routes.constants";

const router = createBrowserRouter(routes);

export const App = () => {
  return <RouterProvider router={router} />;
};
