import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./routes.constants";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./consts/queryClient";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter(routes);

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-right" />
    </QueryClientProvider>
  );
};
